document.addEventListener("DOMContentLoaded", function () {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
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
        imagen.loading = "lazy";
        imagen.width = 300;
        imagen.height = 200;
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

function resaltarEnlace() {
    document.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navegacion-principal a");
        let actual = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                actual = section.id;
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("activo");
            if (link.getAttribute("href") === `#${actual}`) {
                link.classList.add("activo");
            }
        });
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion-principal a");

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const seccion = document.querySelector(
                e.target.attributes.href.value
            );
            seccion.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
