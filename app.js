// mobile menu scripts
let mbMenuBtns = document.querySelectorAll(".mb-menu-btn");
const mbNavMenu = document.querySelector(".invoicee-mb-nav-container");

mbMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = mbNavMenu.classList.toggle("mb-nav-active");
    mbMenuBtns.forEach((btn) => {
      if (isOpen) {
        btn.classList.add("mb-menu-btn-active");
      } else {
        btn.classList.remove("mb-menu-btn-active");
      }
    });
  });
});
