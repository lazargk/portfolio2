document.addEventListener("DOMContentLoaded", () => {
  console.log("Doc is ready");

  let menuHumburger = document.querySelector(".header-menu .menu-humburger");

  menuHumburger.addEventListener("click", () => {
    menuHumburger.classList.toggle("menu-hum__visited");

    let menu = document.querySelector(".header-menu .menu");
    menu.classList.toggle("menu-hidden");
  });

  
});
