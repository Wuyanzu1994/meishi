// 团队
$(function(){
    $(".team-show-biaoge ul li").mouseover(function(){
        $(this).children(".team-show-text").stop().animate({
            bottom:0,
            height:250
        })
        $(this).children(".team-show-text").children("h5").addClass("gg");
    })

    $(".team-show-biaoge ul li").mouseout(function(){

        $(this).children(".team-show-text").stop().animate({
            bottom:-26,
            height:70
        })
        $(this).children(".team-show-text").children("h5").removeClass("gg");
    })
})





$(window).scroll(function(){
    var sTop = $(document).scrollTop();
    if(sTop>250){
        $('.team-show-biaoge').addClass('animated bounceInDown');
        // $('.team-show-biaoge').addClass('animated lightSpeedIn ');
    }

    if(sTop>900){
        // $('.team-show-biaoge').addClass('animated bounceInDown');
        $('.team-show2-container').addClass('animated lightSpeedIn ');
    }

    if(sTop>900){
        // $('.team-show-biaoge').addClass('animated bounceInDown');
        $('.team-show2-container').addClass('animated lightSpeedIn ');
    }
    if(sTop>1500){
        // $('.team-show-biaoge').addClass('animated bounceInDown');
        $('.team-show2-title .flex').addClass('animated bounceInLeft ');
    }

})