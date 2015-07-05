'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      options.tmp + '/serve/{modules,components,widgets}/**/*.css',
      '!' + options.tmp + '/serve/modules/vendor.css'
    ], { read: false });


    var injectScripts = gulp.src([
      options.src + '/{modules,components,widgets}/**/*.js',
      '!' + options.src + '/{modules,components,widgets}/**/*.spec.js',
      '!' + options.src + '/{modules,components,widgets}/**/*.mock.js'
    ])
    .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    var wiredepOptions = {
      directory: 'bower_components',
      exclude: [/bootstrap-sass-official/, /bootstrap\.css/]
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(wiredepOptions))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
