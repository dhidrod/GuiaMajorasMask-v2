// Datos de las misiones
const misiones = [
  {
    id: 1,
    nombre: "Señora Mayor de la Tienda de Bombas",
    imagen: "img/icon/ancianabomba.png",
    hora: "Noche del Primer Día (12:00 AM)",
    lugar: "Ciudad Reloj (Calle Norte)",
    condicion: "Estar en la calle a medianoche",
    accion: "Detener al ladrón que intenta robar su bolsa",
    recompensa: "Careta Explosiva| Gran Bolsa de Bombas a la venta en la tienda de bombas",
  },
  {
    id: 2,
    nombre: "Persona en el baño",
    imagen: "img/icon/wc_person.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Poder entrar en la Posada del Puchero por la noche",
    accion: "Entregar papel al personaje (Sirve cualquier objeto de tipo 'papel')",
    recompensa: "Pieza de Corazón",
  },
  {
    id: 3,
    nombre: "Guru Guru",
    imagen: "img/icon/guruguru.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Tener un objeto de papel",
    accion: "Entregar papel al personaje",
    recompensa: "Pieza de Corazón",
  },
  {
    id: 4,
    nombre: "Kamaro",
    imagen: "img/icon/kamaro.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Tener un objeto de papel",
    accion: "Entregar papel al personaje",
    recompensa: "Pieza de Corazón",
  },
  {
    id: 5,
    nombre: "Abuela de Anju",
    imagen: "img/icon/grandmother.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Tener un objeto de papel",
    accion: "Entregar papel al personaje",
    recompensa: "Pieza de Corazón",
  },
  {
    id: 6,
    nombre: "Señora Mayor de la Tienda de Bombas",
    imagen: "img/icon/ancianabomba.png",
    hora: "Noche del Primer Día (12:00 AM)",
    lugar: "Ciudad Reloj (Calle Norte)",
    condicion: "Estar en la calle a medianoche",
    accion: "Detener al ladrón que intenta robar su bolsa",
    recompensa: "Careta Explosiva| Gran Bolsa de Bombas a la venta en la tienda de bombas",
  },
  {
    id: 7,
    nombre: "Persona en el baño",
    imagen: "img/icon/wc_person.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Poder entrar en la Posada del Puchero por la noche",
    accion: "Entregar papel al personaje (Sirve cualquier objeto de tipo 'papel')",
    recompensa: "Pieza de Corazón",
  },
  {
    id: 8,
    nombre: "Guru Guru",
    imagen: "img/icon/guruguru.png",
    hora: "12:00 AM - 6:00 AM (Cualquier día)",
    lugar: "Posada del Puchero (Baño, planta baja)",
    condicion: "Tener un objeto de papel",
    accion: "Entregar papel al personaje",
    recompensa: "Pieza de Corazón",
  },
];

// Configuración
const MISIONES_POR_PAGINA = 4; // 2 filas de 2 tarjetas

// Generar el HTML de una misión
function generarMisionHTML(mision, numeroMision, paginaActual) {
  return `
      <div class="col-md-6">
        <div class="mission-card h-100">
          <div class="card-header mission-header">
            <div class="character-portrait">
              <img src="${mision.imagen}" alt="${
    mision.nombre
  }" class="img-fluid">
            </div>
            <h3 class="mission-title">${mision.nombre}</h3>
          </div>
          <div class="card-body">
            <div class="mission-meta">
              <div class="meta-item" data-bs-toggle="popover" title="Hora" data-bs-content="${
                mision.hora
              }">
                <i class="bi bi-clock"></i> ${mision.hora.split(" ")[0]}
              </div>
              <div class="meta-item" data-bs-toggle="popover" title="Lugar" data-bs-content="${
                mision.lugar
              }">
                <i class="bi bi-geo-alt"></i> ${mision.lugar
                  .split("(")[0]
                  .trim()}
              </div>
            </div>
            <div class="mission-details">
              <div class="detail-item condition">
                <span class="detail-label">Condición:</span>
                ${mision.condicion}
              </div>
              <div class="detail-item action">
                <span class="detail-label">Acción:</span>
                ${mision.accion}
              </div>
              <div class="detail-item reward">
                <span class="detail-label">Recompensa:</span>
                ${mision.recompensa}
              </div>
            </div>
          </div>
          <div class="card-footer mission-footer">
            <small class="text-muted">Página ${paginaActual} - Misión #${numeroMision}</small>
          </div>
        </div>
      </div>
    `;
}

