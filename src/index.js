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

// image carousel functionality

const carousel = document.querySelector("#carousel");
const carouselButtonLeft = document.querySelector("#carousel-button-left");
const carouselButtonRight = document.querySelector("#carousel-button-right");

const scrolledToStart = () => {
  return carousel.scrollLeft === 0;
};

const scrolledToEnd = () => {
  return carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth;
};

carousel.addEventListener("scroll", () => {
  // logic to decide if carousel left button should show or not
  if (scrolledToStart()) {
    carouselButtonLeft.classList.remove("group-hover:flex");
    carouselButtonLeft.classList.add("group-hover:hidden");
  } else if (!scrolledToStart()) {
    carouselButtonLeft.classList.remove("group-hover:hidden");
    carouselButtonLeft.classList.add("group-hover:flex");
  }

  // logic to decide if carousel right button should show or not
  if (scrolledToEnd()) {
    carouselButtonRight.classList.remove("group-hover:flex");
    carouselButtonRight.classList.add("group-hover:hidden");
  } else if (!scrolledToEnd()) {
    carouselButtonRight.classList.remove("group-hover:hidden");
    carouselButtonRight.classList.add("group-hover:flex");
  }
});

carouselButtonLeft.addEventListener("click", () => {
  // scroll to the left when clicked
  carousel.scrollBy({ left: -500, behavior: "smooth" });
});

carouselButtonRight.addEventListener("click", () => {
  // scroll to the right when clicked
  carousel.scrollBy({ left: 500, behavior: "smooth" });
});
