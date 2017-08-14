var openMenu = document.querySelector(".menu__sandwich-icon");
var menuList = document.querySelector(".menu__links");
var menuLinks = document.querySelectorAll(".menu__link");
//var closeWriteForm = document.querySelector(".write-form__close");

// Open/Close menu on Sandwich
openMenu.addEventListener("click", function (event) {
    event.preventDefault();
    menuList.classList.toggle("display-off");
});

// Close menu on Link
for (var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i];
    menuLink.addEventListener("click", function (event) {
        menuList.classList.add("display-off");
    });
}

/**
 * Module dependencies.
 */

var pug = require('pug')
  , fs = require('fs');

// test cases

var cases = fs.readdirSync('test/cases').filter(function(file){
  return ~file.indexOf('.pug');
}).map(function(file){
  return file.replace('.pug', '');
});

cases.forEach(function(test){
  var name = test.replace(/[-.]/g, ' ');
  if (!fs.existsSync('test/cases/' + test + '.html')) return;
  it(name, function(){
    var path = 'test/cases/' + test + '.pug';
    var str = fs.readFileSync(path, 'utf8');
    var html = fs.readFileSync('test/cases/' + test + '.html', 'utf8').trim().replace(/\r/g, '');
    var fn = pug.compile(str, { filename: path, pretty: true });
    var actual = fn({ title: 'Pug' });
    actual.trim().should.equal(html);
  })
});

'use strict'


var gulp = require('gulp'),
	rename      = require('gulp-rename'),
	del         = require('del'),
	plumber 	= require('gulp-plumber'),
	pump 		= require('pump'),
	
	pug 		= require('gulp-pug'),
	sass 		= require('gulp-sass'),
	less 		= require('gulp-less'),
	cssprefixer = require('gulp-autoprefixer'),
	cssminify   = require('gulp-csso'),
	postcss		= require('gulp-postcss'),
	mqpacker	= require('css-mqpacker'),
	postcssflexibility = require('postcss-flexibility'),
	
	uglify       = require('gulp-uglify'),
	
	imagemin     = require('gulp-imagemin'),
	svgstore     = require('gulp-svgstore'),
	svgmin 	     = require('gulp-svgmin'),
	
	sequence = require('gulp-sequence'),
	server = require('browser-sync');

/* ============================== PATH ARRAY =============================== */
var path = {
        pub: {
            js:     '../public/js/'		,
            css:    '../public/css/'	,
            fonts:  '../public/fonts/'	,
			html:   '../public/'		,
            img:	'../public/img/'
			
        },
        src: {
			js:     '../source/js/'			,
			css:  	'../source/css/'		,
			sass: 	'../source/sass/'		,
			less: 	'../source/less/'		,
			img: 	'../source/img/'		,
			presvg: '../source/img/presvg/'	,
            fonts:  '../source/fonts/'		,
			html:  	'../source/'			
        }
};

/* =========================== DEVELOPMENT TASKS =========================== */

/* Сборка стилей из SASS файлов */
gulp.task('sass-src', function(){
    gulp.src(path.src.sass + 'style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssprefixer({
			browsers: ['last 5 versions', '> 1%', 'ie 8', 'ie 7'], 
			cascade: true
		}))
		.pipe(postcss([
			mqpacker({sort: true})
		]))
		.pipe(gulp.dest(path.src.css))
		.pipe(cssminify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(path.src.css));
});

/* Сборка стилей из LESS файлов */
gulp.task('less-src', function(){
    gulp.src(path.src.less + 'style.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			mqpacker({sort: true})
		]))
		.pipe(cssprefixer({
			browsers: ['last 5 versions', '> 1%', 'ie 8', 'ie 7'], 
			cascade: true
		}))

		.pipe(gulp.dest(path.src.css))
		.pipe(cssminify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(path.src.css));
});

/* Сборка js для public, зацикливается */
gulp.task('js-src', function(cb){
	pump([
		gulp.src(path.src.js + 'script.js'),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest(path.src.js)
	],
	cb
	);
});

/* Сборка SVG спрайта */
gulp.task('svg-src', function(){
    gulp.src(path.src.presvg + '*.svg')
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest(path.src.img));
});

/* Наблюдение за изменениями */
gulp.task('watch-dev', function() {
	//gulp.watch(path.src.sass + '**/*.scss', ['sass-src']);
	gulp.watch(path.src.less   + '**/*.less', ['less-src']);
	gulp.watch(path.src.js     + '**/script.js', ['js-src']);
	gulp.watch(path.src.presvg + '**/*.svg', ['svg-src']);
	
	
	gulp.watch(path.src.css + '**/*.*').on("change", server.reload);
	gulp.watch(path.src.fonts + '**/*.*').on("change", server.reload);
	gulp.watch(path.src.img + '**/*.*').on("change", server.reload);
	gulp.watch(path.src.js + '**/*.*').on("change", server.reload);
	gulp.watch(path.src.html + '**/*.html').on("change", server.reload);
	// 
	
});

/* Локальный сервер */
gulp.task('serv-dev', function() {
    server.init({
        server: {
            baseDir: "../source/"
        }
    });
});

/* Запуск dev проекта */
gulp.task('build-dev', ['watch-dev', 'serv-dev']);

/* ============================= PUBLIC TASKS ============================= */
/* Очистка public перед сборкой */
gulp.task('clean-pub', function() {
	return del('../public/',{force: true});
});

/* Копирование html в public */
gulp.task('html-to-pub', function(){
    gulp.src(path.src.html + '*.html')
		.pipe(gulp.dest(path.pub.html));
});

/* Копирование стилей для public */
gulp.task('css-to-pub', function(){
    gulp.src(path.src.css + '*.css')
		.pipe(gulp.dest(path.pub.css))
});

/* Копирование js для public */
gulp.task('js-to-pub', function(cb){
    gulp.src(path.src.js + '*.js')
		.pipe(gulp.dest(path.pub.js))
});

/* Оптимизация изображений для public */
gulp.task('img-to-pub', function(){
    gulp.src(path.src.img + '**/*.{png,jpg,gif}')
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true})
		]))
		.pipe(gulp.dest(path.pub.img));
});

/* Копирование svg в public */
gulp.task('svg-to-pub', function(){
    gulp.src(path.src.img + '*.svg')
		.pipe(gulp.dest(path.pub.img));
});

/* Копирование fonts в public */
gulp.task('fonts-to-pub', function(){
    gulp.src(path.src.fonts + '*.{woff, woff2}')
		.pipe(gulp.dest(path.pub.fonts));
});

/* Сборщик public проекта */
gulp.task('build-pub', sequence('clean-pub', ['img-to-pub','css-to-pub', 'svg-to-pub', 'html-to-pub', 'js-to-pub', 'fonts-to-pub']));

var openWriteForm = document.querySelector(".write-us__send");
var writeForm = document.querySelector(".write-form");
var closeWriteForm = document.querySelector(".write-form__close");

openWriteForm.addEventListener("click", function(event) {
    event.preventDefault();
    writeForm.classList.remove("visible_off");
    writeForm.classList.add("visible_on");
    
});

closeWriteForm.addEventListener("click", function(event) {
    event.preventDefault();
    writeForm.classList.remove("visible_on");
    writeForm.classList.add("visible_off");
});







