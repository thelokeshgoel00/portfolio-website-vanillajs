let mainNav = document.getElementById("main-nav");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navBarClose = document.getElementById("js-navbar-close")
navBarToggle.addEventListener("click", function() {
    console.log("working")
    mainNav.classList.toggle("nav-active");
    navBarToggle.classList.toggle("vis-bar");
    navBarClose.classList.toggle("vis-close");
});
navBarClose.addEventListener("click", function() {
    console.log("working")
    mainNav.classList.toggle("nav-active");
    navBarToggle.classList.toggle("vis-bar");
    navBarClose.classList.toggle("vis-close");
});