/**
 * @file
 * Task: PatternLab.
 */

const { exec } = require('child_process');

module.exports = function patternlab(gulp) {
  gulp.task('patternlab', (done) => {
    exec('php pattern-lab/core/console --generate', (err) => {
      if (err) {
        err.message = err.message
          .split('\n')
          .slice(1)
          .join('\n');
        err.plugin = 'gulp-patternlab';
        console.log(err);
        done();
      }
      done();
    });
  });
};
