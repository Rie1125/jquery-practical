// メインビジュアルをカルーセルに

$(function (){

  $('.slider').slick({
  autoplay:true,
  infinite:true,
  slidesToShow:1,
  dots:true,
  fade:true,
  speed: 1400,
  });


// リンクのホバー時に不透明化

  $('.nav1,.nav2,.nav3').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );

// 100pxを境にTOPボタンの表示を切り替え  
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.page-top').fadeIn();
  } else {
    $('.page-top').fadeOut();
  }
});

// ページ内リンクのスクロールをなめらかに
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});

// スクロールしたときにセクションまでフェードイン
// $(window).scroll(function () {
//   $('section').each(function () {
//     const imgPos = $(this).offset().top;
//     const scroll = $(window).scrollTop();
//     const windowHeight = $(window).height(); 
    
//     if (scroll > imgPos - windowHeight + 100) {
//       $(this).addClass('fade-in');
//     }
//   });
// });


$(window).scroll(function() {
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();
// 上２つは繰り返す必要がないから上に出した方が処理が早い

  $('.fade-in-target').each(function() {
    const imgPos = $(this).offset().top;
    // thisはこの直前のfade-in-targetを意味するから、ここでしか作用しない

    if (scroll > imgPos - windowHeight + 100) {
      $(this).addClass('fade-in');
    }
  });
});

// モーダルここから
$('.item, .item_center').click(function() {
  var imgSrc = $(this).children().attr('src');
  $('.bigimg').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body,html').css('overflow-y', 'hidden');
  return false
});

$('.close-btn').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y', 'visible');
  return false
});

// モーダルここまで

});