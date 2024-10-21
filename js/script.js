// header hide & vew

const defaultOffset = 70;
const header = document.querySelector(".header");

const scrollPosition = () => document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  if (scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add("fixed");
  } else if (scrollPosition() < defaultOffset) {
    //scroll up
    header.classList.remove("fixed");
  }
});
