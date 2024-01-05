$(function () {
  $("#slide-open").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide_hb").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide_hb").addClass("on");
    }
  });
  $("#slide_hb ul li a").click(function () {
    if ($("#burgur").hasClass("on")) {
      $("#burgur").removeClass("on");
      $("#slide_hb").removeClass("on");
    } else {
      $("#burgur").addClass("on");
      $("#slide_hb").addClass("on");
    }
  });

  });
