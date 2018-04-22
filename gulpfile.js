"use strict";

const gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	jsmin = require('gulp-jsmin'),
    imagemin = require('imagemin'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminOptipng = require('imagemin-optipng');


// sass
gulp.task('sass', function () {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('src/dist'))
});

// js
gulp.task('jsmin', function () {
    gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/dist'));
});

// imagemin
gulp.task('imagemin', function () {
    imagemin(['src/images/**/*.{jpg,png}'], 'src/dist/images', {
        plugins: [
            imageminMozjpeg({quality: 80}),
            imageminOptipng()
        ]
    }).then(files => {
        console.log('images optimized');
    });
});

// watch
gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', ['sass']);
});


// default
gulp.task('build', ['sass', 'watch']);

// production
gulp.task('production', ['sass', 'jsmin', 'imagemin']);