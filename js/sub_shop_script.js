$(function () {
    $(".heart_box").click(function () {
        $(this).find(".pd_heart_hover").toggleClass("on");
    });
});

// this 써줘야 다른 하트엔 효과 안먹음

// hamburger inner style
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



//tab_box (tab bar scrool sourse)
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#tab_bar').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#tab_bar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#tab_bar').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
