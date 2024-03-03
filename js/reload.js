document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('enviarBtn').addEventListener('click', function(event) {
        event.preventDefault(); 


        document.getElementById('miFormulario').reset();

        console.log('Formulario enviado y recargado sin recargar la página');
    });
});
