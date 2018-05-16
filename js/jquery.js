$(document).ready(function(){
   var h = window.innerHeight + "px";
   var w = window.innerWidth + "px";
   $('section').css('height', h);
   $('section').css('width', '100%');


});

$(document).ready(function() {
  // 구름이 움직이는 방식을 정해야함 -> 함수 = moveCloud
  // 저방식대로 계속 반복되게 해야 함 -> 위 함수를 계속 반복시키는 방법
  moveCloud();
  setInterval(function() {
    moveCloud()
  }, 2000);

  var a = 0.8
  move($($('.cart')[0]), 0);
  move($($('.cart')[1]), 1 * a);
  move($($('.cart')[2]), 2 * a);
  move($($('.cart')[3]), 3 * a);
  move($($('.cart')[4]), 4 * a);
  move($($('.cart')[5]), 5 * a);
  move($($('.cart')[6]), 6 * a);
  move($($('.cart')[7]), 7 * a);

  $('.photo .mysay').click(function(){
    //$(this).css({'background':'none'});
    $('.photo .mysay .mysay_contents').toggle(function(){
      $(this).animate();
    });
  });
});

$(document).ready(function() {
  $('.horse_set').each(function(index, obj) {
    horse_updown(obj);
    horse_leftright(obj);
  })
})

function horse_updown(obj) {
  var $obj = $(obj);
  var top_value = $obj.children('.horse_group').css('top');
  if(top_value == '27px'){
    $obj.children('.horse_group').animate({top:'42px'}, 1500, function() {
      horse_updown(obj)
    });
  } else if(top_value == '42px') {
    $obj.children('.horse_group').animate({top:'27px'}, 1500, function() {
      horse_updown(obj)
    });
  } else if(top_value == '31px') {
    $obj.children('.horse_group').animate({top:'38px'}, 1500, function() {
      horse_updown(obj)
    });
  } else {
    $obj.children('.horse_group').animate({top:'31px'}, 1500, function() {
      horse_updown(obj)
    });
  }
}

function horse_leftright(obj){

}

function moveCloud(){
  $('.cloud').animate({'top':'13%'},1000,'swing');
  $('.cloud').animate({'top':'10%'},1000,'swing');
  //$('.cloud').animate({'top':'10%'},1000,'swing');
}

function move($obj, t) {
    t -= 0.05;

    var r = 120;          // radius
    var xcenter = 105;   // center X position
    var ycenter = 120;   // center Y position

    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));

    $obj.animate({
        top: newTop,
        left: newLeft
    }, 100, function() {move($obj, t)});
}

//메뉴 클릭시 스크롤
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$(window).scroll(function() {
  var s1 = $('a[name="s1"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s1,10)){
    $('nav > ul> li>a[data-id="#s1"]').parent('li').attr('class','active');
    $('nav > ul> li>a[data-id="#s1"]').parent('li').siblings('li').attr('class','');
  }

  var s2  = $('a[name="s2"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s2,10)){
    $('nav > ul > li > a[data-id="#s2"]').parent('li').attr('class','active');
    $('nav > ul > li > a[data-id="#s2"]').parent('li').siblings('li').attr('class','');
  }

  var s3 = $('a[name="s3"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s3,10)){
    $('nav > ul > li > a[data-id="#s3"]').parent('li').attr('class', 'active');
    $('nav > ul > li > a[data-id="#s3"]').parent('li').siblings('li').attr('class', '');

  }
  var s4 = $('a[name="s4"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s4,10)){
    $('nav > ul > li > a[data-id="#s4"]').parent('li').attr('class','active');
    $('nav > ul > li >a[data-id="#s4"]').parent('li').siblings('li').attr('class','');
    startchart();
  }

  var s5 = $('a[name="s5"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s5,10)){
    $('nav > ul > li > a[data-id="#s5"]').parent('li').attr('class','active');
    $('nav > ul > li >a[data-id="#s5"]').parent('li').siblings('li').attr('class','');
  }

})

//workstory
var workstory_created = false;
$(window).scroll(function(){
  var s1 = $('a[name="s2"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s1,10)){
    $(".workstory_contents>ul>li").each(function(index){
      $(this).delay(500*index).fadeIn()});
      workstory_created = true;
  }
});

// $(document).ready(function(){
//   $(".workstory_contents>ul>li").each(function(index){
//     $(this).children('div').delay(500*index).fadeIn();
//   });
//   // $(".workstory_contents>ul>li").on('mouseleave',function(){
//   //   $(this).children('div').delay('5000').fadeOut();
//   // });
// });

//portfolio
/*$(document).ready(function(){
  $('#rotatescroll').tinycircleslider({
  interval: true,
  intervalTime: 4000,
  radius: 288,
  dotsSnap: true
  });
});*/
/*$('img').on('click', function() {
  $('#dialog').dialog();
})*/
// $(function(){
//   $("#dialog").hide();
//   $('.window_box').on('click',function(){
//     $("#dialog").dialog(
//        {modal:true}
//     );
//   });
// });

/*$("").dialog(
   { buttons: [ { text: "Ok", click: function() { $( this ).dialog( "close" ); } } ] }
);*/

$(document).ready(function(){
  $('.slider1').bxSlider({
   slideWidth: 485,
   minSlides: 1,
   maxSlides: 1,
  //  slideMargin:10,
   moveSlides: 1,
   touchEnabled: true,
   auto: true,
   pause: 4000,
   autoStart: true,
   autoDirection: 'next',
   autoHover: true,
   autoDelay: 0,
   autoSlideForOnePage: false
  });
});

$(document).ready(function(){
  $('.slider2').bxSlider({
   slideWidth: 485,
   minSlides: 1,
   maxSlides: 1,
  //  slideMargin:10,
   moveSlides: 1,
   touchEnabled: true,
   auto: true,
   pause: 4000,
   autoStart: true,
   autoDirection: 'next',
   autoHover: true,
   autoDelay: 0,
   autoSlideForOnePage: false
  });
});


$(document).ready(function(){
  $(".tap li h3").on("click",function(){
    $(this).parent().siblings("li").children("div").css({'display':'none'});
    $(this).siblings("div").show();
  });
});


$(document).ready(function(){

    $(".info_box > img, .info_box_1 > img").click(function(){
			$(".portfolio_info,.portfolio_info_1").hide();
			$("body").css({"overflow-x":"hidden","overflow-y":"scroll"});
		});

		$(".portfolio_box .web ul li div.imgBox .slider_btn").click(function(){
			var data_view = $(this).parents('div').attr('data-view')
      var data_site = $(this).parents('div').attr('data-site')
			$(".info_box > img").attr("src","./images/" + data_view);
			$(".info_box a").attr("href","" + data_site);
			$(".portfolio_info").fadeIn();
			$("body").css({"overflow-y":"hidden"});
      $(".info_box").css({"display":"block"});
		return false;
	 });

   $(".portfolio_box .art ul li div.imgBox .slider_btn").click(function(){
     var data_view = $(this).parents('div').attr('data-view')
     $(".info_box_1 > img").attr("src","./images/" + data_view);
     $(".portfolio_info_1").fadeIn();
     $("body").css({"overflow-y":"hidden"});
     $(".info_box_1").css({"display":"block"});
   return false;
  });



  });
