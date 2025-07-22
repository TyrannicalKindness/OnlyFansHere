document.addEventListener('DOMContentLoaded', () => {
  const emojiPlaceholder = '🖼️'; // Image frame emoji as placeholder

  function replaceBrokenImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.onerror = () => {
        // Replace broken image with emoji placeholder inside a span
        const span = document.createElement('span');
        span.textContent = emojiPlaceholder;
        span.style.fontSize = '3rem';
        span.style.display = 'inline-block';
        span.style.width = img.width ? img.width + 'px' : '100px';
        span.style.height = img.height ? img.height + 'px' : '100px';
        span.style.textAlign = 'center';
        span.style.lineHeight = span.style.height;
        img.parentNode.replaceChild(span, img);
      };
    });
  }

  replaceBrokenImages();
});
