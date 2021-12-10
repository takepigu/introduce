//topページ名前をクリックしたらnav表示
$('h1').on("click", function() {
  $('h1').hide();
  $("nav").fadeIn('slow');
});

const showTab = (selector) => {
  console.log(selector);

  //tabs機能
  $('nav a').removeClass('active');

  $('.tabs-content > section').hide();

  $(`nav a[href="${selector}"]`).addClass('active');

  $(selector).fadeIn('slow');
};



$('nav a').on('click', (e) => {
  e.preventDefault();

  const selector = $(e.target).attr('href');
  const $nav = $('nav');

  if (selector === '#top') {
    $nav.fadeOut('slow', () => {
      $nav.addClass('center');
      $nav.fadeIn('slow');

      //TOPを非表示にする
      $('nav #top-navi').addClass('d-none');
    });
  }
  else {
    //TOPを表示にする
    $('nav #top-navi').removeClass('d-none');
    $nav.removeClass('center');
  }
  showTab(selector);
});

showTab('#top');
