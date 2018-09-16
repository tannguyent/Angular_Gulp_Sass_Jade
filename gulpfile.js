/*global require*/
"use strict";

var gulp = require('gulp'),
	jade = require('gulp-jade'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	csslint = require('gulp-csslint'),
	cssmin  = require('gulp-cssmin'),
	jquery = require('jquery'),
	jshint = require('gulp-jshint'),
	jsmin = require('gulp-jsmin'),
	imageoptimization = require('gulp-image-optimization'),
	browserSync = require('browser-sync'),
	runSequence = require('run-sequence');

/*
* Change directories here
*/
var settings = {
	publicDir: '_static',
	cssDir: '_static/assets/css',
	imageDir:'_static/assets/img',
	assetsComponentDir:'_static/assets/component',
	jsDir:'_static/assets/javascripts',
	sassDir: 'public/stylesheets',
	jsSourceDir:'public/javascripts',
	imageSourceDir: 'public/images',
	jadeDir: 'Views',
	angularSourceDir: 'app',
};

/**
 * Compile .jade files and pass in data from json file
 * matching file name. index.jade - index.jade.json
 */
gulp.task('jade', function () {
	gulp.src(settings.jadeDir + '/*.jade')
		.pipe(jade())
		.pipe(gulp.dest(settings.publicDir));
	
	gulp.src('app/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest(settings.publicDir + '/app/'));
});

/**
 * Recompile .jade files and live reload the browser
 */
gulp.task('jade-rebuild', ['jade'], function () {
	browserSync.reload();
});

/**
 * Wait for jade and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'jade'], function () {
	browserSync({
		server: {
			baseDir: settings.publicDir
		},
		notify: false
	});
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
	gulp.src(settings.sassDir + '/*.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(prefix(['last 4 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(csslint())
    	.pipe(csslint.reporter())
		.pipe(cssmin())
		.pipe(gulp.dest(settings.cssDir))
		.pipe(browserSync.reload({stream: true}));
	
	gulp.src('app/**/*.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(prefix(['last 4 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(csslint())
    	.pipe(csslint.reporter())
		.pipe(cssmin())
		.pipe(gulp.dest(settings.publicDir + '/app/'));
});

gulp.task('sass-rebuild', ['sass'], function () {
	browserSync.reload();
});

/**
 * boostrap
 */
gulp.task('boostrap', function () {
	return gulp.src('node_modules/bootstrap/dist/**/*')
		.pipe(gulp.dest(settings.assetsComponentDir + '/bootstrap/'));
});

/**
 * jquery
 */
gulp.task('jqueryComponent', function () {
   gulp.src('node_modules/jquery/dist/**/*')
		.pipe(gulp.dest(settings.assetsComponentDir + '/jquery/'));

	gulp.src('node_modules/jquery-validation/dist/**/*')
		.pipe(gulp.dest(settings.assetsComponentDir + '/jquery-validation/'));
	
	gulp.src('node_modules/requirejs/*.js')
		.pipe(gulp.dest(settings.assetsComponentDir + '/requirejs/'));
});

/**
 * jquery
 */
gulp.task('script', function () {
   gulp.src(settings.jsSourceDir + '/**/*')
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(gulp.dest(settings.jsDir));

	gulp.src('app/**/*.js')
   		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(gulp.dest(settings.publicDir + '/app/'));
	
	gulp.src('app/**/*.json')
   		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(gulp.dest(settings.publicDir + '/app/'));
});

gulp.task('script-rebuild', ['script'], function () {
	browserSync.reload();
});


/**
 * angular
 */
gulp.task('angular', function () {
   	gulp.src('node_modules/angular/**/*')
		.pipe(gulp.dest(settings.assetsComponentDir + '/angular/'));

	gulp.src('node_modules/angular-ui-router/release/**/*')
		.pipe(gulp.dest(settings.assetsComponentDir + '/angular-ui-router/'));
});

/**
 * imagemin
 */
gulp.task('imagemin', function() {
  return gulp.src(settings.imageSourceDir + "/*" )
  		.pipe(imageoptimization({
			optimizationLevel: 5,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(settings.imageDir));
});

/**
 * watch
 */
gulp.task('watch', function () {
	gulp.watch(settings.sassDir + '/**/*.scss', ['sass-rebuild']);
	gulp.watch([settings.jadeDir + '/**/*.jade'], ['jade-rebuild']);
	gulp.watch([settings.jsSourceDir + '/**/*.js'], ['script-rebuild']);

	gulp.watch(settings.angularSourceDir + '/**/*.scss', ['sass-rebuild']);
	gulp.watch([settings.angularSourceDir + '/**/*.jade'], ['jade-rebuild']);
	gulp.watch([settings.angularSourceDir + '/**/*.js'], ['script-rebuild']);
	gulp.watch([settings.angularSourceDir + '/**/*.json'], ['script-rebuild']);
});

/**
 * start
 */
gulp.task('start', function () {
	runSequence('browser-sync', 'watch');
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['jade','sass','boostrap','jqueryComponent', 'script','angular', 'imagemin','browser-sync', 'watch']);
