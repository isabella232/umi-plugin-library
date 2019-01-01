import { rollup, RollupOptions, OutputOptions, RollupWarning } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import * as NpmImport from 'less-plugin-npm-import';
import umiBabel from 'babel-preset-umi';
import autoNamedExports from 'rollup-plugin-auto-named-exports';
import peerExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import camelCase from 'camelcase';
import { IApi } from '..';
import { IBundleOptions } from '..';

export interface IInputOptions extends RollupOptions {
  external: string[];
}

export type BundleType = 'umd' | 'cjs' | 'esm';

// OutputOptions type bug
export interface IOutputOptions extends OutputOptions {
  format: BundleType;
}

export default class Rollup {
  private inputOptions: IInputOptions;
  private outpuOptions: any[];
  private api: IApi;

  constructor(api: IApi, options: IBundleOptions) {
    this.api = api;
    this.getOpts(options);
  }

  public async build() {
    this.outpuOptions.map(async item => {
      try {
        const bundler = await rollup({
          ...this.inputOptions,
          ...(item.format !== 'umd' && {
            external: this.inputOptions.external.concat(Object.keys(this.api.pkg.dependencies)),
          }),
        });
        await bundler.write(item);
      } catch (error) {
        // tslint:disable-next-line
        console.log(error);
        this.api.debug(error);
      }
    });
  }

  private getOpts(options: IBundleOptions) {
    const { debug, pkg }: IApi = this.api;
    const {
      input = 'src/index.js',
      cssModules = true,
      extraBabelPlugins = [],
      extraBabelPresets = [],
      namedExports,
      extraPostCSSPlugins = [],
      cjs,
      esm,
      umd,
      external = [],
    } = options;
    this.inputOptions = {
      input,
      plugins: [
        peerExternal(),
        postcss({
          modules: cssModules,
          use: [
            [
              'less',
              {
                plugins: [new NpmImport({ prefix: '~' })],
                javascriptEnabled: true,
              },
            ],
          ],
          plugins: [autoprefixer, ...extraPostCSSPlugins],
        }),
        babel({
          runtimeHelpers: true,
          presets: [...extraBabelPresets, require.resolve('@babel/preset-react')],
          plugins: [...extraBabelPlugins, ...umiBabel().plugins],
          exclude: 'node_modules/**',
        }),
        json(),
        resolve(),
        commonjs({
          include: 'node_modules/**',
          namedExports: {
            // autoNamedExports not supported module.
            'node_modules/react-is/index.js': ['ForwardRef', 'isElement', 'isValidElementType'],
            ...namedExports,
          },
        }),

        autoNamedExports(),
      ],
      onwarn: (warning: RollupWarning) => {
        if (warning.code === 'THIS_IS_UNDEFINED') {
          return;
        }
        debug(warning);
      },
      external: external.concat(['react', 'react-dom', 'antd']),
    };

    this.outpuOptions = [
      ...(cjs !== false
        ? [
            {
              format: 'cjs',
              file: pkg.main || 'dst/index.js',
            },
          ]
        : []),
      ...(esm !== false
        ? [
            {
              format: 'esm',
              file: pkg.module || 'dst/index.esm.js',
            },
          ]
        : []),
      ...(umd !== false
        ? [
            {
              format: 'umd',
              file: pkg.unpkg || 'dst/index.umd.js',
              globals: umd && umd.globals,
              name: (umd && umd.name) || camelCase(pkg.name),
            },
          ]
        : []),
    ];
  }
}