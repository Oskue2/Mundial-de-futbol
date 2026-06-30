function filtrarGrupo(grupo, btn) {

    setActive(btn);
    let equipos = document.querySelectorAll(".estadio")


    for (let i = 0; i < equipos.length; i++) {

        if (equipos[i].dataset.grupo === grupo) {
            equipos[i].style.display = "";

        } else {
            equipos[i].style.display = "none";
        }

    }
}

function mostrarTodos(btn) {

    setActive(btn);
    let equipos = document.querySelectorAll(".estadio")


    for (let i = 0; i < equipos.length; i++) {

        equipos[i].style.display = "";

    }


}

function setActive(btn) {
    document.querySelectorAll('.btn').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
}