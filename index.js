//店舗一覧の動き
$('.pre-content').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
  
  $('.area-box').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass("border-none");
  });



  /* 固定しているボタン(fixed-btn)のcss */

// 変数宣言と代入
var btn = $(".fixed-btn");
// ボタン非表示
btn.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    btn.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    btn.fadeOut(300);
}
});