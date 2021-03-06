const gulp = require('gulp')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const minify_css = require('gulp-clean-css')
const sass = require('gulp-sass')

gulp.task('src', function() {
  return gulp.src("./src/**/*.js")
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest("./"))
})

gulp.task('styles', function() {
  return gulp.src([
    './src/public/sass/**/*.scss',
    './src/public/sass/**/*.css'
  ])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(minify_css({ keepBreaks: true }))
    .pipe(gulp.dest('./public/css/'))
})

gulp.task('build', [ 'src', 'styles' ], function() {})
