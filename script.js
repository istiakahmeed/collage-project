document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  mobileMenu.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});
