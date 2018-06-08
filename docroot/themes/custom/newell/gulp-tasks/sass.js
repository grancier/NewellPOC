/**
 * @file
 * Task: Sass.
 */

module.exports = function sassTask(gulp, plugins, config) {
  gulp.task('sass', () =>
    gulp
      .src(config.sass.source)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sassGlob())
      .pipe(plugins.sass(config.sass.options))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.sass.destination)));
};
