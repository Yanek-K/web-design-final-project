/*
  Comp 2681 - Web Site Design and Development 
  (Winter 2024 Sharma)

  Script to calculate the days left to my birthday
  Author: Yanek Keshavjee
  Date: September 24, 2024

  filename: daysLeftScript.js

*/

// Get current date and birthday
var currentDay = new Date();
var event = new Date("31 December, 2024");

// Calculate the days left
var daysLeft = Math.floor((event - currentDay) / (1000 * 60 * 60 * 24));

// Create text node for days left
var daysLeftNode = document.createTextNode(daysLeft);
var eventNode = document.createElement("h2");

// Set color based on days left
if (daysLeft < 30) {
  eventNode.style.color = "red";
} else if (daysLeft >= 32 && daysLeft <= 180) {
  eventNode.style.color = "green";
} else {
  eventNode.style.color = "blue";
}

// Append days left to the DOM
eventNode.appendChild(daysLeftNode);
document.querySelector(".hero__wrap__event").appendChild(eventNode);
