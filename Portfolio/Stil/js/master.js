$(document).ready(function(){

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    pause: 5000,
  });

  $('.bxslider1').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 360,
    slideMargin: 10,
    moveSlides: 1,
    auto: true,
    pause: 4000,
    pager: false
  });


  $('input.search_form').on('click',function(){
    $('.search-area').show();
  });
  var clear = document.getElementById('search-area')
  window.onclick = function(event){
    if(event.target == clear || $(event.target).attr('class') == 'search_form') {
    }
    else if(event.target != clear){
      clear.style.display = "none";
    }
  };


  $('.category > div').on('click',function(){

    $('.all_category').toggle();
  });

  // $('.hide_menu').hide();
  //
  // $('ul.main_menu  li  a').hover(function(){
  //   $(this).siblings('.hide_menu').show();
  // },function(){
  //   $(this).siblings('.hide_menu').hide();
  // });



  $('div.thumbnail > a ').hover(function(){
    $(this).children('.middle').css({'opacity':'0'});
    $(this).children('.middle').siblings('.hover').css({'opacity':'1'});
    $(this).children('.middle').siblings('img.hide_list').animate({'opacity':'1'});
}, function(){
  $(this).children('.middle').siblings('img.hide_list').stop();
    $(this).children('.middle').siblings('.hover').css({'opacity':'0'});
    $(this).children('.middle').siblings('img.hide_list').css({'opacity':'0'});
    $(this).children('.middle').css({'opacity':'1'});
  });
});
