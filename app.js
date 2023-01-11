// Hamburger menu

let hambMenu = document.getElementById("menuHamburger");
let menuHamburger = document.querySelector(".hamMenu");
hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});

// Dark mode

//! Working V1
/*let themeToggle = document.getElementById("themeToggle");
let themeToggle2 = document.getElementById("themeToggle2");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let sun2 = document.getElementById("sun2");
let moon2 = document.getElementById("moon2");
let bodyTheme = document.getElementsByTagName("body");
themeToggle.addEventListener("click", () => {
  // bodyTheme[0] represents the body tag itself, not the object body as a whole
  bodyTheme[0].classList.toggle("darkMode");
  bodyTheme[0].classList.toggle("lightMode");
  sun.classList.toggle("hide");
  sun2.classList.toggle("hide");
  moon.classList.toggle("hide");
  moon2.classList.toggle("hide");
});

themeToggle2.addEventListener("click", () => {
  // bodyTheme[0] represents the body tag itself, not the object body as a whole
  bodyTheme[0].classList.toggle("darkMode");
  bodyTheme[0].classList.toggle("lightMode");
  sun.classList.toggle("hide");
  sun2.classList.toggle("hide");
  moon.classList.toggle("hide");
  moon2.classList.toggle("hide");
});*/

//? Test V2

let themeToggleGlobal = document.querySelectorAll(".themeToggles");
console.log(themeToggleGlobal);
let suns = document.querySelectorAll(".sun");
console.log(suns);
let moons = document.querySelectorAll(".moon");
console.log(moons);
let bodyTheme = document.getElementsByTagName("body");
themeToggleGlobal.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // bodyTheme[0] represents the body tag itself, not the object body as a whole
    bodyTheme[0].classList.toggle("darkMode");
    bodyTheme[0].classList.toggle("lightMode");
    suns[(0, 1)].classList.toggle("hide");
    moons[(0, 1)].classList.toggle("hide");
  });
});
/*themeToggleGlobal.addEventListener("click", () => {
  // bodyTheme[0] represents the body tag itself, not the object body as a whole
  bodyTheme[0].classList.toggle("darkMode");
  bodyTheme[0].classList.toggle("lightMode");
  sun.classList.toggle("hide");
  sun2.classList.toggle("hide");
  moon.classList.toggle("hide");
  moon2.classList.toggle("hide");
});*/

// Cookies to save preferences over light/dark mode

//! V1
/*let themeCookie = (document.cookie =
  "theme=darkMode; path=/; max-age=5; secure");
alert(themeCookie);*/

//? V2
// check for saved 'darkMode' in localStorage
/*let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});*/
