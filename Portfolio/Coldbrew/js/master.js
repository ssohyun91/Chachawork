
var moving=false;  //현재 움직이는 상황 여부를 점검하는 변수입니다.
var num=0;   //현재 카테고리 번호를 나타내는 변수입니다.

function doLayout(){  //num 값에 의해서 레이아웃이 정해지는 함수를 작성합니다.
	var t=window.innerHeight*-1*num;  //window.innerHeight는 window의 내부 높이를 의미합니다.  메인 카테고리의 위치를 정해주는 값을 t 변수에 대입합니다.
	// console.log("window.innerHeight : "+window.innerHeight);
	// <div class="section" style="top:-403px;">

	$(".s_wrap").css({top:t+"px"});  //얻어진 t 변수로 section 클래스의 top 속성이 정해집니다.
	$(".s_wrap .page").css({width:window.innerWidth, height:window.innerHeight}).removeClass("loading");  //page 클래스를 스타일 작업을 합니다.

}

function fade(){
	if(num==2){
		$('.fade').css({'display':'none'});
		$(".s3 > div").delay('slow').fadeIn();
	}
	 else if(num==3) {
		 $('.fade').css({'display':'none'});
		 $(".s4 > div > div").delay('slow').fadeIn();
	}
	 else if(num==4) {
		$('.fade').css({'display':'none'});
		$(".s5 > div > div").delay('slow').fadeIn();
	}
	 else if(num==5){
		 $('.fade').css({'display':'none'});
		 $(".s6 > div").delay('slow').fadeIn();
	 }
	 else if(num==6){
		 $('.fade').css({'display':'none'});
		 $(".s7 > div").delay('slow').fadeIn();
	 }
	 else if(num==7){
		 $('.fade').css({'display':'none'});
		 $(".s8 > div").delay('slow').fadeIn();
	 }
	 else if(num==8){
		 $('.fade').css({'display':'none'});
		 $(".s9 > div").delay('slow').fadeIn();
	 }
	 else if(num==9){
		 $('.fade').css({'display':'none'});
		 $(".s10 > div").delay('slow').fadeIn();
	 }
}
$(document).ready(function(){
	doLayout();  //페이지가 로딩이 되면 doLayout 함수를 호출합니다.
	$(".aside .item").eq(num).addClass("on");  //우측에 있는 페이지 버튼 영역에 순서를 표시해 줍니다.


	// 1) click event
	$(".aside .item a").click(function(e){
		e.preventDefault();    //a 요소에 대해서 링크 처리를 하지 않습니다.
		var order=$(this).parent("li").index();  //this는 현재 클릭한 a요소
		num=order;
		//console.log("num : "+num);
		var t=window.innerHeight*-1*num;
		$(".aside .item").removeClass("on");
		$(".aside .item").eq(num).addClass("on");

		if(!moving){  //애니메이션이 발생되지 않는 상황입니다.
			moving=true; //현재 section 클래스는 동작 중입니다.
			$(".s_wrap").animate({top:t}, 500, function(){
				moving=false;  //현재 section 클래스는 동작 완료 상태입니다.
			});
			fade();
		}
	});

	$('#menu_story, #menu_logo').click(function(){
		$('#side_story').click();
	});

	$('#menu_product').click(function(){
		$('#side_product').click();
	});

	$('#menu_event').click(function(){
		$('#side_event').click();
	});


	// 2) keyboard event
	$(this).keydown(function(e){
		if(!moving){
			moving=true;
			var t=$(".s_wrap").offset().top;  //section 클래스의 상단 좌표를 t 변수에 대입합니다.
			// console.log("t : "+t);
			var h=window.innerHeight;   //윈도우의 높이 정보를 h 변숭에 대입합니다.
			// console.log("h : "+h);

			if(e.keyCode == 40){  //상단 키보드를 눌렀을 경우입니다.
				if(num < 9){
					num+=1;
					t-=h;
				}
			}else if(e.keyCode == 38){   //하단 키보드를 눌렀을 경우입니다.
				if(num > 0){
					num-=1;
					t+=h;
				}
			}


			$(".s_wrap").animate({top:t+"px"}, 500, function(){
				moving=false;
				$(".aside .item").removeClass("on");
				$(".aside .item").eq(num).addClass("on");
			});


		}


		fade()
	});

	// 3) mouse wheel event
	$(".s_wrap").mousewheel(function(e){
		if(!moving){
			moving=true;    //이중으로 이벤트가 발생되는 것을 방지합니다.
			var t=$(this).offset().top;
			var h=window.innerHeight;
			// console.log("e.deltaX : "+e.deltaX);
			// console.log("e.deltaY : "+e.deltaY);
			// console.log("e.deltaFactor : "+e.deltaFactor);

			if(e.deltaY == -1){    //위로 휠 이벤트가 발생될 경우입니다. 상방향 키보드 키를 누를 때와 처리되는 내용이 같습니다.
				if(num < 9){
					num+=1;
					t-=h;
				}
			}else if(e.deltaY == 1){  //아래로 휠 이벤트가 발생될 경우입니다. 하방향 키보드 키를 누를 때와 처리되는 내용이 같습니다.
				if(num > 0){
					num-=1;
					t+=h;
				}
			}


			$(".s_wrap").animate({top:t+"px"}, 500, function(){
				moving=false;
				$(".aside .item").removeClass("on");
				$(".aside .item").eq(num).addClass("on");
			});
		}
		fade();
	});

	// 4) resize event
	$(window).resize(function(){
		doLayout();
	});
});
