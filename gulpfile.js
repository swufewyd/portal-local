var del = require('del'),
    argv = require('yargs').argv,
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gulpIf = require('gulp-if'),
    replace = require('gulp-replace'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');




/*********************************************************************
 * vendor
 ********************************************************************/


gulp.task('build:vendor:js', function () {
    return gulp.src(['./src/vendor/js/jquery-1.11.2.js','./src/vendor/js/bootstrap.js','./src/vendor/js/echarts-all.js','./src/vendor/js/webuploader.nolog.js'])
        .pipe(concat('vendor.js'))    //合并所有js到main.js
        // .pipe(uglify())    //压缩
        .pipe(gulp.dest('./www/dist/assets/js'));  //输出
});



gulp.task('build:vendor:css', function() {

    return gulp.src([
        './src/vendor/css/**/*.css'
    ])
        .pipe(concat('vendor.css'))
        // .pipe(minifyCss())
        .pipe(gulp.dest('./www/dist/assets/css'));

});

gulp.task('build:vendor:font', function () {
    return gulp.src(['./src/vendor/fonts/*'])
        .pipe(gulp.dest('./www/dist/assets/fonts'));
});

gulp.task('build:vendor', ['clean','build:vendor:js','build:vendor:css','build:vendor:font']);


/*********************************************************************
 * admin app
 ********************************************************************/
gulp.task('build:adminApp:app', function () {
    return gulp.src('./src/app.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./www/dist/'));
});

// gulp.task('build:adminApp:css', function () {
//     return gulp.src('./src/admin/scss/admin.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./dist/assets/css/admin'));
// });
gulp.task('build:adminApp', ['clean','build:adminApp:app' ]);
gulp.task('watch:adminApp', function () {
    gulp.watch('src/**/*.*', ['build:adminApp']);
});



/*********************************************************************
 * utility
 ********************************************************************/
gulp.task('clean', function (cb) {
    del(['./www/dist/**/*'], cb);
});

gulp.task('build', ['clean','build:adminApp','build:vendor']);


gulp.task('watch', [ 'watch:adminApp']);

