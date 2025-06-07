document.addEventListener("DOMContentLoaded", function () {
    navegacionFija();
    crearGaleria();
});

function navegacionFija() {
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");

    window.addEventListener("scroll", function () {
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add("fijo");
        } else {
            barra.classList.remove("fijo");
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
    const cantidadImagenes = 16;

    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen galeria ${i}`;

        imagen.onclick = function () {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(indice) {
    const modal = document.createElement("DIV");
    modal.classList.add("modal");

    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${indice}.jpg`;
    imagen.alt = `Imagen galeria ${indice}`;

    const cerrarNodalBtn = document.createElement("BUTTON");
    cerrarNodalBtn.textContent = "X";
    cerrarNodalBtn.classList.add("btn-cerrar");
    cerrarNodalBtn.onclick = cerrarNodal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarNodalBtn);

    modal.onclick = cerrarNodal;

    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarNodal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector("body");
        body.classList.remove("overflow-hidden");
    }, 500);
}
