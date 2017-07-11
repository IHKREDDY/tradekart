//Requires gulp
var gulp = require('gulp');
// Requires the gulp-less
var less = require('gulp-less');


gulp.task('lesstocss', function () {
    return gulp.src('less/product.less')
      .pipe(less()) // Converts less to CSS with gulp-less
      .pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
    gulp.watch('less/*.less', ['lesstocss']);
    // Other watchers
})