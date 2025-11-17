// scripts/like.js (заменить полностью)

(function () {
  // Находим контейнеры/элементы
  const iconButtons = Array.from(document.querySelectorAll('.card__icon-button'));
  const likeSvgs = Array.from(document.querySelectorAll('.like-icon'));
  const likeButtons = Array.from(document.querySelectorAll('.card__like-button'));

  // Утилита: найти индекс svg для данного клика (по ближайшему .main__card)
  function findIndexFromElement(el) {
    const card = el.closest('.main__card');
    if (!card) return -1;
    const allCards = Array.from(document.querySelectorAll('.main__card'));
    return allCards.indexOf(card);
  }

  // Универсальная функция переключения
  function toggle(index) {
    if (index < 0) return;
    const svg = likeSvgs[index];
    const btn = likeButtons[index];

    if (!svg || !btn) return;

    svg.classList.toggle('is-liked');

    const liked = svg.classList.contains('is-liked');

    // текст кнопки (находим элемент .button__text внутри btn)
    const textEl = btn.querySelector('.button__text');
    if (textEl) {
      textEl.textContent = liked ? 'Unlike' : 'Like';
    }

    // для доступности
    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
  }

  // Привязываем обработчики для иконочных кнопок
  iconButtons.forEach((b) => {
    b.addEventListener('click', (e) => {
      const idx = findIndexFromElement(b);
      toggle(idx);
    });
  });

  // Привязываем обработчики для SVG напрямую (на случай, если пользователь кликает на SVG внутри)
  likeSvgs.forEach((svg) => {
    svg.style.cursor = 'pointer';
    svg.addEventListener('click', (e) => {
      const idx = findIndexFromElement(svg);
      toggle(idx);
    });
  });

  // Привязываем обработчики для текстовой кнопки
  likeButtons.forEach((b) => {
    b.addEventListener('click', (e) => {
      const idx = findIndexFromElement(b);
      toggle(idx);
    });
  });

})();
