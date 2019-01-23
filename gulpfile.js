var gulp = require('gulp'),
    args = require('yargs').argv,
    $ = require('gulp-load-plugins')();

var mode = args.mode || 'pwa';

gulp.task('preprocess',function(){
  return gulp.src('./src/**/*-pp.*')
  .pipe($.preprocess({context: { MODE: mode }}))
  .pipe($.rename(function(opt) {
    opt.basename = opt.basename.replace(/-pp/, '');
    return opt;
  }))
  .pipe(gulp.dest('./src/'));
});
