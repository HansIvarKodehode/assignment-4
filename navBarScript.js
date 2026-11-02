// Select the navigation bar and button
// const navBar = document.querySelector("nav");
// const toggleButton = document.querySelector("#showNavBar");

let navBtn = document.getElementById("showNavBar");
let navBar = document.getElementById("navBar");

// Add click event to toggle visibility
navBtn.addEventListener("click", () => {
  if (navBar.style.display === "none") {
    navBar.style.display = "block"; // Show the nav
  } else {
    navBar.style.display = "none"; // Hide the nav
  }
});

navBar.style.display = "none";
