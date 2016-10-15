var gulp 		= require('gulp'),
	scss 		= require('gulp-sass'),
	concat 		= require('gulp-concat'),
	cssmin 		= require('gulp-cssmin'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	plumber 	= require('gulp-plumber'),
	imagemin 	= require('gulp-imagemin'),
	browserSync = require('browser-sync');

var basePath = './',
	dev =  basePath + '/dev',
	assets =  basePath + '/assets',
	paths_in = {
		js: dev + '/js',
		scss: dev + '/scss',
		img: dev + '/img'
	},
	paths_out = {
		js: assets + '/js',
		scss: assets + '/scss',
		img: assets + '/img'
	};

// Build Jekyll
// Rebuild Jekyll
// Generate and minify SCSS
// Concat and uglify JS
// Minify images
// Set a server
// Watch files for changes