// Initialize Swiper slider for hero section
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Countdown timer for sale banner
function countdownTimer() {
  const countdownDate = new Date("August 15, 2025 23:59:59 GMT+0100").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

countdownTimer();

// Product page thumbnail image switching
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-product-image");

if (thumbnails && mainImage) {
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Update main image src and alt
      mainImage.src = thumbnail.src;
      mainImage.alt = thumbnail.alt;

      // Update active thumbnail border
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });
}
