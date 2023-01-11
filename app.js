// Hamburger menu

let hambMenu = document.getElementById("menuHamburger");
let menuHamburger = document.querySelector(".hamMenu");
hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});

// Dark mode

let themeToggle = document.getElementById("themeToggle");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let bodyTheme = document.getElementsByTagName("body");
themeToggle.addEventListener("click", () => {
  // bodyTheme[0] represents the body tag itself, not the object body as a whole
  bodyTheme[0].classList.toggle("darkMode");
  bodyTheme[0].classList.toggle("lightMode");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
});

// Cookies to save preferences over light/dark mode
