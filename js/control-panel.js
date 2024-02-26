//CONTROL PANEL
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-examen");
  const history = document.getElementById("history");
  const divhistory = document.getElementById("history-toggle");
  const botones = document.querySelectorAll(".boton");
  const btncolesterol = document.getElementById("btncolesterol");
  const btncolesterolldl = document.getElementById("btncolesterolldl");
  const btncolesteroltotal = document.getElementById("btncolesteroltotal");
  const btntrigliceridos = document.getElementById("btntrigliceridos");
  let graph = document.getElementById("grafica");
  let grafico = null;
  const tablahemograma = document.getElementById("tablahemograma");
  const tablareflipidico = document.getElementById("tablareflipidico");
  const tablaperfillipidico = document.getElementById("tablaperfillipidico");
  const tablaorina = document.getElementById("tablaorina");
  const tablaexamenorina = document.getElementById("tablaexamenorina");
  const tablaperfilbio = document.getElementById("tablaperfilbio");
  const tablacoagulacion = document.getElementById("tablacoagulacion");
  const infopersonal = document.getElementById("infopersonal");
  const guardarcambios = document.getElementById("guardarcambios");
  const nombreGrande = document.getElementById("nombreGrande");
  const familia = document.getElementById("familia");
  //obtencion de los p de información
  const nombrecompleto = document.getElementById("nombre-completo");
  const edad = document.getElementById("edad");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const salud = document.getElementById("salud");
  const direccion = document.getElementById("direccion");
  const ocupacion = document.getElementById("ocupacion");
  const inputnombre = document.getElementById("input-nombre");
  const inputedad = document.getElementById("input-edad");
  const inputemail = document.getElementById("input-email");
  const inputtelefono = document.getElementById("input-telefono");
  const inputsalud = document.getElementById("input-salud");
  const inputdireccion = document.getElementById("input-direccion");
  const inputocupacion = document.getElementById("input-ocupacion");
  const inputfamilia = document.getElementById("input-familia");

  infopersonal.addEventListener("click", () => {
    inputnombre.value = nombrecompleto.textContent;
    inputedad.value = edad.textContent;
    inputemail.value = email.textContent;
    inputtelefono.value = telefono.textContent;
    inputsalud.value = salud.textContent;
    inputdireccion.value = direccion.textContent;
    inputocupacion.value = ocupacion.textContent;
    inputfamilia.value = familia.textContent;
  });
  guardarcambios.addEventListener("click", () => {
    nombrecompleto.textContent = inputnombre.value;
    edad.textContent = inputedad.value;
    email.textContent = inputemail.value;
    telefono.textContent = inputtelefono.value;
    salud.textContent = inputsalud.value;
    direccion.textContent = inputdireccion.value;
    ocupacion.textContent = inputocupacion.value;
    nombreGrande.textContent = inputnombre.value;
    familia.textContent = inputfamilia.value;
  });

  history.addEventListener("click", () => {
    divhistory.classList.toggle("d-none");
    if (!divhistory.classList.contains("d-none")) {
      tablahemograma.classList.add("d-none");
      tablareflipidico.classList.add("d-none");
      tablaperfillipidico.classList.add("d-none");
      tablaorina.classList.add("d-none");
      tablaexamenorina.classList.add("d-none");
      tablaperfilbio.classList.add("d-none");
      tablacoagulacion.classList.add("d-none");
    }
  });

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtener el texto del botón que se presionó
      const textoBoton = this.innerText;
      if (!btncolesterol.classList.contains("d-none")) {
        ocultarbtn();
      }
      // Utilizar un switch para realizar acciones según el botón presionado
      switch (textoBoton) {
        case "Hemograma":
          if (
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none") ||
            !tablaorina.classList.contains("d-none") ||
            !tablaexamenorina.classList.contains("d-none") ||
            !tablaperfilbio.classList.contains("d-none") ||
            !tablacoagulacion.classList.contains("d-none")
          ) {
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
            tablaorina.classList.add("d-none");
            tablaexamenorina.classList.add("d-none");
            tablaperfilbio.classList.add("d-none");
            tablacoagulacion.classList.add("d-none");
          }
          header.innerText = "Examen de Hemograma";
          $(document).ready(function () {
            const labels = ["Recuento"];
            const colors = ["rgb(69,177,223)"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Recuento",
                  data: [5250],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Hemoglobina paciente masculino",
                  },
                },
                scales: {
                  y: {
                    min: 4750,
                    max: 5650,
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          tablahemograma.classList.remove("d-none");
          break;
        case "Perfíl Lipídico":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablaorina.classList.contains("d-none") ||
            !tablaexamenorina.classList.contains("d-none") ||
            !tablaperfilbio.classList.contains("d-none") ||
            !tablacoagulacion.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablaorina.classList.add("d-none");
            tablaexamenorina.classList.add("d-none");
            tablaperfilbio.classList.add("d-none");
            tablacoagulacion.classList.add("d-none");
          }

          header.innerText = "Examen de Perfíl Lipídico";

          btncolesterol.classList.remove("d-none");
          btncolesterolldl.classList.remove("d-none");
          btncolesteroltotal.classList.remove("d-none");
          btntrigliceridos.classList.remove("d-none");
          const labels = ["Septiempre", "Diciembre", "Febrero"];

          const dataset1 = {
            label: "Colesterol HDL",
            data: [47, 51, 56],
            borderColor: "rgba(248, 37, 37, 0.8)",
            fill: false,
            tension: 0.1,
          };

          const dataset2 = {
            label: "Colesterol LDL",
            data: [205, 190, 179],
            borderColor: "rgba(69, 248, 84, 0.8)",
            fill: false,
            tension: 0.1,
          };

          const dataset3 = {
            label: "Triglicéridos",
            data: [215, 200, 194],
            borderColor: "rgba(69, 140, 248, 0.8)",
            fill: false,
            tension: 0.1,
          };

          const dataset4 = {
            label: "Colesterol Total",
            data: [254, 241, 235],
            borderColor: "rgba(245, 40, 145, 0.8)",
            fill: false,
            tension: 0.1,
          };

          const data = {
            labels: labels,
            datasets: [dataset1, dataset2, dataset3, dataset4],
          };

          const config = {
            type: "line",
            data: data,
          };
          if (grafico == null) {
            grafico = new Chart(graph, config);
          } else {
            grafico.destroy();
            grafico = new Chart(graph, config);
          }

          btncolesterol.addEventListener("click", () => {
            const labels = ["Septiembre", "Diciembre", "Febrero"];
            const colors = ["#C4EFF3", "#7BE7F1", "#36E0F0"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Colesterol HDL en Sangre (mg/dL)",
                  data: [47, 51, 56],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Colesterol HDL Últimos 3 exámenes",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 30,
                    max: 65,
                    title: {
                      display: true,
                      text: "Valores Colesterol HDL en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          btncolesterolldl.addEventListener("click", () => {
            const labels = ["Septiembre", "Diciembre", "Febrero"];
            const colors = ["#F3230B", "#F3422E", "#F05341"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Colesterol LDL en Sangre (mg/dL)",
                  data: [205, 190, 179],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Colesterol LDL Últimos 3 exámenes",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 55,
                    max: 220,
                    title: {
                      display: true,
                      text: "Valores Colesterol LDL en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          btncolesteroltotal.addEventListener("click", () => {
            const labels = ["Septiembre", "Diciembre", "Febrero"];
            const colors = ["#f91207", "#f9362d", "#fc554d"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Colesterol Total en Sangre (mg/dL)",
                  data: [252, 241, 235],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Colesterol Total em sangre Últimos 3 exámenes",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 300,
                    max: 150,
                    title: {
                      display: true,
                      text: "Valores Colesterol Total en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          btntrigliceridos.addEventListener("click", () => {
            const labels = ["Septiembre", "Diciembre", "Febrero"];
            const colors = ["#F3230B", "#F3422E", "#F05341"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Triglicéridos en Sangre (mg/dL)",
                  data: [215, 200, 194],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Triglicéridos Últimos 3 exámenes",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 150,
                    max: 500,
                    title: {
                      display: true,
                      text: "Triglicéridos en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          tablareflipidico.classList.remove("d-none");
          tablaperfillipidico.classList.remove("d-none");
          break;
        // case "Colesterol":
        //   header.innerText = "Examen de Colesterol";
        //   break;
        // case "Triglicéridos":
        //   header.innerText = "Examen de Triglicéridos";
        //   break;
        case "Orina":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none") ||
            !tablaperfilbio.classList.contains("d-none") ||
            !tablacoagulacion.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
            tablaperfilbio.classList.add("d-none");
            tablacoagulacion.classList.add("d-none");
          }
          header.innerText = "Examen de Orina";
          tablaorina.classList.remove("d-none");
          tablaexamenorina.classList.remove("d-none");
          $(document).ready(function () {
            const labels = [
              "Septiembre 2023",
              "Diciembre 2023",
              "Febrero 2024",
            ];
            const colors = ["#62e6e8", "#62e6e8", "#62e6e8"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "pH",
                  data: [5.4, 5.5, 5.7],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Triglicéridos Últimos 3 exámenes",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 5,
                    max: 6,
                    title: {
                      display: true,
                      text: "Triglicéridos en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });
          break;

        case "Perfíl Bioquímico":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none") ||
            !tablacoagulacion.classList.contains("d-none") ||
            !tablaorina.classList.contains("d-none") ||
            !tablaexamenorina.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
            tablacoagulacion.classList.add("d-none");
            tablaorina.classList.add("d-none");
            tablaexamenorina.classList.add("d-none");
          }
          $(document).ready(function () {
            const labels = ["Septiembre", "Diciembre", "Febrero"];

            const Colesterol = {
              label: "Colesteriol Total",
              data: [10, 55, 60, 120],
              borderColor: "rgba(248, 37, 37, 0.8)",
              fill: false,
              tension: 0.1,
            };

            const Proteinas = {
              label: "Proteinas Totales",
              data: [5, 44, 55, 100],
              borderColor: "rgba(69, 248, 84, 0.8)",
              fill: false,
              tension: 0.1,
            };

            const data = {
              labels: labels,
              datasets: [Colesterol, Proteinas],
            };

            const config = {
              type: "line",
              data: data,
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          header.innerText = "Examen de Perfíl Bioquímico";
          tablaperfilbio.classList.remove("d-none");
          break;
        case "Coagulación":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none") ||
            !tablaorina.classList.contains("d-none") ||
            !tablaexamenorina.classList.contains("d-none") ||
            !tablaperfilbio.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
            tablaorina.classList.add("d-none");
            tablaexamenorina.classList.add("d-none");
            tablaperfilbio.classList.add("d-none");
          }
          $(document).ready(function () {
            const labels = ["Septiembre", "Diciembre", "Febrero"];
            const colors = ["#695ccb", "#695ccb", "#695ccb"];

            const data = {
              labels: labels,
              datasets: [
                {
                  label: "Colesterol HDL en Sangre (mg/dL)",
                  data: [12, 13, 14],
                  backgroundColor: colors,
                },
              ],
            };

            const config = {
              type: "bar",
              data: data,
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Tiempo de Protrombina",
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Meses",
                    },
                  },
                  y: {
                    min: 10,
                    max: 16,
                    title: {
                      display: true,
                      text: "Valores Colesterol HDL en Sangre (mg/dL)",
                    },
                  },
                },
              },
            };
            if (grafico == null) {
              grafico = new Chart(graph, config);
            } else {
              grafico.destroy();
              grafico = new Chart(graph, config);
            }
          });

          header.innerText = "Examen de Coagulación";
          tablacoagulacion.classList.remove("d-none");
          break;

        default:
          console.log("Botón no reconocido");
      }
    });
  });
});
function ocultarbtn() {
  btncolesterol.classList.add("d-none");
  btncolesterolldl.classList.add("d-none");
  btncolesteroltotal.classList.add("d-none");
  btntrigliceridos.classList.add("d-none");
}
