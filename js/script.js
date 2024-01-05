
// main_banner
var swiper = new Swiper(".main_banner", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnlnteraction: false,
    },
    speed: 1000,
});

//loop: 자동완성 코드 없음, 무한반복
// autoplay: 자동완성 코드 없음, 무한반복
//speed: 슬라이드 넘어갈때 속도


//left_fixed logo
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 900) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.fixed_left').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.fixed_left').fadeOut();//나타날 아이콘 클래스 수정!
    }
});




// new product
var swiper = new Swiper(".new_product", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnlnteraction: false,
    },
    speed: 700,
});


// the best
var swiper = new Swiper(".the_best", {
    slidesPerView: "auto",
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnlnteraction: false,
    },

});


//auto play swiper silde hover시 멈춤
//.the_best 클래스 붙여주지 않으면 다른 배너 스와이퍼 호버해도 멈춤, 오류 생기면 반드시 체크할 것 


$('.the_best .swiper-slide').hover(function () {
    swiper.autoplay.stop();
}, function () {
    swiper.autoplay.start();
});

//hambuger inner style
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