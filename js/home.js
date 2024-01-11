
// Mostramos el formulario
const botonAñadir = document.getElementById("botonAñadir");
botonAñadir.addEventListener("click", () => {
  document.querySelector(".opcionAñadir").style.display = "flex";
  document.getElementById("overlay").style.display = "block";

  // HAcemos que los colores y los iconos sean seleccionables y sepan cual han seleccionado
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
    if(formularioAñadir.elements.tipo.value == "ingreso"){
      document.getElementById("ahorrar").removeAttribute("style");
    }else if(formularioAñadir.elements.tipo.value == "gasto"){
      document.getElementById("ahorrar").style.display = "none";
    }
  });
});


// Cerramos el formulario al pinchar en el boton de flecha atras
const botonCerrar = document.querySelector(".cerrar");
botonCerrar.addEventListener("click", () => {
  document.querySelector(".opcionAñadir").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  formularioAñadir.reset();
});
