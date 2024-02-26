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
          break;

        case "Perfíl Bioquímico":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none") ||
            !tablacoagulacion.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
            tablacoagulacion.classList.add("d-none");
          }

          header.innerText = "Examen de Perfíl Bioquímico";

          tablaperfilbio.classList.remove("d-none");
          break;
        case "Coagulación":
          if (
            !tablahemograma.classList.contains("d-none") ||
            !tablareflipidico.classList.contains("d-none") ||
            !tablaperfillipidico.classList.contains("d-none")
          ) {
            tablahemograma.classList.add("d-none");
            tablareflipidico.classList.add("d-none");
            tablaperfillipidico.classList.add("d-none");
          }
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
