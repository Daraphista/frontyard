import "./style.css";

// logic to decide the navbar's animation and positioning

const main = document.querySelector("main");

const userScrolledToMain = () => {
  const mainPosition = main.offsetTop;
  const topOfViewPort = window.scrollY;
  return topOfViewPort > mainPosition;
};

const navbar = document.querySelector("nav");

navbar.classList.remove("fixed");

window.addEventListener("scroll", () => {
  console.log(userScrolledToMain());
  if (userScrolledToMain()) {
    navbar.classList.remove("absolute");
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
    navbar.classList.add("absolute");
  }
});
