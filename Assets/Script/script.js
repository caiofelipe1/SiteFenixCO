document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.getElementById("hamburguer");
    const menu = document.querySelector("nav.menu");

    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
