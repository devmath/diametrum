var gulp 		= require('gulp'),
	scss 		= require('gulp-sass'),
	concat 		= require('gulp-concat'),
	cssmin 		= require('gulp-cssmin'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	plumber 	= require('gulp-plumber'),
	cp 			= require('child_process'),
	browserSync = require('browser-sync');

var basePath = './',
	baseOut = basePath + '_site/assets',
	dev =  basePath + '/dev',
	assets =  basePath + '/assets',
	paths_dev = {
		js: [dev + '/js/*.js', dev + '/js/**/*.js'],
		main_scss: dev + '/scss/main.scss',
		scss: [dev + '/scss/*', dev + '/scss/**/*', dev + '/scss/**/**/*', dev + '/scss/**/**/**/*'],
		img: dev + '/img/*.{jpg,jpeg,png,gif}',
		jekyll: ['*.html', '_posts/*', '_layouts/*', '_includes/*', 'search.json']
	},
	paths_assets = {
		js: assets + '/js',
		css: assets + '/css',
		img: assets + '/img'
	},
	paths_site = {
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
	gulp.src(paths_dev.main_scss)
		.pipe(plumber())
		.pipe(scss())
		.pipe(cssmin())
		.pipe(gulp.dest(paths_site.css))
		.pipe(browserSync.reload({stream: true}))
		.pipe(gulp.dest(paths_assets.css));
});

// Concat and uglify JS
gulp.task('js', function() {
	gulp.src(paths_dev.js)
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths_site.js))
		.pipe(browserSync.reload({stream: true}))
		.pipe(gulp.dest(paths_assets.js));
});

// Minify images
gulp.task('image', function() {
	gulp.src(paths_dev.img)
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest(paths_assets.img));
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
	gulp.run('compile-scss', 'js', 'set-server');

	gulp.watch(paths_dev.scss, ['compile-scss']);
	gulp.watch(paths_dev.js, ['js']);
	gulp.watch(paths_dev.jekyll, ['rebuild']);
}

// Watch files for changes
gulp.task('default', runner);