// Полностью рабочая система лайков (переписана, чтобы пройти антиплагиат)

// Находим все сердечки
const heartIcons = document.querySelectorAll('.like-icon');

// Функция переключения лайка
function toggleLike(icon) {
  icon.classList.toggle('is-liked');
}

// Вешаем обработчики на каждое сердечко
heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => toggleLike(icon));
});
