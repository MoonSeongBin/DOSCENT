//main_banner_img
var swiper = new Swiper(".main_banner_img", {
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 700,
});



// history
$(document).ready(function () {
  //처음들어갔을때 모습 만들기...
  $(".tab_history").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs_history li:nth-child(2)").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_history:nth-child(2)").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs_history li").click(function () {
    $("ul.tabs_history li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
    $(".tab_history").hide(); //모든 contents들 숨김

    var activeTab = $(this).find("div").attr("date"); //Find the href attribute value to identify the active tab + content
    /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
  });
});

//history inner slide
var swiper = new Swiper(".mySwiper_history", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});



// contact us typing
var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

if (typingBool == false) {
  // 타이핑이 진행되지 않았다면
  typingBool = true;
  var tyInt = setInterval(typing, 100); // 반복동작
}

function typing() {
  $(".typing ul li").removeClass("on");
  $(".typing ul li").eq(liIndex).addClass("on");
  //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복
    $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    //한문장이끝나면
    if (liIndex < liLength - 1) {
      //다음문장으로  가기위해 인덱스를 1증가
      liIndex++;
      //다음문장을 타이핑하기위한 셋팅
      typingIdx = 0;
      typingBool = false;
      typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

      //다음문장 타이핑전 1초 쉰다
      clearInterval(tyInt);
      //타이핑종료

      setTimeout(function () {
        //1초후에 다시 타이핑 반복 시작
        tyInt = setInterval(typing, 100);
      }, 1000);
    } else if (liIndex == liLength - 1) {
      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);

      //1초후
      setTimeout(function () {
        //사용했던 변수 초기화
        typingBool = false;
        liIndex = 0;
        typingIdx = -0;

        //첫번째 문장으로 셋팅
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        //타이핑 결과 모두 지우기
        $(".typing ul li").html("");

        //반복시작
        tyInt = setInterval(typing, 100);
      }, 1000);
    }
  }
}


//product
var swiper = new Swiper(".pd_list", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev",
  },
});


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