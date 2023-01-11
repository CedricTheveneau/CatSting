/*let themeToggle = document.getElementById("themeToggle");
console.log(themeToggle);
let bodyTheme = document.getElementsByTagName("body");
console.log(bodyTheme);*/

/*themeToggle.addEventListener('click', () => {
    if () {
        
    }
})*/

let hambMenu = document.getElementById("menuHamburger");
console.log(hambMenu);
let menuHamburger = document.querySelector(".hamMenu");
console.log(menuHamburger);
hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  menuHamburger.classList.toggle("active");
});
