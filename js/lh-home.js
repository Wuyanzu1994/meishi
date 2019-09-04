$(function () {
    // 滚动条滚动事件
    $(window).scroll(function () {
        // 获取滚动的距离
        var top = $('html,body').scrollTop();

        /* 菜单 */
        /* menu1 */
        // 向下滑动大于200px，显示元素
        if (top >= 100) {
            // food1从左滑动到 left: 230px 处
            $('.food1').addClass('r230');
            // text1淡入
            $('.text1').fadeIn(2000);
        }
        // 厨师
        if (top >= 400) {
            $('.chef h3').animate({ opacity: 1 }, 1000);
            $('.chef span').animate({
                top: '94px',
                opacity: 1
            }, 1000);
            $('.chef img').animate({
                width: '130px',
                height: '130px',
                opacity: 1
            }, 1000);
        }

        /* menu2 */
        // text2
        if (top >= 700) {
            $('.text2 [alt="中餐艺术2"]').show(1000);
        }
        if (top >= 900) {
            $('.text2 [alt="浙江菜"]').fadeIn(1000);
        }
        // food2
        if (top >= 1100) {
            $('.food2').addClass('pulse animated');
        }
        // bg1
        if (top >= 1300) {
            $('.bg1').addClass('d1200');
        }
        // bg2
        if (top >= 1300) {
            $('.bg2').addClass('u1100');
        }
        // star
        if (top >= 1300) {
            $('.star').addClass('pulse animated');
        }

        /* 菜品配料 */
        // caipinbg
        if (top >= 1600) {
            $('.caipinbg').addClass('r160');
        }
        // cp-title
        if (top >= 1800) {
            $('.cp-title').addClass('l0-1');
        }
        // cp-slogan
        if (top >= 1800) {
            $('img[alt="cp-slogan').addClass('l0-2');
        }
        // description
        if (top >= 1800) {
            $('.description').addClass('l0-3');
        }

        // 菜谱1
        if (top >= 2500) {
            $('.caipu1').addClass('pulse animated');
            $('.caipu3').addClass('pulse animated');
        }
        // 关于
        if (top >= 3400) {
            $('.about-text').addClass('r34');
        }
        // 页脚
        if(top>3400){
            $(".gzq-footer").animate({
                opacity: 1
            },4000)
        }
    });
    // 菜谱1遮罩动画
    $('.caipu1').mouseover(function () {
        $('.caipu1 .mask').stop().animate({
            top: 0
        }, 500);
    }).mouseleave(function () {
        $('.caipu1 .mask').stop().animate({
            top: '320px'
        }, 500);
    });
    // 菜谱2，3动画
    $('.caipu2,.caipu3').mouseenter(function () {
        $(this).stop().animate({
            opacity: 0.8
        });
    }).mouseleave(function () {
        $(this).stop().animate({
            opacity: 1
        });
    });
    // 菜谱4，5，6鼠标移入动画
    $('.caipu4,.caipu5,.caipu6').mouseenter(function () {
        $(this).addClass('pulse animated');
    }).mouseleave(function () {
        $(this).removeClass('pulse animated');
    });
});