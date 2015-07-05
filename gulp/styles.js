'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('styles', function () {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      options.src + '/{modules,components,widgets}/**/*.less',
      '!' + options.src + '/modules/index.less',
      '!' + options.src + '/modules/vendor.less'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/modules/', '');
        filePath = filePath.replace(options.src + '/components/', '../components/');
        filePath = filePath.replace(options.src + '/widgets/', '../widgets/');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter('index.less');
    var cssFilter = $.filter('**/*.css');

    return gulp.src([
      options.src + '/modules/index.less',
      options.src + '/modules/vendor.less'
    ])
    .pipe(indexFilter)
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(indexFilter.restore())
    //.pipe($.rubySass(sassOptions)).on('error', options.errorHandler('RubySass'))
    .pipe(less())
    .pipe(cssFilter)
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(cssFilter.restore())
    .pipe(gulp.dest(options.tmp + '/serve/modules/'))
    .pipe(browserSync.reload({ stream: true }));
  });
};
