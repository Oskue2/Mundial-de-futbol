function filtrarGrupo(grupo, btn) {

    setActive(btn);
    let equipos = document.querySelectorAll(".conmebol")


    for (let i = 0; i < equipos.length; i++) {

        if (equipos[i].dataset.grupo === grupo) {
            equipos[i].style.display = "block";

        } else {
            equipos[i].style.display = "none";
        }

    }
}

function mostrarTodos(btn) {

    setActive(btn);
    let equipos = document.querySelectorAll(".conmebol")


    for (let i = 0; i < equipos.length; i++) {

        equipos[i].style.display = "block";

    }


}

function setActive(btn) {
    document.querySelectorAll('.btn').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
}

let fecha = new Date("Jun 11, 2026 00:00:00").getTime();

setInterval(() => {

    let ahora = new Date().getTime();
    let diferencia = fecha - ahora;
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor(diferencia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutos = Math.floor(diferencia % (1000 * 60 * 60) / (1000 * 60));
    let segundos = Math.floor(diferencia % (1000 * 60) / (1000))
    document.getElementById("dias").innerHTML = String(dias).padStart(2, "0");
    document.getElementById("horas").innerHTML = String(horas).padStart(2, "0");
    document.getElementById("minutos").innerHTML = String(minutos).padStart(2, "0");
    document.getElementById("segundos").innerHTML = String(segundos).padStart(2, "0");

}, 1000)