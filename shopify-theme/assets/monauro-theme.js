(() => {
  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nav = document.querySelector('[data-header-nav]');
      if (nav) nav.classList.toggle('is-open');
    });
  });

  document.querySelectorAll('[data-product-form]').forEach((form) => {
    const select = form.querySelector('[name="id"]');
    const priceTarget = form.closest('[data-product-shell]')?.querySelector('[data-price]');
    if (!select || !priceTarget) return;
    select.addEventListener('change', () => {
      const selected = select.options[select.selectedIndex];
      if (selected?.dataset.price) priceTarget.textContent = selected.dataset.price;
    });
  });

  document.querySelectorAll('[data-media-slider]').forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('[data-slide]'));
    const dots = Array.from(slider.querySelectorAll('[data-slide-dot]'));
    if (slides.length < 2) return;
    let index = 0;
    const show = (next) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    };
    slider.querySelector('[data-slide-prev]')?.addEventListener('click', () => show(index - 1));
    slider.querySelector('[data-slide-next]')?.addEventListener('click', () => show(index + 1));
    dots.forEach((dot) => dot.addEventListener('click', () => show(Number(dot.dataset.slideDot || 0))));
  });
})();
