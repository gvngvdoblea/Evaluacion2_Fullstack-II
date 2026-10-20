module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],
    files: [
      'tests/**/*.spec.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'], 
    singleRun: true, 
    concurrency: Infinity
  })
}