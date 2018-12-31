import doczPlugin from 'umi-plugin-docz';
import Build from './build';

type Params = 'build' | 'dev';
export interface IArgs {
  _: {
    length: number;
    [index: number]: Params;
  };
}
export interface IApi {
  applyPlugins: (name: string, options: object) => object;
  cwd: string;
  registerCommand: (name: string, options: object, callback: (args: IArgs) => void) => void;
  webpackConfig: object;
  debug: (msg: any) => void;
  pkg: {
    main?: string;
    module?: string;
    unpkg?: string;
    dependencies: {
      [props: string]: string;
    };
  };
}

export type plugin = string | [string, IOpts?];

export interface IOpts extends IBundleOptions {
  doc?: {
    theme: string;
    wrapper: string;
    typescript: string;
    plugins: plugin[];
  };
}

export type BabelOpt = string | [string, any?];

export type BundleTool = 'rollup' | 'babel';

export interface IBundleTypeOutput {
  type: BundleTool;
  dir?: string;
}

export interface IBundleOptions {
  input?: string;
  cssModules?: boolean;
  extraBabelPlugins?: BabelOpt[];
  extraBabelPresets?: BabelOpt[];
  extraPostCSSPlugins?: any[];
  namedExports?: {
    [props: string]: string;
  };
  esm?: IBundleTypeOutput | false;
  cjs?: IBundleTypeOutput | false;
  umd?:
    | {
        globals?: {
          [props: string]: string;
        };
        name?: string;
      }
    | false;
  external?: string[];
}

export default function(api: IApi, opts: IOpts = {}) {
  api.registerCommand(
    'lib',
    {
      description: 'start a library dev server',
      webpack: true,
    },
    args => {
      // 获取 config
      doczPlugin(api, opts.doc);
      Build(api, opts, args);
    }
  );
}
