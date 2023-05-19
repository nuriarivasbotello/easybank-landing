// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const menuElement = document.getElementById("menu");
const buttonElement = document.getElementById("toggle-menu");
const menuIcon = document.getElementById("menu-icon");

function handleClick() {
  menuElement.classList.toggle("menu--show");

  if (menuElement.classList.contains("menu--show")) {
    menuIcon.src = "./assets/images/icon-close.svg";
  } else {
    menuIcon.src = "./assets/images/icon-hamburger.svg";
  }
}

buttonElement.addEventListener("click", handleClick);