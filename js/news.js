/*
* @Author: hechengyee
* @Date:   2018-09-13 18:45:15
* @Last Modified by:   hechengyee
* @Last Modified time: 2018-09-13 18:48:07
*/

$(window).scroll(function(){
   var sTop = $(document).scrollTop();

    if(sTop>1500){

        $(".hcy-Press").animate({

            opacity:1

        },4000)
    }
})