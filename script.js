

var mouse_X = 0;
var mouse_Y = 0;

//カーソルと拡大鏡のトレース

$(document).mousemove(function (e) {

    mouse_X = e.clientX;
    mouse_Y = e.clientY;

    //カーソル処理
    $('#stalker').css("transform", "translate(" + e.clientX + "px, " + e.clientY + "px) scale(1, 1)");
});

//loading
$(window).on('load', function() {

  $('#loading').delay(900).fadeOut(800);

  setTimeout(function() {
    $("body").css("cursor", "none");
    $('#stalker').fadeIn(200);
  }, 1400)
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
  images: ['title_bg_img/1.jpg', 'title_bg_img/2.jpg', 'title_bg_img/3.jpg'], // 切り替える背景画像を指定
  interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
  loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
  shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
  effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
  duration: 2000, // エフェクトの時間を指定します。
  easing: "swing" // エフェクトのイージングをlinear,swingから指定

});