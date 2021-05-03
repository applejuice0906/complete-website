const menu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".navbar-links");
const navLogo = document.querySelector("#navbar-logo");
const homeMenu = document.querySelector("#home-link");
const aboutMenu = document.querySelector("#about-link");
const servicesMenu = document.querySelector("#services-link");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  navLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const highlightMenu = () => {
  if (window.innerWidth < 960) {
    const highlightedMenu = document.querySelector(".highlight");

    highlightedMenu && highlightedMenu.classList.remove("highlight");
    return;
  }

  if (window.scrollY < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if (window.scrollY < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  }

  if (window.scrollY < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if (window.scrollY > 2345) servicesMenu.classList.remove("highlight");
};

window.addEventListener("scroll", highlightMenu);
menu.addEventListener("click", highlightMenu);

hideMobileMenu = () => {
  const menuBar = document.querySelector(".active");
  if (menuBar) {
    menu.classList.toggle("is-active");
    menuBar.classList.remove("active");
  }
};

navLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
