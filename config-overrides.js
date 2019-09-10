// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config;
//   };
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  //针对app组件进行按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#1DA57A",
      },
  })
);
