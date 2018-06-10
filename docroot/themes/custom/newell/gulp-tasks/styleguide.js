/**
 * @file
 * Task: Styleguide.
 */

module.exports = function styleguideTask(gulp, plugins, config) {
  gulp.task('styleguide', cb => plugins.kss(config.styleguide, cb));
};
