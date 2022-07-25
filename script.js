"use strict";
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const firstSection = document.querySelector(".firstSection");
const navBar = document.querySelector(".navBar");
const enquiry = document.querySelectorAll(".enquiry-arrow");
// const enquiryArrow = document.querySelector(".container-header div img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
  firstSection.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-items li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
    firstSection.classList.remove("active");
    navBar.classList.remove("active");
  })
);
console.log(enquiry);
enquiry.forEach((enq) => {
  enq.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.classList.toggle("clicked");
    const p = enq.parentElement.nextElementSibling;
    if (p.style.display === "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
    console.log(enquiry.parentElement.nextElementSibling);
  });
});
