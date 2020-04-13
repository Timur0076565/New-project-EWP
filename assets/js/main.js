$(document).ready(function() {
  function header() {
    $(window).on('scroll', function() {
      var scrolled = $(window).scrollTop();

      (scrolled > 300) ? $('.header').addClass('header_sticky') : $('.header').removeClass('header_sticky');
    });

  }
  header();

  function tabs() {
    $('.tabs__nav button').on('click', function() {
      var id = $(this).attr('data-id');
      $(this).closest('.tabs').find('[data-id^="tab-"]').removeClass('current');
      $(this).closest('.tabs').find('[data-id="' + id + '"]').addClass('current');
    });
  }
  tabs();

  function menu() {
    $('.header__menu-btn, .menu__close').on('click', function() {
      $('body').toggleClass('ov-hidden');
      $('.menu').toggleClass('show');
    });
  }
  menu();
});