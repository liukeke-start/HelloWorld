//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    sass = require('gulp-sass');

//定义一个testSass任务（自定义任务名称）
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss') //该任务针对的文件
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) //该任务调用的模块
        .pipe(gulp.dest('src/dist/css')); //将会在src/css下生成index.css
});


gulp.task('watch', function() {
        gulp.watch('src/sass/*.scss', ['sass']);
    }) //sass监听  自动编译

gulp.task('default', ['sass']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径