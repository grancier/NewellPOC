/**
 * @file
 * Task: Lint.
 */

module.exports = function lintTask(gulp, plugins, config) {
  gulp.task('lint:sass', () =>
    gulp.src(config.sass.source).pipe(plugins.gulpStylelint({
      reporters: [{ formatter: 'string', console: true }],
    })));

  gulp.task('lint:js', () =>
    gulp
      .src(config.js.source)
      .pipe(plugins.gulpEslint())
      .pipe(plugins.gulpEslint.format()));

  gulp.task('lint', ['lint:sass', 'lint:js']);
};
