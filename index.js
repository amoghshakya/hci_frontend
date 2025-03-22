const homeIcon = document.querySelector("img#home");
const searchIcon = document.querySelector("img#magnifying-glass");
const mapIcon = document.querySelector("img#map");
const notificationIcon = document.querySelector("img#bell");
const profileIcon = document.querySelector("img#user-circle");

homeIcon.addEventListener("click", () => {
    window.location.href = "/";
});

searchIcon.addEventListener("click", () => {
    window.location.href = "/search.html";
});
