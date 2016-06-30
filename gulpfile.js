var gulp 						= require('gulp'),
		sass 						= require('gulp-sass'),
 		watch 					= require('gulp-watch'),
 		browserSync			= require('browser-sync');

gulp.task('styles', function() {
	return gulp.src('styles/**/*')
		.pipe(sass())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('../dist/css'));
	});

gulp.task('html', function() {
	return gulp.src('html/**/*')
		.pipe(gulp.dest('../dist'));
});

gulp.task('default', ['styles', 'html'], function() {
		gulp.run('run-server', 'watch');
});

// Watch
gulp.task('watch', function () {
  gulp.watch('html/**/*', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		gulp.run('html');
		browserSync.reload();
	});

  gulp.watch('styles/**/*', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		gulp.run('styles');
		browserSync.reload();
	});
});

gulp.task('run-server', function(){
	browserSync({
    server: {
      baseDir: "../dist"
    }
	});
});
