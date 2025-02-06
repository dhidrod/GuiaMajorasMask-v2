// Función para inicializar tooltips
function initializeTooltips() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Cargar contenido al cabo de 2 segundos
setTimeout(initializeTooltips, 200);