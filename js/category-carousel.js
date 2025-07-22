document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const images = Array.from(card.querySelectorAll('.product-image img'));
    if (images.length <= 1) return; // No carousel needed

    let currentIndex = 0;

    // Create carousel container
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
    carouselContainer.style.position = 'relative';
    carouselContainer.style.width = '150px';
    carouselContainer.style.height = '150px';
    carouselContainer.style.overflow = 'hidden';
    carouselContainer.style.backgroundColor = 'white';

    // Create main image element
    const mainImage = document.createElement('img');
    mainImage.src = images[0].src;
    mainImage.alt = images[0].alt;
    mainImage.style.width = '100%';
    mainImage.style.height = '100%';
    mainImage.style.objectFit = 'contain';
    mainImage.style.display = 'block';
    carouselContainer.appendChild(mainImage);

    // Create navigation buttons
    const leftArrow = document.createElement('button');
    leftArrow.className = 'carousel-arrow carousel-arrow-left';
    leftArrow.textContent = '◀';
    leftArrow.style.position = 'absolute';
    leftArrow.style.top = '50%';
    leftArrow.style.left = '5px';
    leftArrow.style.transform = 'translateY(-50%)';
    leftArrow.style.backgroundColor = 'rgba(255,255,255,0.7)';
    leftArrow.style.border = 'none';
    leftArrow.style.fontSize = '1.5rem';
    leftArrow.style.cursor = 'pointer';
    leftArrow.style.borderRadius = '4px';
    leftArrow.style.padding = '0 5px';
    leftArrow.style.userSelect = 'none';
    carouselContainer.appendChild(leftArrow);

    const rightArrow = document.createElement('button');
    rightArrow.className = 'carousel-arrow carousel-arrow-right';
    rightArrow.textContent = '▶';
    rightArrow.style.position = 'absolute';
    rightArrow.style.top = '50%';
    rightArrow.style.right = '5px';
    rightArrow.style.transform = 'translateY(-50%)';
    rightArrow.style.backgroundColor = 'rgba(255,255,255,0.7)';
    rightArrow.style.border = 'none';
    rightArrow.style.fontSize = '1.5rem';
    rightArrow.style.cursor = 'pointer';
    rightArrow.style.borderRadius = '4px';
    rightArrow.style.padding = '0 5px';
    rightArrow.style.userSelect = 'none';
    carouselContainer.appendChild(rightArrow);

    // Replace original image with carousel container
    const originalImageDiv = card.querySelector('.product-image');
    originalImageDiv.innerHTML = '';
    originalImageDiv.appendChild(carouselContainer);

    // Navigation functions
    function showImage(index) {
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentIndex = index;
      mainImage.src = images[currentIndex].src;
      mainImage.alt = images[currentIndex].alt;
    }

    leftArrow.addEventListener('click', () => {
      showImage(currentIndex - 1);
    });

    rightArrow.addEventListener('click', () => {
      showImage(currentIndex + 1);
    });
  });
});
