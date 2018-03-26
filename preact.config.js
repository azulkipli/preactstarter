import criticalCssPlugin from "preact-cli-plugin-critical-css";

export default (config, env) => {
  const options = {
    // Passed directly to the 'critical' module (this is optional)
  };

  criticalCssPlugin(config, env, options);
};
