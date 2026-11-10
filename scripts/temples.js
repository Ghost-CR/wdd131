const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

  const menuIsOpen = mainnav.classList.contains("show");
  hambutton.setAttribute("aria-expanded", menuIsOpen);
  hambutton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuIcon.textContent = menuIsOpen ? "×" : "☰";
});
