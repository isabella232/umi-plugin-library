(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/api/2-doc.mdx":function(e,n,t){"use strict";var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),m=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),r=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),p=a(t("./node_modules/umi-build-dev/node_modules/react/index.js")),s=t("./node_modules/@mdx-js/tag/dist/index.js"),c=function(e){function n(e){var t;return(0,l.default)(this,n),(t=(0,r.default)(this,(0,i.default)(n).call(this,e))).layout=null,t}return(0,d.default)(n,e),(0,m.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components;(0,o.default)(e,["components"]);return p.default.createElement(s.MDXTag,{name:"wrapper",components:n},p.default.createElement(s.MDXTag,{name:"h1",components:n,props:{id:"doc-\u914d\u7f6e"}},"doc \u914d\u7f6e"),p.default.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"\u4ec0\u4e48\u662f-docz"}},"\u4ec0\u4e48\u662f docz?"),p.default.createElement(s.MDXTag,{name:"p",components:n},"docz \u662f\u4e00\u4e2a\u57fa\u4e8e mdx \u7684\u6587\u6863\u5de5\u5177, \u6211\u4eec\u7684\u6587\u6863\u529f\u80fd\u57fa\u4e8e\u5176\u5f00\u53d1, \b\u8be6\u60c5\u53ef\u89c1 ",p.default.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/pedronauck/docz"}},"docz")),p.default.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"\u793a\u4f8b"}},"\u793a\u4f8b"),p.default.createElement(s.MDXTag,{name:"pre",components:n},p.default.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"export default {\n  plugins: [\n    ['umi-plugin-library', {\n        /** doc \u914d\u7f6e */\n        doc: {\n            title: 'Umi \u7ec4\u4ef6\u5f00\u53d1\u6587\u6863',\n            theme: 'docz-theme-default'\n        },\n    }],\n  ],\n}\n")),p.default.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"title"}},"title"),p.default.createElement(s.MDXTag,{name:"ul",components:n},p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Type: ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"string")),p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Default: ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"''"))),p.default.createElement(s.MDXTag,{name:"p",components:n},"\u6807\u9898"),p.default.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"theme"}},"theme"),p.default.createElement(s.MDXTag,{name:"ul",components:n},p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Type: ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"string")),p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Default: ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'docz-theme-default'"))),p.default.createElement(s.MDXTag,{name:"p",components:n},"\u4e3b\u9898, \u53e6\u5916\u8fd8\u6709\u4e00\u4e2a ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docz-theme-antd")," \u4e0d\u6210\u719f, \u5efa\u8bbe\u4e2d."),p.default.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"themeconfig"}},"themeConfig"),p.default.createElement(s.MDXTag,{name:"ul",components:n},p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Type: ",p.default.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"object")),p.default.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"Default: \u5982\u4e0b, \u53ef\u6309\u7ed3\u6784\u8986\u76d6")),p.default.createElement(s.MDXTag,{name:"pre",components:n},p.default.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const defaultThemeConfig = {\n  /**\n   * Mode\n   */\n  mode: 'light', // you can use: 'dark' or 'light'\n  /**\n   * Show/hide Playground editor by default\n   */\n  showPlaygroundEditor: true,\n  /**\n   * Set the numbers of max lines before scroll editor\n   */\n  linesToScrollEditor: 16,\n  /**\n   * Customize codemirror theme\n   */\n  codemirrorTheme: 'docz-light',\n  /**\n   * Logo\n   */\n  logo: {\n    src: `https://avatars2.githubusercontent.com/u/33895495?s=48&v=4`,\n    width: 48,\n  },\n  /**\n   * Radius\n   */\n  radii: '4px',\n  /**\n   * Colors (depends on select mode)\n   */\n  colors: {\n    white: '#FFFFFF',\n    grayExtraLight: '#EEF1F5',\n    grayLight: '#CED4DE',\n    gray: '#7D899C',\n    grayDark: '#2D3747',\n    grayExtraDark: '#1D2330',\n    dark: '#13161F',\n    blue: '#0B5FFF',\n    skyBlue: '#1FB6FF',\n  },\n  /**\n   * Styles\n   */\n  styles: {\n    body: {\n      fontFamily: \"'Source Sans Pro', Helvetica, sans-serif\",\n      fontSize: 16,\n      lineHeight: 1.6,\n    },\n    container: {\n      width: ['100%', '100%', 920],\n      padding: ['20px', '0 40px 40px'],\n      fontSize: '16px'\n    },\n    h1: {\n      margin: ['30px 0 20px', '60px 0 20px', '40px 0'],\n      fontSize: [36, 42, 48],\n      fontWeight: 100,\n      letterSpacing: '-0.02em',\n    },\n    h2: {\n      margin: ['20px 0 20px', '35px 0 20px'],\n      lineHeight: ['1.2em', '1.5em'],\n      fontSize: 28,\n      fontWeight: 600,\n      letterSpacing: '-0.02em',\n    },\n    h3: {\n      margin: '25px 0 10px',\n      fontSize: [22, 24],\n      fontWeight: 400,\n    },\n    h4: {\n      fontSize: 20,\n      fontWeight: 400,\n    },\n    h5: {\n      fontSize: 18,\n      fontWeight: 400,\n    },\n    h6: {\n      fontSize: 16,\n      fontWeight: 400,\n    },\n    list: {\n      padding: 0,\n      margin: '10px 0 10px 20px',\n    },\n    playground: {\n      padding: ['1.5em', '2em'],\n    },\n    code: {\n      margin: '0 3px',\n      padding: '4px 6px',\n      borderRadius: '3px',\n      fontFamily: '\"Source Code Pro\", monospace',\n      fontSize: '0.85em',\n    },\n    pre: {\n      fontFamily: '\"Source Code Pro\", monospace',\n      fontSize: 14,\n      lineHeight: 1.8,\n    },\n    paragraph: {\n      margin: '10px 0 30px',\n    },\n    table: {\n      overflowY: 'hidden',\n      overflowX: ['initial', 'initial', 'initial', 'hidden'],\n      display: ['block', 'block', 'block', 'table'],\n      width: '100%',\n      marginBottom: [20, 40],\n      fontFamily: '\"Source Code Pro\", monospace',\n      fontSize: 14,\n    },\n    blockquote: {\n      margin: '25px 0',\n      padding: '20px',\n      fontStyle: 'italic',\n      fontSize: 18,\n    },\n  }\n}\n")))}}]),n}(p.default.Component);n.default=c,c.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-api-2-doc.f2bbd946274cd6410bf2.js.map