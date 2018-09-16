module.exports = function() {
    includes.gulp.task('serve', function() {
        includes.browserSync.init({
            server: {
                baseDir: "./build"
            }
        });
        // browserSync.watch('build',browserSync.reload)
    });
}