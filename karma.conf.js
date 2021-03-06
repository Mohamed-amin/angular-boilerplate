//jshint strict: false
module.exports = function(config) {
  config.set({

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-animate/angular-animate.min.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/lodash/lodash.js',
      'app/app.js',
      'app/controllers/*.js',
      'app/services/*.js',
      'tests/**/*.js',
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
