
//sass css/scss/style.scss css/style.css 
/*
const loadPageFragment = (url, elementId) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
};
loadPageFragment("header.html", "header");
loadPageFragment("footer.html", "footer");
*/
// cargarEncPie.js - Versión corregida y verificada
document.addEventListener('DOMContentLoaded', () => {
  const loadFragment = async (url, elementId) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
      return true;
    } catch (error) {
      console.error(`Error cargando ${url}:`, error);
      return false;
    }
  };

  const initializeContent = async () => {
    // 1. Cargar header y footer
    await Promise.all([
      loadFragment('header.html', 'header'),
      loadFragment('footer.html', 'footer')
    ]);

    // 2. Inicializar tooltips de Bootstrap
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(t => new bootstrap.Tooltip(t));

    // 3. Manejar carga de imágenes
    const handleImageLoad = (img) => {
      img.style.transform = 'scale(1)';
      img.style.filter = 'blur(0)';
    };

    document.querySelectorAll('img').forEach(img => {
      img.style.transition = 'all 0.6s ease';
      
      if (img.complete) {
        handleImageLoad(img);
      } else {
        img.style.transform = 'scale(0.95)';
        img.style.filter = 'blur(5px)';
        img.addEventListener('load', () => handleImageLoad(img));
      }
    });
  };

  initializeContent();
});