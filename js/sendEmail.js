document.addEventListener('DOMContentLoaded', function() {
  const $form = document.querySelector('#miFormulario'); // Asegúrate de que este selector coincida con el id del formulario
  $form.addEventListener('submit', handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(this);

    const response = await fetch('https://formspree.io/f/mnqedknl', {
      method: 'POST',
      body: fd,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      this.reset();
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar el mensaje',
        text: 'Por favor, intenta de nuevo más tarde.',
        confirmButtonText: 'Cerrar'
      });
    }
  }
});
