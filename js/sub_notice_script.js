
//news1
$(function () {
  $(".news_1").hide();
});

$(function () {
  $(".news_right .news_text_1").hover(function () {
    $(".news_1").toggle();
  });
});


// news2

$(function () {
  $(".news_2").hide();
});

$(function () {
  $(".news_right .news_text_2").hover(function () {
    $(".news_2").toggle();
  });
});

//news_3
$(function () {
  $(".news_3").hide();
});

$(function () {
  $(".news_right .news_text_3").hover(function () {
    $(".news_3").toggle();
  });
});

//news_4
$(function () {
  $(".news_4").hide();
});

$(function () {
  $(".news_right .news_text_4").hover(function () {
    $(".news_4").toggle();
  });
});

//news_5
$(function () {
  $(".news_5").hide();
});

$(function () {
  $(".news_right .news_text_5").hover(function () {
    $(".news_5").toggle();
  });
});

//news_6
$(function () {
  $(".news_6").hide();
});

$(function () {
  $(".news_right .news_text_6").hover(function () {
    $(".news_6").toggle();
  });
});


// help
$(function () {
  $("#board li div").hide();
  $("#board li").click(function () {
    $(this).children("div").slideToggle();
    $(this).siblings().children("div").slideUp();
  });
});

//hamburger inner style
$(document).ready(function () {
  //처음들어갔을때 모습 만들기...
  $(".navi_tab").hide(); //tab_content 부분을 모두 숨김.
  $("ul.navi_tabs li:nth-child(1)").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".navi_tab:nth-child(1)").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.navi_tabs li").click(function () {
    $("ul.navi_tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
    $(".navi_tab").hide(); //모든 contents들 숨김

    var activeTab = $(this).find("div").attr("zzz"); //Find the href attribute value to identify the active tab + content
    /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
                    .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
  });
});