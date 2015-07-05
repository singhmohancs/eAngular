'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var proxyMiddleware = require('http-proxy-middleware');

var util = require('util');

var middleware = require('./proxy');

module.exports = function(options) {

  function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
      routes = {
        '/bower_components': 'bower_components'
      };
    }

    var server = {
      baseDir: baseDir,
      routes: routes,
      port: 8080
    };

    // if (middleware.length > 0) {
    var proxy = proxyMiddleware('/api', {target: 'http://localhost:8081'});
    if (true) {
      server.middleware = [proxy];
    }

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      browser: browser,
      port: 8080
    });
     //gulp.run('watch');
  }

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
  }));

  gulp.task('serve', ['watch'], function() {
    browserSyncInit([options.tmp + '/serve', options.src], 'Google Chrome');
  });

  gulp.task('serve:dist', ['build'], function() {
    browserSyncInit(options.dist, 'Google Chrome');
  });

  gulp.task('serve:e2e', ['inject'], function() {
    browserSyncInit([options.tmp + '/serve', options.src], []);
  });

  gulp.task('serve:e2e-dist', ['build'], function() {
    browserSyncInit(options.dist, []);
  });
};