// Generar páginas
function generarPaginas() {
  const totalPaginas = Math.ceil(misiones.length / MISIONES_POR_PAGINA);
  const paginacion = document.getElementById("pagination");
  const contenedor = document.getElementById("pages-container");

  // Generar páginas
  contenedor.innerHTML = "";
  for (let i = 0; i < totalPaginas; i++) {
    const inicio = i * MISIONES_POR_PAGINA;
    const fin = inicio + MISIONES_POR_PAGINA;
    const misionesPagina = misiones.slice(inicio, fin);

    const paginaHTML = `
        <div class="book-page ${i === 0 ? "active" : ""}" data-page="${i + 1}">
          <div class="row g-4">
            ${misionesPagina
              .map((m, index) =>
                generarMisionHTML(m, inicio + index + 1, i + 1)
              )
              .join("")}
          </div>
        </div>
      `;

    contenedor.insertAdjacentHTML("beforeend", paginaHTML);
  }

  // Generar paginación
  paginacion.innerHTML = `
      <li class="page-item disabled">
        <a class="page-link book-page-link prev" href="#" aria-label="Anterior">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      ${Array.from(
        { length: totalPaginas },
        (_, i) => `
        <li class="page-item ${i === 0 ? "active" : ""}">
          <a class="page-link book-page-link" href="#" data-page="${i + 1}">${
          i + 1
        }</a>
        </li>
      `
      ).join("")}
      <li class="page-item">
        <a class="page-link book-page-link next" href="#" aria-label="Siguiente">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    `;
}

// Manejar cambio de página
function manejarPaginacion() {
    document.querySelector('#pagination').addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.closest('.book-page-link');
      if (!target) return;
  
      const paginas = document.querySelectorAll('.book-page');
      const paginaActual = parseInt(document.querySelector('.book-page.active').dataset.page);
      const totalPaginas = paginas.length;
      
      let nuevaPagina = paginaActual;
  
      if (target.classList.contains('next')) {
        nuevaPagina = paginaActual + 1;
      } else if (target.classList.contains('prev')) {
        nuevaPagina = paginaActual - 1;
      } else {
        nuevaPagina = parseInt(target.dataset.page);
      }
  
      if (nuevaPagina < 1 || nuevaPagina > totalPaginas) return;
  
      // Actualizar páginas
      paginas.forEach(pagina => {
        pagina.classList.remove('active');
        if (parseInt(pagina.dataset.page) === nuevaPagina) {
          pagina.classList.add('active');
        }
      });
  
      // Actualizar paginación
      document.querySelectorAll('#pagination .page-item').forEach(item => {
        item.classList.remove('active');
        const pageLink = item.querySelector('.book-page-link');
        if (pageLink && parseInt(pageLink.dataset.page) === nuevaPagina) {
          item.classList.add('active');
        }
      });
  
      // Actualizar botones de navegación
      document.querySelector('.prev').parentElement.classList.toggle('disabled', nuevaPagina === 1);
      document.querySelector('.next').parentElement.classList.toggle('disabled', nuevaPagina === totalPaginas);
    });
  }

function cambiarPagina(nuevaPagina) {
  const paginas = document.querySelectorAll(".book-page");
  const totalPaginas = paginas.length;

  if (nuevaPagina < 1 || nuevaPagina > totalPaginas) return;

  // Actualizar páginas
  paginas.forEach((pagina) => {
    pagina.classList.remove("active");
    if (parseInt(pagina.dataset.page) === nuevaPagina) {
      pagina.classList.add("active");
    }
  });

  // Actualizar paginación
  document.querySelectorAll("#pagination .page-item").forEach((item, index) => {
    item.classList.remove("active");
    if (index === nuevaPagina) {
      item.classList.add("active");
    }
  });

  // Actualizar botones anterior/siguiente
  document
    .querySelector(".prev")
    .parentElement.classList.toggle("disabled", nuevaPagina === 1);
  document
    .querySelector(".next")
    .parentElement.classList.toggle("disabled", nuevaPagina === totalPaginas);
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  generarPaginas();
  manejarPaginacion();
  cambiarPagina(1); // Mostrar primera página
});


