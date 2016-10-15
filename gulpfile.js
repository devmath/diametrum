var gulp 		= require('gulp'),
	scss 		= require('gulp-sass'),
	concat 		= require('gulp-concat'),
	cssmin 		= require('gulp-cssmin'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	plumber 	= require('gulp-plumber'),
	imagemin 	= require('gulp-imagemin'),
	cp 			= require('child_process'),
	browserSync = require('browser-sync');

var basePath = './',
	baseOut = basePath + '_site/assets',
	dev =  basePath + '/dev',
	assets =  basePath + '/assets',
	paths_in = {
		js: dev + '/js/*.js',
		scss: dev + '/scss/main.scss',
		img: dev + '/img/*.{jpg,jpeg,png,gif}',
		jekyll: ['*.html', '/**/*.html', '_posts/*.html', '_layouts/*.html', '_includes/*.html']
	},
	paths_out = {
		js: assets + '/js',
		css: assets + '/css',
		img: assets + '/img'
	},
	paths_on = {
		js: baseOut + '/js',
		css: baseOut + '/css',
		img: baseOut + '/img'
	};

// Build Jekyll
gulp.task('build', function(done) {
	return cp.spawn('jekyll', ['b'], {stdio: 'inherit'})
		.on('error', function(err) {
			console.log(err);
		})
		.on('close', done);
});

// Rebuild Jekyll
gulp.task('rebuild', ['build'], function() {
	browserSync.reload();
});

// Generate and minify SCSS
gulp.task('compile-scss', function() {
	gulp.src(paths_in.scss)
		.pipe(plumber())
		.pipe(scss())
		.pipe(cssmin())
		.pipe(gulp.dest(paths_on.css))
		.pipe(browserSync.reload(stream: true))
		.pipe(gulp.dest(paths_out.css));
});

// Concat and uglify JS
gulp.task('js', function() {
	gulp.src(paths_in.js)
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths_on.js))
		.pipe(browserSync.reload(stream: true))
		.pipe(gulp.dest(paths_out.js));
});

// Minify images
gulp.task('image', function() {
	gulp.src(paths_in.img)
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest(paths_out.img));
});

// Set a server
gulp.task('set-server', ['build'], function() {
	browserSync.init({
		server: {
			baseDir: '_site'
		}
	});
});

function runner() {
	gulp.run('build', 'compile-scss', 'js', 'image', 'set-server');

	gulp.watch(paths_in.scss, ['compile-scss']);
	gulp.watch(paths_in.js, ['js']);
	gulp.watch(paths_in.jekyll, ['rebuild']);
}

// Watch files for changes
gulp.task('default', runner);