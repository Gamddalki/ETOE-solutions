import "../scss/styles.scss";

import "../img/logo.png";
import "../img/main-background.png";

(function ($) {
  $(".header__contents-list>li").mouseover(function () {
    $(this).children(".list_sub").stop().slideDown();
    $(".list_main").not(this).css("color", "#aaaaaa");
  });
  $(".header__contents-list>li").mouseleave(function () {
    $(this).children(".list_sub").stop().slideUp();
    $(".list_main").css("color", "#111");
  });
})(jQuery);
