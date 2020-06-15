'use strict';

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


includes.gulp.task('default',includes.gulp.series(
    includes.gulp.parallel('pug','sass','app:lib','scripts'),
    includes.gulp.parallel('watch','serve')
        

    ));