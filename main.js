$(document).ready(function(){
        
    $('.rightnav li').click(function(e){
        const page=e.currentTarget.dataset.page
        $('html, body').animate({scrollTop:$(".p"+page).offset().top});
    })
    $(window).scroll(function(){
             if(scrolling('.p1','.p2')){                
                toggle(0);
            }else if(scrolling('.p2','.p3')){
                toggle(1);
            }else if(scrolling('.p3','.p4')){
                toggle(2);
            }else if($(window).scrollTop()>=$('.p4').offset().top){
                toggle(3);
            }
            function scrolling(index,index2){
                if($(window).scrollTop()>=$(index).offset().top && $(window).scrollTop()<$(index2).offset().top){
                    return true;
                }else
                    return false;
                
            }
            function toggle(num){
                let target=".rightnav li:eq("+num+")";
                $('.rightnav li').css({'background-color':'white','border-color':'white'});
                $(target).css({'background-color':'rgb(39, 221, 245)','border-color':'rgb(39, 221, 245)'});
            }
        })
    $('.topnav li').click(function(e){
        const page=".rightnav li:eq("+Math.floor( e.currentTarget.dataset.page)+")";
        $(page).click();
    })        
    $('.logo').click(function(){
        $(".rightnav li:eq(0)").click();
    });
    $('.next').click(function(){
        $('html, body').animate({scrollTop:$(".p2").offset().top});
    })
    loop(".slide-top",-268)
    loop(".slide-left",-162.2)
    loop(".slide-right",-231.5)
    function loop(target,width){
        var time=Math.floor(Math.random()*2000+2000);
        setTimeout(()=>{
            myintrval(target,width);
            loop(target,width);
        },time);
        function myintrval(target,width){
        $("span").css({left:"0px"})
        $(target).find("span").animate({left:width},"slow");
    }
    };
    $(".box .icon:eq(1)").click(()=>{
        $(".QRcode").css({'display':'block'})
    })
    $(".QRcode").click(()=>{
        $(".QRcode").css({'display':'none'})
    })
})