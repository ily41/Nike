const products = Array.from(document.querySelectorAll('.product-card__info')).map((card) => {
    const title = card.querySelector('.product-card__title')?.textContent.trim();
    const subtitle = card.querySelector('.product-card__subtitle')?.textContent.trim();
    const colorCount = card.querySelector('.product-card__product-count')?.textContent.trim();
    const price = card.querySelector('[data-testid="product-price"]')?.textContent.trim();
    
    return {
        title,
        subtitle,
        colorCount,
        price,
    };
});





const productImages = Array.from(document.querySelectorAll('img'))
  .map(img => img.src)
  .filter(src => src.includes('nike.com') && src.includes('/a/images/'));







