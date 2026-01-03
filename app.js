const mbMenuBtn = document.querySelector(".mb-menu-btn");
const mbNavMenu = document.querySelector(".invoicee-mb-nav-container");
mbMenuBtn.addEventListener("click", () => {
  mbMenuBtn.classList.toggle("mb-menu-btn-active");
  mbNavMenu.classList.toggle("mb-nav-active");
});
