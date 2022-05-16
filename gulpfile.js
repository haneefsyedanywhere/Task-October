var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

const jsSRC = 'script.js';
const jsFolder = './src/js/';
const jsFiles = [jsSRC];

function css(done){
    gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        })) // Converts Sass to CSS with gulp-sass
        .on('error',console.error.bind(console))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'));
        done();
  };

function js(done){
    jsFiles.map(function(entry){
        return browserify({
            entries : [jsFolder + entry]
        })
        .transform(babelify, {presets:['@babel/preset-env']} )
        .bundle()
        .pipe(source(entry))
        .pipe(rename({extname:'.min.js'}))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps : true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
    });
    done();
 };
 function watch_files(){
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/js/**/*.js', js);
}
gulp.task("css", css);
gulp.task("js",js);
gulp.task('default',gulp.parallel(css,js));
gulp.task('watch',watch_files);