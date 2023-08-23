// toggle nav menu in mobile
let mobileNavBtn = document.getElementById("mobileNavBtn");
let mobileNavMenu = document.getElementById("mobileNavMenu");

mobileNavBtn.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("hidden");
});

// update current copyright year
let yearSpan = document.getElementById("thisYear");
let date = new Date();
yearSpan.innerText = date.getFullYear();
