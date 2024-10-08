$(document).ready(function(){

  $('.btn_4').css({color: 'white', background: '#8c6247'})

  $('.menu_item1').mouseenter(()=>{
    $('.item_img1').css({
      transform: "translateX(-50%) scale(1.1)",
      transition: "all 0.5s",
    })
    $('.item_txt1').css({
      background: "#8c6247",
      transition: "all 0.5s"
    })
    $('.txt_top1').css({
      color: "white",
      transition: "all 0.5s"
    })
  })
  
  $('.menu_item1').mouseleave(()=>{
    $('.item_img1').css({
      transform: "translateX(-50%) scale(1)",
      transition: "all 0.5s"
    })
    $('.item_txt1').css({
      background: "#f8f8f9",
      transition: "all 0.5s"
    })
    $('.txt_top1').css({
      color: "black",
      transition: "all 0.5s"
    })
  })

  $('.menu_item2').mouseenter(()=>{
    $('.item_img2').css({
      transform: "translateX(-50%) scale(1.1)",
      transition: "all 0.5s",
    })
    $('.item_txt2').css({
      background: "#8c6247",
      transition: "all 0.5s"
    })
    $('.txt_top2').css({
      color: "white",
      transition: "all 0.5s"
    })
  })
  
  $('.menu_item2').mouseleave(()=>{
    $('.item_img2').css({
      transform: "translateX(-50%) scale(1)",
      transition: "all 0.5s"
    })
    $('.item_txt2').css({
      background: "#f8f8f9",
      transition: "all 0.5s"
    })
    $('.txt_top2').css({
      color: "black",
      transition: "all 0.5s"
    })
  })

  $('.menu_item3').mouseenter(()=>{
    $('.item_img3').css({
      transform: "translateX(-50%) scale(1.1)",
      transition: "all 0.5s",
    })
    $('.item_txt3').css({
      background: "#8c6247",
      transition: "all 0.5s"
    })
    $('.txt_top3').css({
      color: "white",
      transition: "all 0.5s"
    })
  })
  
  $('.menu_item3').mouseleave(()=>{
    $('.item_img3').css({
      transform: "translateX(-50%) scale(1)",
      transition: "all 0.5s"
    })
    $('.item_txt3').css({
      background: "#f8f8f9",
      transition: "all 0.5s"
    })
    $('.txt_top3').css({
      color: "black",
      transition: "all 0.5s"
    })
  })

  $('.menu_item4').mouseenter(()=>{
    $('.item_img4').css({
      transform: "translateX(-50%) scale(1.1)",
      transition: "all 0.5s",
    })
    $('.item_txt4').css({
      background: "#8c6247",
      transition: "all 0.5s"
    })
    $('.txt_top4').css({
      color: "white",
      transition: "all 0.5s"
    })
  })
  
  $('.menu_item4').mouseleave(()=>{
    $('.item_img4').css({
      transform: "translateX(-50%) scale(1)",
      transition: "all 0.5s"
    })
    $('.item_txt4').css({
      background: "#f8f8f9",
      transition: "all 0.5s"
    })
    $('.txt_top4').css({
      color: "black",
      transition: "all 0.5s"
    })
  })

  $('.btn_4').click(()=>{
    $('.beverage').css('display','flex');
    $('.coffee').css('display','none');
    $('.dessert').css('display','none');
    
    $('.btn_4').css({color: 'white', background: '#8c6247'})
    $('.btn_5').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_6').css({color: '#8c6247', background: '#f3eee9'})
  })

  $('.btn_5').click(()=>{
    $('.beverage').css('display','none');
    $('.coffee').css('display','flex');
    $('.dessert').css('display','none');
    
    $('.btn_5').css({color: 'white', background: '#8c6247'})
    $('.btn_4').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_6').css({color: '#8c6247', background: '#f3eee9'})
  })

  $('.btn_6').click(()=>{
    $('.beverage').css('display','none');
    $('.coffee').css('display','none');
    $('.dessert').css('display','flex');
    
    $('.btn_6').css({color: 'white', background: '#8c6247'})
    $('.btn_4').css({color: '#8c6247', background: '#f3eee9'})
    $('.btn_5').css({color: '#8c6247', background: '#f3eee9'})
  })

  })