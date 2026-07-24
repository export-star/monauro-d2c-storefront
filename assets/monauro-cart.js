(() => {
  const cartForm = document.querySelector('[data-monauro-cart]');
  if (!cartForm || cartForm.dataset.cartReady === 'true') return;

  cartForm.dataset.cartReady = 'true';
  const root = window.Shopify?.routes?.root || '/';
  const status = cartForm.querySelector('.cart-action-status');
  const setStatus = (message, isError = false) => {
    if (!status) return;
    status.hidden = !message;
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  };

  const postCart = async (endpoint, payload) => {
    const response = await fetch(`${root}cart/${endpoint}.js`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Cart request failed: ${response.status}`);
    return response.json();
  };

  cartForm.querySelectorAll('[data-cart-line]').forEach((input) => {
    input.addEventListener('change', async () => {
      const previousValue = input.defaultValue;
      const quantity = Math.max(0, Number.parseInt(input.value, 10) || 0);
      input.value = String(quantity);
      input.disabled = true;
      setStatus('Updating cart...');
      try {
        await postCart('change', {
          line: Number.parseInt(input.dataset.cartLine, 10),
          quantity
        });
        window.location.reload();
      } catch (error) {
        input.value = previousValue;
        input.disabled = false;
        setStatus('The quantity could not be updated. Please try again.', true);
      }
    });
  });

  const clearButton = cartForm.querySelector('[data-cart-clear]');
  clearButton?.addEventListener('click', async (event) => {
    event.preventDefault();
    clearButton.disabled = true;
    setStatus('Clearing cart...');
    try {
      await postCart('clear', {});
      window.location.assign(`${root}cart`);
    } catch (error) {
      clearButton.disabled = false;
      setStatus('The cart could not be cleared. Please try again.', true);
    }
  });

})();
