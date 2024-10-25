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
// menu open ------------------------------------------------------------------
const menu = document.querySelector(".nav_menu");
const headerWrapper = document.querySelector(".header__wrapper");

menu.addEventListener("click", () => {
  headerWrapper.classList.toggle("open");
});

//scrolling feedbackServices -------------------------------------------------
const slider = document.querySelector(".feedbackS__slider");

let isDown = false;
let startX;
let scrollLeft;

// Обработчик для нажатия мыши
if (slider) {
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing"; // Смена курсора при нажатии
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  // Обработчик для выхода мыши за пределы слайдера
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab"; // Вернуть курсор в исходное состояние
  });

  // Обработчик для отпускания мыши
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab"; // Вернуть курсор после скролла
  });

  // Обработчик для движения мыши
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // Если мышь не нажата, выйти из функции
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Скорость скролла
    slider.scrollLeft = scrollLeft - walk;
  });
}

// treatment open ------------------------------------------------------------------
const listItem = document.querySelectorAll(".treatment__slideList_item");

listItem.forEach((item) => {
  item.addEventListener("click", () => {
    // Сначала закрываем все элементы
    listItem.forEach((el) => el.classList.remove("openList"));

    // Затем открываем тот элемент, по которому нажали
    item.classList.add("openList");
  });
});

// FAQ open/clos -----------------------------------------------------------------------

document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", (event) => {
    if (details.open) {
      document.querySelectorAll("details").forEach((otherDetails) => {
        if (otherDetails !== details && otherDetails.open) {
          otherDetails.open = false;
        }
      });
    }
  });
});
