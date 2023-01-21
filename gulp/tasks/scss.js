import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; // сжатие CSS
import webpcss from "gulp-webpcss"; // вывод webp изображений 
import autoprefixer from "gulp-autoprefixer"; // добавления вендорных префиксов 
import grupCssMediaQueries from "gulp-group-css-media-queries"; // групировка медиа запросов 

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %",
            })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBluid,
                grupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBluid,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp",
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBluid,
                autoprefixer({
                    grid: true,
                    overrideBrowserslis: ["last 3 versions"],
                    cascade: true,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBluid,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: '.min.css',
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}