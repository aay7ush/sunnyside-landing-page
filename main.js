const menuBtn = document.getElementById("menu-btn")
const navMenu = document.querySelector(".nav-menu")

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden")
  navMenu.classList.toggle("grid")
})
