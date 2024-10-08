$(document).ready(function(){

  $('.btn_1').css({color: 'white', background: '#8c6247'})

  $('.btn_1').click(()=>{
    $('.apple').css('display','none');
    $('.grape').css('display','flex');
    $('.tomato').css('display','none');
    
    $('.btn_1').css({color: 'white', background: '#8c6247'})
    $('.btn_2').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_3').css({color: '#8c6247', background: '#f3eee9'})
  })

  $('.btn_2').click(()=>{
    $('.apple').css('display','flex');
    $('.grape').css('display','none');
    $('.tomato').css('display','none');

    $('.btn_1').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_2').css({color: 'white', background: '#8c6247'})
    $('.btn_3').css({color: '#8c6247', background: '#f3eee9'})
  })

  $('.btn_3').click(()=>{
    $('.apple').css('display','none');
    $('.grape').css('display','none');
    $('.tomato').css('display','flex');
    
    $('.btn_1').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_2').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_3').css({color: 'white', background: '#8c6247'})
  })

    setInterval(() => {
      $('.sec2_img1').animate({
        rotate: "10deg"
      }, 1500, 'linear'),
      $('.sec2_img1').animate({
        rotate: "5deg"
      }, 1500, 'linear')  
    }, 10)
    setInterval(() => {
      $('.sec2_img2').animate({
        rotate: "10deg"
      }, 1500, 'linear'),
      $('.sec2_img2').animate({
        rotate: "5deg"
      }, 1500, 'linear')  
    }, 10)
    setInterval(() => {
      $('.sec2_img3').animate({
          bottom: "60px"
      }, 900, 'linear'),
      $('.sec2_img3').animate({
          bottom: "70px"
      }, 900)
    }, 10);
    
})