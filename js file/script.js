const toggleMenu = document.querySelector(".toggle-menu");
const sideBar = document.querySelector(".sidebar");

toggleMenu.addEventListener("click", function () {
	toggleMenu.classList.toggle("toggle-menu-open");
	sideBar.classList.toggle("sidebar-toggle");
});
