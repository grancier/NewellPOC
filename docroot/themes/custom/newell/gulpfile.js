/**
 * @file
 *
 * @type {*|Gulp}
 */

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'node-sass-import-once': 'importOnce',
    'gulp-sass-glob': 'sassGlob',
    'run-sequence': 'runSequence',
    'gulp-clean-css': 'cleanCSS'
  }
});

// These are used in the options below.
var paths = {
  styles: {
    source: 'sass/',
    destination: 'css/'
  },
  scripts: 'js/',
  images: 'img/',
};

// These are passed to each task.
var options = {

// CSS.
  css: {
    files: paths.styles.destination + '**/*.css',
    file: paths.styles.destination + '/styles.css',
    destination: paths.styles.destination
  },

// SASS.
  sass: {
    files: paths.styles.source + '**/*.scss',
    file: paths.styles.source + 'styles.scss',
    destination: paths.styles.destination
  },

// JS.
  js: {
    files: paths.scripts + '**/*.js',
    destination: paths.scripts
  },

// Images.
  images: {
    files: paths.images + '**/*.{png,gif,jpg,svg}',
    destination: paths.images
  },

};

require('./gulp-tasks/build')(gulp, plugins, options);
require('./gulp-tasks/default')(gulp, plugins, options);
require('./gulp-tasks/compile-sass')(gulp, plugins, options);
require('./gulp-tasks/minify-css')(gulp, plugins, options);
