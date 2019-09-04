$(window).scroll(function(){
   var sTop = $(document).scrollTop();
    if(sTop>2000){
        $(".gzq-footer").animate({
            opacity: 1
        },4000)
    }
})