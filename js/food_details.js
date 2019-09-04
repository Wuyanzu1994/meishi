//入口函数
$(function () {
   //给+号添加点击事件
    $('.num_jia').click(function () {
        //获取文本框里面的内容,并且保存起来
         var val = $(this).prev().val();
         val++;
         //.prev()方法可以查到前一个同级元素
         $(this).prev().val(val);
    });
    //给-号添加点击事件
    $('.num_jian').click(function () {
        //获取文本框里面的内容,并且保存起来
        var val = $(this).next().val();
        //判断val的值是否小于1
        if(val > 1){
            val--;
            $(this).css({
                cursor:'text'
            });
        }else{
            $(this).css({
                cursor:'not-allowed'
            });
        }
        //.prev()方法可以查到前一个同级元素
        $(this).next().val(val);
    });
    //当鼠标移入li时，标题的颜色改变
    $('.swy_list').mouseenter(function () {
        $(this).children('.list_link').find('.list_bottom h5').css({
            color: '#914a10'
        });
    });
    //当鼠标移出的时候恢复原来的颜色
    $('.swy_list').mouseleave(function () {
        $(this).children('.list_link').find('.list_bottom h5').css({
            color: '#dac9ae'
        });
    });
});
