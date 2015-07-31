/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();

module.exports = function(defaults) {
  var prodLikeEnvs = ['production', 'staging'];
  var isProductionLikeBuild = prodLikeEnvs.indexOf(env) > -1;

  var cdnHost, origin;
  if (env === 'staging') {
    origin  = 'https://staging.example.org';
    cdnHost = 'https://1234.cloudfront.net/';
  } else if (env === 'production') {
    origin  = 'https://example.org';
    cdnHost = 'https://5678.cloudfront.net/';
  }

  var app = new EmberApp(defaults, {
    origin: origin,

    SRI: {
      runsIn: prodLikeEnvs
    },
    fingerprint: {
      enabled: isProductionLikeBuild,

      // If you comment this line out, you get the integrity hashes again.
      prepend: cdnHost
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
