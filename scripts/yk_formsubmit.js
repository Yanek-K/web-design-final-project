/*
  Comp 2681 - Web Site Design and Development 
  (Winter 2024 Sharma)

  Script to submit the form when the user has filled it in and clicked submit
  Author: Yanek Keshavjee
  Date: September 24, 2024

  filename: yk_formSubmit.js

*/

window.onload = setForm;

function setForm() {
  document.forms[0].onsubmit = function () {
    if (this.checkValidity())
      alert("No invalid data detected. Will retain data for further testing.");
    return false;
  };
}
