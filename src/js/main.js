// toggle
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(
    "[data-collapse-toggle='mobile-menu-2']"
  );
  const menu = document.getElementById("mobile-menu-2");

  button.addEventListener("click", function () {
    const expanded = button.getAttribute("aria-expanded") === "true" || false;
    button.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("hidden");
  });
});
// AOS
AOS.init();

$(document).ready(
  (function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
