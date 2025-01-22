let currentIndex = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  const offset = currentIndex * -100;

  items.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });
}

function openAside(packageName) {
  document.getElementById("bookingForm").classList.add("active");
  document.getElementById("package").value = packageName;

  const carouselItems = document.querySelectorAll(".carousel-item");
  const imageSrc = carouselItems[currentIndex].querySelector("img").src;
  document.getElementById("aside-image").src = imageSrc;
}

function closeAside() {
  document.getElementById("bookingForm").classList.remove("active");
}

function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const package = document.getElementById("package").value;
  const message = `Halo saya ingin memesan\n\n${package}\n\ndengan nama: ${name}\n\nlokasi di: ${location}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/628123456789?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  let scrollToTopBtn = document.getElementById("scrollToTop");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
