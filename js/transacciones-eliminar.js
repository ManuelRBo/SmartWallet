const expresionRegular = new RegExp('\\?eliminar=\\d+');
const url = window.location.href;
const resultado = expresionRegular.test(url);

if(resultado){
    const iconoTitulo = document.getElementsByClassName('icono-titulo');

    for(let i = 0; i < iconoTitulo.length; i++){
        iconoTitulo[i].innerHTML += '<div class="eliminar">X</div>';
    }
}