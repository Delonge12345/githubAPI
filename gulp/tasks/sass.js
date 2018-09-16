module.exports = function() {
    includes.gulp.task('sass', function() {
        return includes.gulp.src('src/static/styles/*.scss')
            .pipe(includes.gp.sourcemaps.init())
            .pipe(includes.gp.sass({
                'include css':true
            }))
            .pipe(includes.gp.autoprefixer({}))
            .on("error",includes.gp.notify.onError({
                title: 'style'
            }))
            .pipe(includes.gp.sourcemaps.write())
            
            .pipe(includes.gulp.dest('build/static/css'))
            .pipe(includes.browserSync.reload({
                stream:true
            }));
    });
}