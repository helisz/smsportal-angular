'use strict';

var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var wiredep = require('wiredep').stream;

/** Wiredep - add bower dependencies to index.html **/
gulp.task('bower', function () {  
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./'));
});

/** gulp-sass **/
gulp.task('sass', function () {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass()
			  .on('error', sass.logError)
			 )
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});


/** tasks **/
gulp.task('default', ['bower','sass:watch']);
