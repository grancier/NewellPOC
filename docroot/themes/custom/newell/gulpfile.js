/**
 * @file
 *
 * @type {*|Gulp}
 */

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'node-sass-import-once': 'importOnce',
    'gulp-sass-glob': 'sassGlob',
    'run-sequence': 'runSequence',
    'gulp-clean-css': 'cleanCSS',
    'gulp-stylelint': 'gulpStylelint',
    'gulp-svg-sprite': 'svgSprites',
    'gulp-eslint': 'gulpEslint',
  },
});
const config = require('./gulp-tasks/_config');

require('./gulp-tasks/sass')(gulp, plugins, config);
require('./gulp-tasks/styleguide')(gulp, plugins, config);
require('./gulp-tasks/scripts')(gulp, plugins, config);
require('./gulp-tasks/svg')(gulp, plugins, config);
require('./gulp-tasks/lint')(gulp, plugins, config);
require('./gulp-tasks/prettier')(gulp, plugins, config);
require('./gulp-tasks/build')(gulp, plugins, config);
require('./gulp-tasks/default')(gulp, plugins, config);
