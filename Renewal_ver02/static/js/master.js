
// typed event
$(document).ready(function() {
    new Typed('#typed', {
      strings: ["Hi,<br/> I'm<br/> SOHYUN.", "Hi,<br/> I'm<br/> SOHYUN.", "你好,<br/>我叫朴炤炫。", "안녕하세요,<br/>박소현입니다."],
      typeSpeed: 70,
      backSpeed: 10,
      backDelay: 2000,
      loop:true
    });
});

// Work page - slider event
$(function() {
    $("#mySlider1").AnimatedSlider( {
      prevButton: "#btn_prev1",
      nextButton: "#btn_next1",
      visibleItems: 3,
      infiniteScroll: true,
      willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
      changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
    });
});

// Fullpage event
var myFullpage = new fullpage('#fullpage', {

    normalScrollElements: '.scrollable-element',
});
