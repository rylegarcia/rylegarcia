var gulp = require('gulp');
var sass = require ('gulp-sass');
var concat = require ('gulp-concat');
var notify = require("gulp-notify");
var jshint = require('gulp-jshint');


gulp.task('styles', function (){
	return gulp.src('sass/**/*.scss')
			.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
				}))
			.on("error", notify.onError(function (error) {
			return "Message to the notifier: " + error.message;
 				}))
			.pipe(concat('style.css'))
			.pipe(gulp.dest('.'))
});

gulp.task('jshint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
});

gulp.task('default',function(){
	gulp.watch('sass/**/*.scss',['styles'])
});