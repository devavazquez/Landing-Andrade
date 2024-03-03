document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const formularios = document.querySelectorAll('.formulario-container, .nombre-container');
  
    window.addEventListener("scroll", function() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
  
      if (st > lastScrollTop){
        // Bajando el scroll
        formularios.forEach(formulario => formulario.classList.add('formulario-visible'));
      } else 
      
      lastScrollTop = st <= 0 ? 0 : st; // Para navegadores móviles
    }, false);
  });