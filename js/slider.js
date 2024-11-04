const images = document.querySelectorAll(".aboutImg");
const sliderAboutLine = document.querySelector(".about_slider-line");
const sliderAbout = document.querySelector(".about_slider");
let count = 0;
let width;
let interval;

function init() {
  console.log("resize");
  width = sliderAbout.offsetWidth;
  sliderAboutLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollsliderAbout();
}
window.addEventListener("resize", init);
init();

document.querySelector(".slider_prew").addEventListener("click", prew);
function prew() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollsliderAbout();
}

document.querySelector(".slider_next").addEventListener("click", next);
function next() {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollsliderAbout();
}

function rollsliderAbout() {
  sliderAboutLine.style.transform = "translate(-" + count * width + "px)";
}

// swipe
sliderAbout.addEventListener("touchstart", handleTouchStart, false);
sliderAbout.addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff < 0) {
      next();
    } else {
      prew();
    }
  }
  x1 = null;
  y1 = null;
}

// autoplay
function startAutoplay() {
  interval = setInterval(next, 3000); // Change slide every 3 seconds
}

function stopAutoplay() {
  clearInterval(interval);
}

sliderAbout.addEventListener("mouseenter", stopAutoplay);
sliderAbout.addEventListener("mouseleave", startAutoplay);

startAutoplay();
