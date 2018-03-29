import criticalCssPlugin from "preact-cli-plugin-critical-css";
// import Jarvis from "webpack-jarvis";
/* the rest of your webpack configs */
// const preactCliSwPrecachePlugin = require("preact-cli-sw-precache");

export default (config, env) => {
  const options = {
    width: 360,
    height: 640
  };
  // console.log("CONFIG", JSON.stringify(config));
  // console.log("ENV", JSON.stringify(env));
  criticalCssPlugin(config, env, options);

  // const precacheConfig = {
  //   staticFileGlobs: [
  //     'app/css/**.css',
  //     'app/**.html',
  //     'app/images/**.*',
  //     'app/js/**.js'
  //   ],
  //   stripPrefix: 'app/',
  //   runtimeCaching: [{
  //     urlPattern: /this\\.is\\.a\\.regex/,
  //     handler: 'networkFirst'
  //   }]
  // };

  // return preactCliSwPrecachePlugin(config, precacheConfig);
};
