$(window).scroll(function(){
    var sTop = $(document).scrollTop();
    if(sTop>200){
        $(".gzq-footer").animate({
            opacity: 1
        },400)
    }
})