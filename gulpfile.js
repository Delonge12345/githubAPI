'use strict';

// var gulp = require('gulp'),
//     gp   = require('gulp-load-plugins')(),
//     browserSync = require('browser-sync').create();
    
global.includes = {
    gulp: require('gulp'),
    gp:   require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }

};

includes.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})


includes.gulp.task('default',includes.gulp.series( //запустили default,затем одновременно выполнили pug and sass
    includes.gulp.parallel('pug','sass','app:lib','scripts'),
    includes.gulp.parallel('watch','serve')
        

    ));