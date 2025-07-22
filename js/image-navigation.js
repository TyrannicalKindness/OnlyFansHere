document.addEventListener('DOMContentLoaded', () => {
  const mediaContainer = document.getElementById('mediaContainer');
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  let currentIndex = 0;

  function updateMainImage(index) {
    if (index < 0) index = thumbnails.length - 1;
    if (index >= thumbnails.length) index = 0;
    currentIndex = index;

    const selectedThumbnail = thumbnails[currentIndex];
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('selected'));
    selectedThumbnail.classList.add('selected');

    mediaContainer.innerHTML = '';
    if (selectedThumbnail.dataset.videoSrc) {
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.style.width = '97.5%';
      video.style.borderRadius = '8px';
      const source = document.createElement('source');
      source.src = selectedThumbnail.dataset.videoSrc;
      source.type = 'video/mp4';
      video.appendChild(source);
      mediaContainer.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = selectedThumbnail.src;
      img.alt = selectedThumbnail.alt;
      img.className = 'main-image';
      mediaContainer.appendChild(img);
    }
  }

  function createArrowButton(direction) {
    const btn = document.createElement('button');
    btn.className = `nav-arrow nav-arrow-${direction}`;
    btn.textContent = direction === 'left' ? '◀' : '▶';
    btn.addEventListener('click', () => {
      updateMainImage(direction === 'left' ? currentIndex - 1 : currentIndex + 1);
    });
    return btn;
  }

  if (mediaContainer && thumbnails.length > 0) {
    // Insert arrows
    const leftArrow = createArrowButton('left');
    const rightArrow = createArrowButton('right');
    mediaContainer.parentNode.insertBefore(leftArrow, mediaContainer);
    mediaContainer.parentNode.insertBefore(rightArrow, mediaContainer.nextSibling);

    // Initialize main image
    updateMainImage(0);
  }
});
