let participantes = [];

function agregarParticipante() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        document.getElementById("lista").innerHTML += `<li>${nombre}</li>`;
        document.getElementById("nombre").value = "";
    }
}

function realizarSorteo() {
    if (participantes.length < 2) return;
    let asignaciones = {};
    let disponibles = [...participantes];
    for (let p of participantes) {
        let posibles = disponibles.filter(d => d !== p);
        if (posibles.length === 0) return;
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[p] = elegido;
        disponibles = disponibles.filter(d => d !== elegido);
    }
    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let p in asignaciones) {
        resultado.innerHTML += `<p>${p} -> ${asignaciones[p]}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("agregar").addEventListener("click", agregarParticipante);
    document.getElementById("sortear").addEventListener("click", realizarSorteo);
});
