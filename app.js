// Hamburger menu

let hambMenu = document.getElementById("menuHamburger");
let menuHamburger = document.querySelector(".hamMenu");
hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});

// Dark mode

//? Working V2

let themeToggleGlobal = document.querySelectorAll(".themeToggles");
let suns = document.querySelectorAll(".sun");
let moons = document.querySelectorAll(".moon");
let bodyTheme = document.getElementsByTagName("body");
themeToggleGlobal.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // bodyTheme[0] represents the body tag itself, not the object body as a whole
    bodyTheme[0].classList.toggle("darkMode");
    bodyTheme[0].classList.toggle("lightMode");
    suns.classList.toggle("hide");
    moons[0].classList.toggle("hide");
    suns[1].classList.toggle("hide");
    moons[1].classList.toggle("hide");
    let preferedTheme = document.querySelector("body").getAttribute("class");
    document.cookie = `theme=${preferedTheme}; path=/; secure`;
  });
});

//if (document.querySelector("body").getAttribute("class") === preferedTheme)

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
