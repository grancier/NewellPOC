/**
 * @file
 * Task: Configuration.
 */

const glob = require('glob');

module.exports = {
  sass: {
    source: ['components/_patterns/**/*.scss'],
    destination: 'dist/css',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules'],
    },
  },
  js: {
    source: ['components/_patterns/**/*.js'],
    destination: 'dist/js',
  },
  svg: {
    source: glob.sync('svg/source/sprite-*').map(dir => dir.replace('svg/source/', '')),
    destination: 'dist/svg/destination',
    sass: 'sass/components/00-atoms/sprites',
  },
};
