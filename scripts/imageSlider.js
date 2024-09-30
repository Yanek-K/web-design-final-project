/*
  Comp 2681 - Web Site Design and Development 
  (Winter 2024 Sharma)

  Script to create an image slider for the home page
  Author: Yanek Keshavjee
  Date: September 24, 2024

  filename: imageSlider.js

*/

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
