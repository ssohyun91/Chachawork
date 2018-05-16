$(document).ready(function(){
   var h = window.innerHeight + "px";
    $('#container img').css('height', h);
    $('#container img').css('width', '100%');
});

$(document).ready(function(){
  //--main_product start--
  $('.bxslider').bxSlider({
    mode: 'vertical',
    slideMargin: 5,
    auto: true,
    pause: 3000
  });

  $('ul.menu li:eq(0)').on('mouseenter',function(){
    $('#wrap_subMenu').animate({'left':'130px'},'fast');
    $('#subMenu ul:eq(0)').show();
  });
  $('ul.menu li:eq(0)').on('mouseleave',function(){
    $('#subMenu ul:eq(0)').hide();
  });

  $('ul.menu li:eq(1)').on('mouseenter',function(){

    $('#wrap_subMenu').animate({'left':'130px'},'fast');
    $('#subMenu ul:eq(1)').show();
  });
  $('ul.menu li:eq(1)').on('mouseleave',function(){
    $('#subMenu ul:eq(1)').hide();
  });

  $('ul.menu li:eq(2)').on('mouseenter',function(){
    $('#wrap_subMenu').animate({'left':'130px'},'fast');
    $('#subMenu ul:eq(2)').show();
  });
  $('ul.menu li:eq(2)').on('mouseleave',function(){
    $('#subMenu ul:eq(2)').hide();
  });

  $('ul.menu li:eq(3)').on('mouseenter',function(){
    $('#wrap_subMenu').animate({'left':'130px'},'fast');
    $('#subMenu ul:eq(3)').show();
  });
  $('ul.menu li:eq(3)').on('mouseleave',function(){
    $('#subMenu ul:eq(3)').hide();
  });

  $('ul.menu li:eq(4)').on('mouseenter',function(){
    $('#wrap_subMenu').animate({'left':'130px'},'fast');
    $('#subMenu ul:eq(4)').show();
  });
  $('ul.menu li:eq(4)').on('mouseleave',function(){
    $('#subMenu ul:eq(4)').hide();
  });

  $('ul.menu').on('mouseleave',function(){
    if($('#subMenu ul:hover').length == 0) {
    $('#wrap_subMenu').animate({'left':'0'},'fast');
    };
    //$('#wrap_subMenu').animate({'left':'0'},'fast')
  });


  $('#subMenu ul,#wrap_subMenu').on('mouseleave',function(){
      $('#wrap_subMenu').animate({'left':'0'},'fast');
  });






  /*//--main product start--
    $('#main_product').on('mouseenter',function(){
        $('#subMenu').show('#subMenu',function(){
            $('#wrap_subMenu').animate({'left':'130px'});
        });
        $('.sub_nav_product').show('.sub_nav_product',function(){
            $('#wrap_subMenu').animate({'left':'130px'});
        });

    });

    $('#main_product').on('mouseleave',function(){
        $('#subMenu').hide('#subMenu',function(){
          $('#wrap_subMenu').animate({'left':'0'});
        });
        $('.sub_nav_product').hide('.sub_nav_product',function(){
          $('#wrap_subMenu').animate({'left':'0'});

        });
    });

  //--main_product end--

  //--main_eshop start--
    $('#main_eshop').on('mouseenter',function(){
        $('#subMenu').show();
        $('.sub_nav_eshop').show();

    });

    $('#main_eshop').on('mouseleave',function(){
        $('#subMenu').hide();
        $('.sub_nav_eshop').hide();
    });
  //--main_eshop end--
  //--main_customer start--
    $('#main_customer').on('mouseenter',function(){
        $('#subMenu').show();
        $('.sub_nav_customer').show();

    });

    $('#main_customer').on('mouseleave',function(){
        $('#subMenu').hide();
        $('.sub_nav_customer').hide();
    });
  //--main_customer end--
  //--main_photo start--
    $('#main_photo').on('mouseenter',function(){
        $('#subMenu').show();
        $('.sub_nav_photo').show();

    });

    $('#main_photo').on('mouseleave',function(){
        $('#subMenu').hide();
        $('.sub_nav_photo').hide();
    });
  //--main_photo end--
  //--main_company start--
    $('#main_company').on('mouseenter',function(){
        $('#subMenu').show();
        $('.sub_nav_company').show();

    });

    $('#main_company').on('mouseleave',function(){
        $('#subMenu').hide();
        $('.sub_nav_company').hide();
    });
  //--main_company end--*/

    $('.eventImg').on('mouseenter',function(){
      $('.eventImg').animate({'left':'-70%'},500)
    });
    $('.eventImg').on('mouseleave',function(){
      $('.eventImg').animate({'left':'-20%'},500)

    });


  });
