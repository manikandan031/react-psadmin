"use strict";
var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local web server
var open = require('gulp-open'); //Opens a URL in web browser
var browserify = require('browserify'); // Bundles JS
var reactify  = require('reactify'); //JSX Transformer
var source = require('vinyl-source-stream'); //Use conventional text streams with gulp

var config = {
    port: 9005,
    baseDevUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist',
        js: './src/**/*.js',
        mainJs: './src/main.js'
    }
};

gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseDevUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('./dist/index.html')
        .pipe(
            open({
                uri: config.baseDevUrl + ':' + config.port + '/'
            })
        );
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(
            gulp.dest(config.paths.dist)
        )
        .pipe(
            connect.reload()
        );
});

gulp.task('js', function(){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
        ;
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'open', 'watch']);