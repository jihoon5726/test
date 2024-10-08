$(document).ready(function(){ 

    // css.호버로 바꿀것
    $('.header').mouseenter(()=>{
        $('.header').css({background: 'rgb(245, 245, 245, 0.5)'}),
        $('.header_wrap').css({transform: 'translateY(0)', color: 'black'})})
    $('.header').mouseleave(()=>{
        $('.header').css({background: 'none'}),
        $('.header_wrap').css({transform: 'translateY(25px)', color: 'white'})})

    $('.tab').mouseenter(()=>{$('.header').css({height: '300px'})})
    $('.tab').mouseleave(()=>{$('.header').css({height: '80px'})})



    $(window).scroll(()=>{
        if ($('.header').offset().top > $('.window').scrollTop()) {
            $('.header').css({background: 'rgba(245, 245, 245, 0.5)'}),
            $('.header_wrap').css({transform: 'translateY(0)', color: 'black'})
        }
        else {
            $('.header').css({background: 'none'}),
            $('.header_wrap').css({transform: 'translateY(25px)', color: 'white'})
        }
        
    })

});

