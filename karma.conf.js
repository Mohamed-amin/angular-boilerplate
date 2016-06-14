//jshint strict: false
module.exports = function(config) {
  config.set({

    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/bower_components/angular-mocks/angular-mocks.js',
      './app/controllers/**/*.js',
      'tests/controllers/*_specs.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
