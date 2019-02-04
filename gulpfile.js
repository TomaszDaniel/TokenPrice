var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

/*SASS -> CSS */

gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init()) // Inicjalizacja map kodu źródłowego
        .pipe(sass().on('error', sass.logError)) // Wyświetlanie błedów konsoli

        .pipe(autoprefixer({
            browsers: ['last 4 version']
        }))

        .pipe(sass({
            outputStyle: 'compressed'
        })) // Uruchomienie konwersji SASS -> CSS w formacie skompresowanym
        .pipe(sourcemaps.write()) // Dopisanie map kodu źródłowego do CSS'a
        .pipe(gulp.dest('css')) // Zapis pliku CSS do folderu CSS
        .pipe(browserSync.stream()) // Odświeżanie widoku

});



/* Obserwator plików */

gulp.task('watch', function () {
    browserSync.init({
        server: ".",
        notify: true,
        open: true
    });

    // Obserwacja SASS'a
    gulp.watch('scss/**/*.scss', ['sass']);
    // Obserwacja HTML'a
    gulp.watch('./index.html', browserSync.reload);
});