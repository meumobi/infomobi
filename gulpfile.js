var gulp = require('gulp'),
path = require('path'),
fs = require('fs'),
seq = require('run-sequence'),
args = require('yargs').argv,
$ = require('gulp-load-plugins')();
/*
Execution Order
release
	build
		clean
		firebase|assets
		ionic-build
	copy-icon|copy|copy-splash|config
	build-zip




1- Replace Firebase Config;
2- Replace Assets (logo, background...);
3- Ionic Build (performs: clean, webpack, sass ...);
4- Copies - res, icon, splash;
5- Replace Config XML;
6- Zip
*/
var project = args.project || null;
var env = args.env || null;

var cwd = './PROJECTS/' + project;

gulp.task('default',function () {
	console.log('Ex: $ gulp --project=<NAME_OF_PROJECT> --env=<NAME_OF_ENVIRONMENT>');
});

var filename = env ? env + '.json': null;
var config = JSON.parse(fs.readFileSync(path.join('./config','config.json'), 'utf8'));
if (filename !== null && cwd !== null) {
	var configProject = JSON.parse(fs.readFileSync(path.join(cwd,'config.json'), 'utf8'));
	
	console.log(
		"==== Gulp ion-employee: Project="
		+ configProject.name
		+ config.version
		+ ", Environment="
		+ env
	);

	if (config.debug) {
		console.log("/!\\ === Be careful It's a debug release === /!\\ ");
		console.log("Set config.debug = false on gulpfile.js to submit");
	}
} 
/* Functions */

gulp.task('clean', function() {
	return gulp.src([
		path.join(config.dest, 'index.html'),
		path.join(config.dest, 'assets'),
		path.join(config.dest, 'build'),
		path.join(config.dest, 'res'),
		path.join(config.dest, 'icon.png'),
		path.join(config.dest, 'manifest.json'),
		path.join(config.dest, 'OneSignalSDKUpdaterWorker.js'),
		path.join(config.dest, 'OneSignalSDKWorker.js'),
		path.join(config.dest, 'service-worker.js'),
		path.join(config.dest, 'splash.png'),
		path.join(config.dest, 'config.xml'),
	], {
		read: false
	})
	.pipe($.rimraf());
});

gulp.task('firebase', function() {
	return gulp.src('./config/app.firebase.config.ts', {
		cwd: cwd
	})
	.pipe(gulp.dest('./src/app/'))
});

gulp.task('assets',function() {
	return gulp.src('./images/*', {
		cwd: cwd
	})
	.pipe(gulp.dest(path.join('./src/assets','images')))
});

gulp.task('config', function() {
	return gulp.src('config.xml')
	.pipe($.replace('@@id', configProject.id))
	.pipe($.replace('@@version', config.version))
	.pipe($.replace('@@androidVersion', config.version.replace(/\./g, "") + "00"))
	.pipe($.replace('@@name', configProject.name))
	.pipe($.replace('@@description', configProject.description))
	.pipe(gulp.dest(config.dest));
});

gulp.task('copy', function () {
	return gulp.src('./res/**/*', {
		cwd: cwd
	})
	.pipe(gulp.dest(path.join(config.dest, 'res')))
});

gulp.task('copy-splash', function () {
	return gulp.src('./res/screen/ios/Default~iphone.png', {
		cwd: cwd
	})
	.pipe($.rename('splash.png'))
	.pipe(gulp.dest(config.dest))
});

gulp.task('copy-icon', function () {
	return gulp.src('./res/icon/ios/AppIcon.appiconset/Icon-App-60x60@2x.png', {
		cwd: cwd
	})
	.pipe($.rename('icon.png'))
	.pipe(gulp.dest(config.dest))
});

gulp.task('build-zip', function () {
	var filename = project + "-" + env +"_rel-" + config.version + ".zip";
	return gulp.src('www/**/*')
		.pipe($.zip(filename))
		.pipe(gulp.dest('dist'));
});

gulp.task('ionic-build',function() {
	return gulp.src('./')
    .pipe($.exec("ionic build"))
    .pipe($.exec.reporter());
});

gulp.task('build', function(done) {
	var tasks = ['firebase','assets'];
	seq('clean',tasks,'ionic-build', done);
});

gulp.task('release', function(done) {
	var tasks = ['build','copy','copy-icon','copy-splash','config'];
	seq(tasks,'build-zip', done);
});
