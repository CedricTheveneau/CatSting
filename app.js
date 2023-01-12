// Hamburger menu

let hambMenu = document.getElementById("menuHamburger");
let menuHamburger = document.querySelector(".hamMenu");
hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});

// Dark mode

let darkMode = () => {
  const themeToggleGlobal = document.querySelectorAll(".themeToggles");
  const suns = document.querySelectorAll(".sun");
  const moons = document.querySelectorAll(".moon");
  const bodyTheme = document.getElementsByTagName("body");
  let preferedTheme;
  let togglingDark = () => {
    themeToggleGlobal.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        // bodyTheme[0] represents the body tag itself, not the object body as a whole
        bodyTheme[0].classList.toggle("darkMode");
        bodyTheme[0].classList.toggle("lightMode");
        suns[0].classList.toggle("hide");
        moons[0].classList.toggle("hide");
        suns[1].classList.toggle("hide");
        moons[1].classList.toggle("hide");
        preferedTheme = document.querySelector("body").getAttribute("class");
        document.cookie = `theme=${preferedTheme}; path=/; secure`;
        console.log(preferedTheme);
      });
    });
  };
  togglingDark();
  let checkCookie = () => {
    const subbed = document.cookie.substring(6);
    console.log(subbed);
    if (subbed == "") {
      preferedTheme = document.querySelector("body").getAttribute("class");
      document.cookie = `theme=${preferedTheme}; path=/; secure`;
    } else if (
      document.querySelector("body").getAttribute("class") !== subbed
    ) {
      console.log(subbed);
      bodyTheme[0].classList.toggle("darkMode");
      bodyTheme[0].classList.toggle("lightMode");
      suns[0].classList.toggle("hide");
      moons[0].classList.toggle("hide");
      suns[1].classList.toggle("hide");
      moons[1].classList.toggle("hide");
    }
  };
  checkCookie();
};
darkMode();
