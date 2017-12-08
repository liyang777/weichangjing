/**
 * Created by lenovo on 17/12/5 005.
 */
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

var music = document.getElementById("music");
var music_g = document.querySelectorAll(".music_g")[0];
var music_p = document.querySelectorAll(".music_p")[0];
var audio = document.querySelector("audio");
var s = 1;
music.onclick = function(){
    if(s==1){
    music_g.style.display="none";
    music_p.style.animation="none";
    audio.pause();
    s = 2;
}else {
        music_g.style.display="block";
        music_p.style.animation="xuanzhuan 2s linear infinite";
        audio.play();
        s=1;
}
};