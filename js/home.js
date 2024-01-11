// Actualizamos el total de gastos cada segundo
const total = document.querySelector(".gastoTotal");
function actualizarTotal() {
  fetch("/obtenerTotal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      total.innerHTML = data.total + " €";
    })
    .catch((err) => console.log(err));
}
actualizarTotal();
setInterval(actualizarTotal, 1000);

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

// Mandamos una solicitud al servidor para que añada los gastos
const mensaje = document.getElementById("mensaje");
formularioAñadir.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch('/añadirGasto', {
    method: 'POST',
    body: new FormData(formularioAñadir)
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.error) {
        mensaje.innerHTML = data.error;
        mensaje.classList.add("errores");
      } else {
        mensaje.innerHTML = data.exito;
        mensaje.classList.add("exito");
        actualizarTotal();
        setTimeout(() => {
          mensaje.innerHTML = "";
          mensaje.classList.remove("exito");
        }, 2000);
        formularioAñadir.reset();
        document.querySelectorAll(".pinchado").forEach((pinchado) => {
          pinchado.classList.remove("pinchado");
        });
        document.querySelector(".resultadoIcono").innerHTML = "";
        document.querySelector(".resultadoIcono").style.backgroundColor = "";
      }
    })
  });
