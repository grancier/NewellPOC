/**
 * @file
 * Task: Configuration.
 */

const path = require('path');
const glob = require('glob');

module.exports = {
  sass: {
    source: ['sass/**/*.scss'],
    destination: 'dist/css',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules'],
    },
  },
  js: {
    source: ['js/**/*.js'],
    destination: 'dist/js',
  },
  svg: {
    source: glob.sync('svg/source/sprite-*').map(dir => dir.replace('svg/source/', '')),
    destination: 'dist/svg/destination',
    sass: 'sass/components/00-atoms/sprites',
  },
  styleguide: {
    source: ['sass/'],
    builder: 'builder/twig',
    destination: 'styleguide/',
    css: [
      path.relative('styleguide', 'dist/css/styles.css'),
      path.relative('styleguide', 'dist/css/styleguide/styleguide.css'),
      'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700|Roboto:300,400,700',
    ],
    js: [],
    homepage: 'styleguide/index.md',
    title: 'Newell Style Guide',
  },
};
