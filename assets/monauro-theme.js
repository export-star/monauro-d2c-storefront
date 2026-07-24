(() => {
  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nav = document.querySelector('[data-header-nav]');
      if (nav) nav.classList.toggle('is-open');
    });
  });

  document.querySelectorAll('[data-product-form]').forEach((form) => {
    const shell = form.closest('[data-product-shell]');
    const variantInput = form.querySelector('[data-variant-input], select[name="id"]');
    const priceTarget = shell?.querySelector('[data-price]');
    const labelTarget = form.querySelector('[data-variant-label]');
    const addButton = form.querySelector('[data-add-to-cart]');
    const buyButton = form.querySelector('[data-buy-now]');
    const quantityInput = form.querySelector('input[name="quantity"]');
    const variantButtons = Array.from(form.querySelectorAll('[data-variant-button]'));

    const setAvailability = (available) => {
      if (addButton) {
        addButton.disabled = !available;
        addButton.textContent = available ? 'Add to cart' : 'Sold out';
      }
      if (buyButton) {
        buyButton.disabled = !available;
        buyButton.textContent = available ? 'Buy it now' : 'Sold out';
      }
    };

    variantButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.disabled || !variantInput) return;
        variantInput.value = button.dataset.variantId || '';
        variantInput.dispatchEvent(new Event('change', { bubbles: true }));
        variantButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle('is-active', isActive);
          item.setAttribute('aria-pressed', String(isActive));
        });
        if (priceTarget && button.dataset.variantPrice) priceTarget.textContent = button.dataset.variantPrice;
        if (labelTarget && button.dataset.variantTitle) labelTarget.textContent = button.dataset.variantTitle;
        setAvailability(button.dataset.variantAvailable === 'true');
      });
    });

    buyButton?.addEventListener('click', () => {
      if (!variantInput?.value || buyButton.disabled) return;
      const quantity = Math.max(1, Number.parseInt(quantityInput?.value || '1', 10) || 1);
      const root = window.Shopify?.routes?.root || '/';
      buyButton.disabled = true;
      buyButton.textContent = 'Opening checkout...';
      window.location.assign(`${root}cart/${encodeURIComponent(variantInput.value)}:${quantity}?checkout`);
    });

    if (variantInput?.tagName === 'SELECT') {
      variantInput.addEventListener('change', () => {
        const selected = variantInput.options[variantInput.selectedIndex];
        if (priceTarget && selected?.dataset.price) priceTarget.textContent = selected.dataset.price;
      });
    }
  });
  document.querySelectorAll('[data-media-slider]').forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('[data-slide]'));
    const currentTarget = slider.querySelector('[data-slide-current]');
    if (!slides.length) return;
    let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));

    const show = (next) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
        const video = slide.querySelector('video');
        if (!video) return;
        if (active) video.play().catch(() => {});
        else video.pause();
      });
      if (currentTarget) currentTarget.textContent = String(index + 1);
    };

    slider.querySelector('[data-slide-prev]')?.addEventListener('click', () => show(index - 1));
    slider.querySelector('[data-slide-next]')?.addEventListener('click', () => show(index + 1));
    slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') show(index - 1);
      if (event.key === 'ArrowRight') show(index + 1);
    });
    show(index);
  });

  document.querySelectorAll('[data-product-shell]').forEach((shell) => {
    const dialog = shell.querySelector('[data-product-zoom]');
    const zoomImage = shell.querySelector('[data-product-zoom-image]');
    if (!dialog || !zoomImage) return;

    shell.querySelectorAll('[data-zoom-source]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        zoomImage.src = trigger.dataset.zoomSource || '';
        if (typeof dialog.showModal === 'function') dialog.showModal();
      });
    });
    dialog.querySelector('[data-product-zoom-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.querySelectorAll('[data-auto-swap]').forEach((container) => {
    const images = Array.from(container.querySelectorAll('img'));
    if (images.length < 2) return;
    const interval = Number(container.dataset.autoSwapInterval || 1000);
    let index = 0;
    window.setInterval(() => {
      if (document.hidden) return;
      images[index].classList.remove('is-active');
      index = (index + 1) % images.length;
      images[index].classList.add('is-active');
    }, interval);
  });
})();