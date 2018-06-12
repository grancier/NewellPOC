/**
 * @file
 * Task: SVG.
 */

module.exports = function svgTask(gulp, plugins, config) {
  gulp.task('svg', () => {
    config.svg.source.forEach((directory) => {
      gulp
        .src(`svg/source/${directory}/**/*.svg`)
        .pipe(plugins.svgSprites({
          padding: 10,
          svg: {
            sprite: `${config.svg.destination}/${directory}.svg`,
          },
          template: { scss: true },
          cssFile: `${config.svg.sass}/_${directory}.scss`,
          preview: false,
        }))
        .pipe(gulp.dest('./'));
    });
  });
};
