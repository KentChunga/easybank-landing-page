const nav = document.querySelector(".nav");
const openMenu = document.querySelector(".nav__toggle");
const overlayBg = document.querySelector(".overlay-bg");

// open and close menu
openMenu.addEventListener("click", () => {
  if (nav.classList.contains("show__menu")) {
    nav.classList.remove("show__menu");
    overlayBg.classList.remove("overlay");

  } else {
    nav.classList.add("show__menu");
    overlayBg.classList.add("overlay");
  }
});

// close menu when single menu link is clicked
(function closeMenu() {
  [...document.querySelectorAll(".link")].forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show__menu");
      overlayBg.classList.remove("overlay");
    });
  });
})();
