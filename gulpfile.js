// 引用 gulp plugin
const gulp = require('gulp');

// 建立預設 gulp task
gulp.task('default', ['front', 'server', 'watch']); //依賴front server watch

gulp.task('front', () => {
    console.log('front is me');
});

gulp.task('server', () => {
    console.log('server is me');
});

gulp.task('watch', () => {
    console.log('watch is me');
});


var a = function(){
	consolelog("a");
};	//需呼叫

var b = function(){
	console.log("b");
}(); //直接執行

