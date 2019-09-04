$(function () {
    //当点击立即购买按钮的时候，对应的图片产生动画效果
    $('.food_btn').click(function () {
        //通过按钮找到对应的图片元素，并且添加动画样式
        $(this).parents('.li_food').find('.food_img img').addClass('rubberBand animated');
    });
    //添加完动画样式之后，要清除添加的样式，否则下次点击按钮不会有动画效果
    $('.food_btn').parents('.li_food').find('.food_img img').on('animationend',function () {
        $(this).removeClass('rubberBand animated')
    });
});
