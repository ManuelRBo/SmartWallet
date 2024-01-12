const formulario = document.getElementById('formularioAhorros');
const categoria = formulario.categoria;

categoria.forEach(element => {
    element.addEventListener('click', function() {
        categoria.forEach(element => {
            element.classList.remove('activo');
        });
        element.classList.add('activo');
    });
});

const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let vacio = false;
    let seleccionado = false;
    
    Array.from(formulario.elements).forEach(element => {
        if (element.value == '') {
            vacio = true;
        }

        if (element.classList.contains('categorias')) {
            if (element.classList.contains('activo')) {
                seleccionado = true;
            }
        }
    });

    if (vacio || !seleccionado) {
        mensaje.innerHTML = 'Rellena todos los campos';
        mensaje.classList.add('errores');
    } else {
        mensaje.innerHTML = 'Añadido correctamente';
        mensaje.classList.add('exito');
        mensaje.style.display = 'block';
        formulario.reset();
        categoria.forEach(element => {
            element.classList.remove('activo');
        });
    }
});


if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
    const inputs = document.querySelector('.placeholderInput');
    inputs.style.display = 'block';
}