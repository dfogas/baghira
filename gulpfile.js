var bg = require('gulp-bg');
var gulp = require('gulp');
var harmonize = require('harmonize');
var makeWebpackConfig = require('./webpack/makeconfig');
var runSequence = require('run-sequence');
var webpackBuild = require('./webpack/build');
var webpackDevServer = require('./webpack/devserver');
var yargs = require('yargs');

var args = yargs
             .alias('p', 'production')
			 .argv;

//enable node harmony flag automatically
harmonize();

gulp.task('env', function() {
	process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('build-webpack-production', webpackBuild(makeWebpackConfig(false)));
gulp.task('build-webpack-dev', webpackDevServer(makeWebpackConfig(true)));
gulp.task('build-webpack', [args.production ? 'build-webpack-production' : 'build-webpack-dev']);
gulp.task('build', ['build-webpack']);

gulp.task('test', function(done) {
	runSequence('build-webpack-production', done);
});

gulp.task('server', ['env','build'], bg('node', 'src/server/server.js') );

gulp.task('default', ['server']);