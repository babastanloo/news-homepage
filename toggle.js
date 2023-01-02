const toggleButton = document.querySelector(".toggle_img");
const sidebarMenu = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-button");

toggleButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  sidebarMenu.classList.toggle("active");
});
