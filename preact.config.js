import CopyWebpackPlugin from "copy-webpack-plugin";

export default (config, env, helpers) => {
  //   let { index } = helpers.getPluginsByName(config, 'some-plugin')[0]
  //   config.plugins.splice(index, 1)
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/assets/seo`, from: `*.*` }]));
};
