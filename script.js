//マウスカーソルの設定
const stalker = document.getElementById('stalker');
const mosaic_img = document.getElementById("mosaic_img_area");
var magnifying = false;


//モザイク画像にホバーしたらサイズを大きくする
mosaic_img.addEventListener("mouseover", function (event) {

  stalker.style.transform = "scale(2, 2)";
  magnifying = true;

}, false);

mosaic_img.addEventListener("mouseout", function (event) {

  stalker.style.transform = "scale(1, 1)";
  magnifying = false;

}, false);

//スクロールしたら元に戻す
window.addEventListener('scroll', function(e){

  scroll =  window.scrollY
  if (scroll !== 0) {

    stalker.style.transform = "translate(" + mouse_X + "px, " + mouse_Y + "px) scale(1, 1)";
    lensImgBox.style.opacity = 0;
    lensImgBox.style.transform = "scale(0.5, 0.5)";
    stalker.style.opacity = 1;

  }

});


//モザイク画像の拡大の設定
let lensImgBox = document.querySelector(".lens_img_box");
let lensImg = document.querySelector(".lens_img");
let ratio = 3;

console.log(document.getElementById('mosaic_img_area').clientHeight * ratio);
document.getElementById("lens_img").style.width = document.getElementById('mosaic_img_area').clientHeight * ratio + "px";
document.getElementById("lens_img").style.height = document.getElementById('mosaic_img_area').clientHeight * ratio + "px";

var scroll = 0;
var mouse_X = 0;
var mouse_Y = 0;

//カーソルと拡大鏡のトレース

document.addEventListener('mousemove', function (e) {

    mouse_X = e.clientX;
    mouse_Y = e.clientY;

    //モザイク画像にホバーしているか
    if (magnifying) {

      //スクロール量がゼロか
      if (scroll == 0) {

        //拡大鏡処理
        var clientRect = document.getElementById("mosaic_img_area").getBoundingClientRect() ;
        stalker.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px) scale(2, 2)";
        lensImgBox.style.opacity = 1;
        stalker.style.opacity = 0;
        lensImgBox.style.top = (e.offsetY + (clientRect.top - 100)) + "px";
        lensImgBox.style.left = (e.offsetX + (clientRect.left - 100)) + "px";

        //　拡大画像 (元画像の座標から反転して100足した値を設定)
        let newLensOffsetY = e.offsetY * ratio * -1 + 100;
        let newLensOffsetX = e.offsetX * ratio * -1 + 100;

        lensImg.style.transform = "translate(" + newLensOffsetX + "px, " + newLensOffsetY + "px)";
        lensImgBox.style.transform = " scale(1, 1)";

      } else {

        //カーソル処理
        stalker.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px) scale(1, 1)";
        lensImgBox.style.opacity = 0;
        lensImgBox.style.transform = "scale(0.5, 0.5)";
        stalker.style.opacity = 1;

      }

    } else {

      //カーソル処理
      stalker.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px) scale(1, 1)";
      lensImgBox.style.opacity = 0;
      lensImgBox.style.transform = "scale(0.5, 0.5)";
      stalker.style.opacity = 1;

    }

});

//loading
$(window).on('load', function() {

  $('#loading').delay(900).fadeOut(800);

  setTimeout(function() {
    document.body.style.cursor = "none";
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