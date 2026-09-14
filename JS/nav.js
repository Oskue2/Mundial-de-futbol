// Menu hamburguesa. Lo usan todas las paginas.

document.addEventListener("DOMContentLoaded", () => {

    let boton = document.querySelector(".menu-btn");
    let menu = document.querySelector(".navegador .info");

    if (!boton || !menu) return;

    boton.addEventListener("click", () => {
        let abierto = menu.classList.toggle("abierto");
        boton.classList.toggle("abierto", abierto);
        boton.setAttribute("aria-expanded", abierto);
    });

    // "Tablas" no lleva a ninguna parte: en movil despliega su submenu
    menu.querySelectorAll("li > a").forEach(enlace => {

        let submenu = enlace.parentElement.querySelector(".submenu");

        if (!submenu) return;

        enlace.addEventListener("click", evento => {
            if (window.innerWidth > 1024) return;
            evento.preventDefault();
            enlace.parentElement.classList.toggle("abierto");
        });
    });

    // Al volver a escritorio el menu tiene que quedar como estaba
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            menu.classList.remove("abierto");
            boton.classList.remove("abierto");
            boton.setAttribute("aria-expanded", "false");
        }
    });
});
