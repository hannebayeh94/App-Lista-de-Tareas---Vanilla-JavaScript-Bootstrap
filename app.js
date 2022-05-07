window.addEventListener("load", function () {
  // referencia a los elementos del DOM
  const formCrear = document.getElementById("form-crear");
  const listaTareas = document.getElementById("lista-tareas");
  const inputCrear = document.getElementById("crear");
  const inputBuscar = document.getElementById("buscar");

  // procedimiento para el alta de una tarea
  formCrear.addEventListener("submit", (e) => {
    e.preventDefault();
    capturarValor();
  });

  const capturarValor = () => {
    const tareaNombre = inputCrear.value.trim();
    {
      tareaNombre.length
        ? mostrarTareaHtml(tareaNombre)
        : alert("Debes ingresar una tarea");
    }
  };

  const mostrarTareaHtml = (tarea) => {
    const liHtml = `<li class="list-group-item d-flex justify-content-between"><strong>${tarea}</strong> <i class="fas fa-minus-circle borrar"></i></li>`;
    listaTareas.innerHTML += liHtml;
  };

  inputBuscar.addEventListener("keyup", (e) => {
    const caracter = inputBuscar.value.trim();
    busqueda(caracter);
  });

  const busqueda = (cadena) => {
    let arreglo = Array.from(listaTareas.children);
    arreglo
      .filter(
        (texto) =>
          !texto.textContent.toLowerCase().includes(cadena.toLowerCase())
      )
      .forEach((cadenaFiltrada) => {
        cadenaFiltrada.classList.add("textoFiltrado");
      });

      arreglo
      .filter(
        (texto) =>
          texto.textContent.toLowerCase().includes(cadena.toLowerCase())
      )
      .forEach((cadenaFiltrada) => {
        cadenaFiltrada.classList.remove("textoFiltrado");
      });
  };

    // procedimiento para la eliminación de una tarea

    listaTareas.addEventListener("click", (e) => {
        console.log(e.target.classList.contains("borrar"));

        if (e.target.classList.contains("borrar")) {
            e.target.parentElement.remove();
        }

        inputBuscar.value = "";
    })


}); // fin de la funcion de busqueda
