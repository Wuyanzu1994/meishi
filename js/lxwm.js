//输入框部分
$(function () {
    //注册输入框获得光标事件
    $('#topTxt').focus(function () {
        //判断输入框里的内容是否和原来文本相同；是则清空
        if ($('#topTxt').val() === '请输入关键词') {
            $(this).val('');
        }
        ;
    });
    $('#topTxt').blur(function () {
        //判断输入框里的内容是否为空，为空则回到初始文本，不为空则不改动里面的内容；
        if ($('#topTxt').val() === '') {
            $(this).val('请输入关键词');
        }
        ;
    });
    $('#topBtn').click(function () {
        $('#topTxt').val('');
    })
});
//登录部分
$(function () {
    $('.zyq-enter-close').click(function () {
        $(this).parent().parent().animate({
            left:"-100%"    //100%当作字符传入；
        },function () {
            $('.zyq-tishi').animate({
                left:'0%'
            });
        });
    });
    $('.zyq-tishi').click(function () {
        $(this).animate({
            left:'-100%'
        },function () {
            $('.zyq-enter-close').parent().parent().animate({
                left:'0%'
            })
        })
    })
});
