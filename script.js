const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const form = document.querySelector("form");
const pages = document.querySelectorAll(".page");

let current = 0;

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (current < pages.length - 1) {
      pages[current].style.display = "none";
      current++;
      pages[current].style.display = "block";
    }
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (current > 0) {
      pages[current].style.display = "none";
      current--;
      pages[current].style.display = "block";
    }
  });
});
