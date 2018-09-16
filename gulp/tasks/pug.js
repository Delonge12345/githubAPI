module.exports = function() {
    includes.gulp.task('pug', function() {
        return includes.gulp.src('src/pug/pages/*.pug')
            .pipe(includes.gp.pug({
                pretty: true
            }))
            .pipe(includes.gulp.dest('build'))
            .pipe(includes.browserSync.reload({
                stream:true //чтобы обновление не f5,а только в локальной части,чтоб потом не прокручивать вниз
            }));
    })
}



