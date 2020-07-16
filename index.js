let mainNav = document.getElementById("main-nav");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    console.log("working")
    mainNav.classList.toggle("nav-active");
});
