'use strict';
 
var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');
 
 
// Default usage:
// Open one file with default application
 
gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});
 
 
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
 
gulp.src('./package.json').pipe(open({app: 'chrome'}));

'chrome' // Windows

.pipe(open({uri: 'file:///etc/resolv.conf', app: 'google-chrome'}));
var options = {
    uri: 'localhost:3000',
    app: '/Applications/Google\ Chrome.app'
  };
  gulp.src('./')
    .pipe(open(options));

    'http://localhost:3000'
 
// Example:
gulp.src('')
.pipe(open({app: 'google-chrome', uri: 'http://localhost:3000'}));
 
gulp.task('browser', function(){
  gulp.src('./second.html')
  .pipe(open({app: browser}));
});
 
// Simple usage, no options.
// This will use the uri in the default browser
 
gulp.task('uri', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://www.google.com'}));
});
 
// Open an URL in a given browser:
 
gulp.task('app', function(){
  var options = {
    uri: 'localhost:3000',
    app: 'firefox'
  };
  gulp.src(__filename)
  .pipe(open(options));
});
 
// Run the task with gulp
 
gulp.task('default', ['open', 'uri', 'app', 'browser']);
 
