
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');



gulp.task('concat', function () {
    gulp.src(['./kalkulator/js/button.js',
              './kalkulator/js/index.js',
              // './kalkulator/scss/index.css'
    ])
        .pipe(concat('wynik.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});







