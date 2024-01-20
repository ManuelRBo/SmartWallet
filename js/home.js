// Mostramos el formulario
const botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", () => {
  document.querySelector(".opcionAñadir").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
  document.documentElement.scrollTop = 0;
  document.body.style.overflow = "hidden";

  // Hacemos que los colores y los iconos sean seleccionables y sepan cual han seleccionado
  const formularioAñadir = document.getElementById("formularioAñadir");
  const resultado = document.querySelector(".resultadoIcono");
  const fondoColores = formularioAñadir.elements.fondoColores;
  const icono = formularioAñadir.elements.icono;
  fondoColores.forEach((color) => {
    color.addEventListener("click", () => {
      fondoColores.forEach((color) => {
        if (color.classList.contains("pinchado")) {
          color.classList.remove("pinchado");
        }
      });
      color.classList.add("pinchado");
      resultado.style.backgroundColor = color.value;
      document.getElementById("fondoColoresInput").value = color.value;
    });
  });
  icono.forEach((icon) => {
    icon.addEventListener("click", () => {
      icono.forEach((icon) => {
        if (icon.classList.contains("pinchado")) {
          icon.classList.remove("pinchado");
        }
      });
      icon.classList.add("pinchado");
      resultado.innerHTML = `<img src="../img/iconosProductos/${icon.value}.svg"alt="${icon.value}">`;
      document.getElementById("iconoInput").value = icon.value;
    });
  });

  formularioAñadir.addEventListener("change", () => {
    if (formularioAñadir.elements.tipo.value == "ingreso") {
      document.getElementById("ahorrar").removeAttribute("style");
    } else if (formularioAñadir.elements.tipo.value == "gasto") {
      document.getElementById("ahorrar").style.display = "none";
    }
  });
});

// Cerramos el formulario al pinchar en el boton de flecha atras
const botonCerrar = document.querySelector(".cerrar");
botonCerrar.addEventListener("click", () => {
  document.querySelector(".opcionAñadir").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
  mensaje.style.display = "none";
  formularioAñadir.reset();
});

document.getElementById("cerrarSesion").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
});

const mensaje = document.querySelector("#mensaje");
formularioAñadir.addEventListener("submit", (e) => {
  e.preventDefault();
  let vacio = false;
  const array = [
    formularioAñadir.elements.tipo.value,
    formularioAñadir.elements.titulo.value,
    formularioAñadir.elements.fecha.value,
    formularioAñadir.elements.importe.value,
    formularioAñadir.elements.categoria.value,
    formularioAñadir.elements.fondoColoresInput.value,
    formularioAñadir.elements.iconoInput.value,
  ];

  array.forEach((element) => {
    if (element == "") {
      vacio = true;
    } else {
      vacio = false;
    }
  });

  if (vacio) {
    mensaje.innerHTML = "Rellena todos los campos";
    mensaje.classList.add("errores");
    mensaje.style.display = "block";
  } else {
    mensaje.innerHTML = "Añadido correctamente";
    mensaje.classList.add("exito");
    mensaje.style.display = "block";
    formularioAñadir.reset();
    const fondoColores = formularioAñadir.elements.fondoColores;
    const icono = formularioAñadir.elements.icono;
    fondoColores.forEach((color) => {
      color.classList.remove("pinchado");
    });
    icono.forEach((icon) => {
      icon.classList.remove("pinchado");
    });
  }
});


const avatar = document.getElementById('avatar');
const avatares = document.querySelector('.avatares');
avatar.addEventListener('click', () =>{
  if(avatares.style.display === 'grid'){
    avatares.style.display = 'none'
  }else{
    avatares.style.display = 'grid'
  }
})

const avataresImg = avatares.querySelectorAll('img')

avataresImg.forEach((element) =>{
  element.addEventListener('click', () =>{
    avatar.src = `img/avatares/${element.alt}.svg`;
  })
})
