//CONTROL PANEL
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-examen");
  const history = document.getElementById("history");
  const divhistory = document.getElementById("history-toggle");
  const botones = document.querySelectorAll(".boton");

  history.addEventListener("click", () => {
    divhistory.classList.toggle("d-none");
  });

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtener el texto del botón que se presionó
      const textoBoton = this.innerText;
      // Utilizar un switch para realizar acciones según el botón presionado
      switch (textoBoton) {
        case "Hemograma":
          header.innerText = "Examen de Hemograma";
          break;
        case "Perfíl Lipídico":
          header.innerText = "Examen de Perfíl Lipídico";
          break;
        case "Colesterol":
          header.innerText = "Examen de Colesterol";
          break;
        case "Triglicéridos":
          header.innerText = "Examen de Triglicéridos";
          break;
        case "Orina":
          header.innerText = "Examen de Orina";
          break;
        case "Perfíl Bioquímico":
          header.innerText = "Examen de Perfíl Bioquímico";
          break;
        case "Coagulación":
          header.innerText = "Examen de Coagulación";
          break;

        // Agregar más casos según sea necesario
        default:
          console.log("Botón no reconocido");
      }
    });
  });
});
