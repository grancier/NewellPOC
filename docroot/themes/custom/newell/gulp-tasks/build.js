/**
 * @file
 * Task: Build.
 */

module.exports = function buildTask(gulp, plugins) {
  gulp.task('build', () => {
    plugins.runSequence('lint', 'prettier', ['sass', 'scripts', 'svg'], 'styleguide');
  });
};
