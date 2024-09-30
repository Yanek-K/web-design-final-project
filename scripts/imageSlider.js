document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/portrait.png",
    "images/portrait2.png",
    "images/portrait4.png",
    "images/portrait5.png",
  ];

  let currentIndex = 0;
  const displayedImage = document.querySelector("#scrollImage img");

  // Function to change the image automatically
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayedImage.src = images[currentIndex];
  }

  // Set interval to change images every 4 seconds (4000 milliseconds)
  setInterval(changeImage, 4000);
});
