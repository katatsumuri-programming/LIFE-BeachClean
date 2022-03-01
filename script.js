
//カーソルと拡大鏡のトレース
/*
$(document).mousemove(function (e) {

    mouse_X = e.clientX;
    mouse_Y = e.clientY;

    //カーソル処理
    $('#stalker').css("transform", "translate(" + e.clientX + "px, " + e.clientY + "px) scale(1, 1)");
});
*/
//loading
$(window).on('load', function() {

  $('#loading').delay(900).fadeOut(800);

})

$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

$('.bg_img').bgSwitcher({
  images: ['https://res.cloudinary.com/dtsetxfcq/image/upload/v1644111400/LifeBeachClean/title_bg_img/2_k0hlsf.jpg', 'https://res.cloudinary.com/dtsetxfcq/image/upload/v1644111399/LifeBeachClean/title_bg_img/1_ep5oas.jpg', 'https://res.cloudinary.com/dtsetxfcq/image/upload/v1644111399/LifeBeachClean/title_bg_img/3_g1uk5j.jpg'], // 切り替える背景画像を指定
  interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
  loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
  shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
  effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
  duration: 2000, // エフェクトの時間を指定します。
  easing: "swing" // エフェクトのイージングをlinear,swingから指定

});

$(".top").click(function(){
  $('body, html').animate({ scrollTop: 0 }, 500);
})
$(".now").click(function(){
  $('body, html').animate({ scrollTop: $('.now_content').offset().top }, 500);
})
$(".future").click(function(){
  $('body, html').animate({ scrollTop: $('.future_content').offset().top }, 500);
})
$(".improvement").click(function(){
  $('body, html').animate({ scrollTop: $('.improvement_content').offset().top }, 500);
})

$(function() {
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if (((scroll) / (window.innerHeight)) > 0.8) {
      $("header").css("background-color", "rgba(255,255,255,0.9)");
      $("header").css("color", "#000");
    } else {
      $("header").css("background-color", "rgba(0,0,0,0)");
      $("header").css("color", "#fff");
    }
  });
});