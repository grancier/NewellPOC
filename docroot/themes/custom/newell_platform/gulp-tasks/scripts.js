/**
 * @file
 * Task: Default.
 */

module.exports = function scriptsTask(gulp, plugins, config) {
  gulp.task('scripts', () =>
    gulp
      .src(config.js.source)
      .pipe(plugins.babel({ presets: ['env'] }))
      .pipe(gulp.dest(config.js.destination)));
};
