function validarFormulario() {
    var campos = ['nombre', 'apellido', 'direccion', 'empresa', 'codigo', 'ciudad', 'pais', 'telefono', 'correo'];
    for (var i = 0; i < campos.length; i++) {
        var valor = document.getElementById(campos[i]).value;
        if(valor === "") {
            iziToast.error({
                title: 'Error',
                message: 'Todos los campos son obligatorios',
                position: 'topRight'
            });
            return false; 
        }
    }

    iziToast.show({
        title: 'Gracias Por Su Mensaje',
        message: 'Le responderemos los mas pronto posible!',
        position: 'topCenter', 
        color: '#565C70', 
        timeout: 5000, 
        progressBarColor: 'rgb(0, 255, 184)', 
        image: '../assets/ANDRADE_MKTPLAN_BRANDING-02.png', 
        imageWidth: 70, 
        layout: 2, 
        close: true, 
        titleColor: 'white',
        messageColor: 'white',
        iconColor: 'white',
    });

    return true; 
}
