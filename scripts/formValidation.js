/*
  Comp 2681 - Web Site Design and Development 
  (Winter 2024 Sharma)

  Script to perform form validation
  Author: Yanek Keshavjee
  Date: September 24, 2024

  filename: formValidation.js

*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cOrder");
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const street = document.getElementById("street").value.trim();
    const city = document.getElementById("city").value.trim();
    const province = document.getElementById("province").value.trim();
    const postcode = document.getElementById("postcode").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check name is not empty
    if (name === "") {
      alert("Please enter your name.");
      event.preventDefault();
      return;
    }

    // Check email is not empty and valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    // Check phone number is valid (matches the pattern)
    const phonePattern = /^\d{10}$|^\(\d{3}\)\s*\d{3}[\s\-]?\d{4}$/;
    if (phone === "" || !phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      event.preventDefault();
      return;
    }

    // Check postal code is valid
    const postcodePattern = /^\d{5}(-\d{4})?$/;
    if (postcode === "" || !postcodePattern.test(postcode)) {
      alert("Please enter a valid postal code.");
      event.preventDefault();
      return;
    }

    // Check message is not empty
    if (message === "") {
      alert("Please enter a message.");
      event.preventDefault();
      return;
    }

    // If all validations pass, form is submitted
    alert("Form submitted successfully!");
  });
});
