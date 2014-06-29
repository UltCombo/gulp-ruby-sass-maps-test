var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');

gulp.task('default', function() {

	var cssDest = 'public/css';
	gulp.src('scss/*.scss')
		.pipe(sass({
			sourcemap: true,
			dest: cssDest,
			style: 'compressed',
			noCache: true
		}))
		.pipe(gulp.dest(cssDest));
});
