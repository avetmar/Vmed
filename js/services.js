document.querySelectorAll(".servicesList__item").forEach((item) => {
  const buttons = item.querySelectorAll(".servicesList__menu_button");
  const contents = item.querySelectorAll(".servicesList__content");
  const image = item.querySelector("img");

  const baseSrc = image.src.replace(/ident\d+\.webp$/, "");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const identClass = Array.from(button.classList).find((cls) => cls.startsWith("ident"));
      if (!identClass) return;

      // Плавно скрыть текущее изображение
      image.style.opacity = 0;

      // Обновляем видимость контента
      contents.forEach((content) => {
        content.classList.toggle("hidden", !content.classList.contains(identClass));
      });

      // Получаем номер идентификатора и меняем путь изображения с задержкой для плавности
      const identNumber = identClass.match(/\d+/)[0];
      setTimeout(() => {
        image.src = `${baseSrc}ident${identNumber}.webp`;
        // Плавно показать новое изображение
        image.style.opacity = 1;
      }, 500); // Задержка соответствует переходу opacity в CSS
    });
  });
});
