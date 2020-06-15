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
        return includes.gulp.src('src/static/js/api.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/log.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/search.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    includes.gulp.task('scripts', function () {
        return includes.gulp.src('src/static/js/view.js')
            .pipe(includes.gulp.dest('build/static/js/'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });

    
   
};