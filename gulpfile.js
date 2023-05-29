const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function paraEjemplosSASS() {
    return src('sass-exportado/estilo3.scss')
    .pipe(sass())
    .pipe(dest('Resources'));
}

function vigilanteDeCambios() {
    watch(['sass-exportado/estilo3.scss'], paraEjemplosSASS);
}

exports.default = series(paraEjemplosSASS, vigilanteDeCambios);