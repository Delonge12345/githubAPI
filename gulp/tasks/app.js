module.exports = function () {
    includes.gulp.task('app:lib', function () {
        return includes.gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'])
            .pipe(includes.gp.concat('libs.min.js'))
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });




    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/main.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    
    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/navigation.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/popup.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/preloader.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
};