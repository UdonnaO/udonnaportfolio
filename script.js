
const menu = document.querySelector("#menu");
const navList = document.querySelector("#nav-list");


menu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

document.querySelectorAll('.nav-link').
forEach(n => n.addEventListener("click", () => {
    navList.classList.remove('active');
}));