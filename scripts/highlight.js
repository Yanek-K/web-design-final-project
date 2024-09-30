/*
  Comp 2681 - Web Site Design and Development 
  (Winter 2024 Sharma)

  Script to highlight the element when a user clicks
  Author: Yanek Keshavjee
  Date: September 24, 2024

  filename: highlight.js

*/

document.addEventListener("DOMContentLoaded", function () {
  // Function to highlight the section
  function highlightSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add("highlight");

      // Remove the highlight after 3 seconds
      setTimeout(function () {
        section.classList.remove("highlight");
      }, 2000);
    }
  }

  // Check if the URL has a hash (e.g., #experience)
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1);
    highlightSection(id);
  }

  // Highlight on click for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href").substring(1);
      highlightSection(id);
    });
  });
});
