(() => {
  document.querySelectorAll('[data-hero-video]').forEach((video) => {
    const saveData = navigator.connection?.saveData === true;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (saveData || reduceMotion) return;

    const loadVideo = () => {
      video.querySelectorAll('source[data-src]').forEach((source) => {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
      });
      video.addEventListener('playing', () => {
        video.classList.add('is-ready');
        const poster = video.parentElement?.querySelector('.hero-poster');
        if (poster) poster.hidden = true;
      }, { once: true });
      video.load();
      video.play().catch(() => {});
    };
    const scheduleVideo = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadVideo, { timeout: 1800 });
      } else {
        window.setTimeout(loadVideo, 900);
      }
    };

    if (document.readyState === 'complete') scheduleVideo();
    else window.addEventListener('load', scheduleVideo, { once: true });
  });

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
    const purchaseStatus = form.querySelector('[data-purchase-status]');
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

    const root = window.Shopify?.routes?.root || '/';
    const setPurchaseStatus = (message, isError = false) => {
      if (!purchaseStatus) return;
      purchaseStatus.hidden = !message;
      purchaseStatus.textContent = message;
      purchaseStatus.classList.toggle('is-error', isError);
    };
    const selectedQuantity = () => Math.max(1, Number.parseInt(quantityInput?.value || '1', 10) || 1);
    const addSelectedVariant = async () => {
      if (!variantInput?.value) throw new Error('No variant selected');
      const response = await fetch(`${root}cart/add.js`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          items: [{ id: variantInput.value, quantity: selectedQuantity() }]
        })
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.description || `Cart request failed: ${response.status}`);
      }
      return response.json();
    };
    const navigateTop = (url) => {
      try {
        window.top.location.assign(url);
      } catch (error) {
        window.location.assign(url);
      }
    };
    const setPurchaseBusy = (busy, action = 'cart') => {
      if (addButton) {
        addButton.disabled = busy;
        addButton.textContent = busy && action === 'cart' ? 'Adding...' : 'Add to cart';
      }
      if (buyButton) {
        buyButton.disabled = busy;
        buyButton.textContent = busy && action === 'checkout' ? 'Opening checkout...' : 'Buy it now';
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
        setPurchaseStatus('');
      });
    });

    form.addEventListener('submit', async (event) => {
      if (event.submitter?.matches('[data-buy-now]')) return;
      if (!variantInput?.value || addButton?.disabled) return;
      event.preventDefault();
      setPurchaseBusy(true, 'cart');
      setPurchaseStatus('Adding this item to your cart...');
      try {
        await addSelectedVariant();
        navigateTop(`${root}cart`);
      } catch (error) {
        setPurchaseBusy(false);
        setPurchaseStatus(error.message || 'This item could not be added. Please try again.', true);
      }
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
