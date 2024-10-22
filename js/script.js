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

document.addEventListener("DOMContentLoaded", () => {
  // Получаем элемент select после загрузки DOM
  const select = document.querySelector(".menuSelect");

  // Проверяем, что элемент select существует на странице
  if (select) {
    // Добавляем обработчик события "change"
    select.addEventListener("change", () => {
      // Обновляем значение при изменении выбора
      let selectedValue = select.value;

      // Переход на страницу
      if (selectedValue) {
        window.location.href = selectedValue;
      }
    });
  }
});

//scrolling feedbackServices
const slider = document.querySelector(".feedbackS__slider");

let isDown = false;
let startX;
let scrollLeft;

// Обработчик для нажатия мыши
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
