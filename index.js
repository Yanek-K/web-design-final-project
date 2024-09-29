document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/portrait.png",
    "images/portrait2.png",
    "images/portrait4.png",
    "images/portrait5.png",
  ];

  let currentIndex = 0;
  const displayedImage = document.querySelector("#scrollImage img");
  let lastScrollTime = 0; // To keep track of the last scroll event

  // Function to change the image
  function changeImage(direction) {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === "prev") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    displayedImage.src = images[currentIndex];
  }

  // Throttle scroll event
  window.addEventListener("wheel", function (event) {
    event.preventDefault(); // Prevent actual page scrolling
    const now = new Date().getTime();

    // Only allow image change every 300 milliseconds
    if (now - lastScrollTime > 800) {
      if (event.deltaY > 0) {
        // Scroll down - next image
        changeImage("next");
      } else {
        // Scroll up - previous image
        changeImage("prev");
      }

      // Update the last scroll time
      lastScrollTime = now;
    }
  });
});
