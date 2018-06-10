/**
 * @file
 * Task: Default.
 */

module.exports = function prettierTask(gulp, plugins, config) {
  gulp.task('prettier', () =>
    gulp
      .src([...config.sass.source, ...config.js.source])
      .pipe(plugins.prettier({ singleQuote: true }))
      .pipe(gulp.dest(file => file.base)));
};
