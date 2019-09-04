$(function () {
    $('.w-slide-btn').click(function () {
        // 小圆点点击亮起
        // $(this).addClass('w-slide-btnav').siblings().removeClass('w-slide-btnav');
        
        $(".slide-center").slide({mainCell: ".slide-center .slide-list", autoPlay: true, effect: 'leftLoop'});
    });
});