//CONTROL PANEL
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-examen");
  const history = document.getElementById("history");
  const divhistory = document.getElementById("history-toggle");
  const botones = document.querySelectorAll(".boton");
  const btncolesterol = document.getElementById("btncolesterol")
  const btncolesterol2 = document.getElementById("btncolesterol2")       
  const btncolesterol3 = document.getElementById("btncolesterol3") 
  const btntrigliceridos = document.getElementById("btntrigliceridos")
  let graph = document.getElementById("grafica");
  let grafico = null;
  history.addEventListener("click", () => {
    divhistory.classList.toggle("d-none");
  });

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtener el texto del botón que se presionó
      const textoBoton = this.innerText;
      if (!btncolesterol.classList.contains("d-none")){
        ocultarbtn();
      }
      // Utilizar un switch para realizar acciones según el botón presionado
      switch (textoBoton) {
        case "Hemograma":
          header.innerText = "Examen de Hemograma";
          $(document).ready(function(){

            const labels = ['Recuento']
            const colors = ['rgb(69,177,223)'];
            
          
            
            const data = {
                labels: labels,
                datasets: [{
                    label:"Recuento",
                    data: [5250],
                    backgroundColor: colors
                }]
            };
            
            const config = {
                type: 'bar',
                data: data,
                options: {
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'Hemoglobina paciente masculino'
                    }
                  },
                  scales: {
                    y: {
                      min: 4750,
                      max: 5650,
                    }
                  }
                },
              };
              if (grafico == null){
                grafico = new Chart(graph, config)
              }
              else{
                grafico.destroy()
                grafico = new Chart(graph, config)
              }
            
            
        });
          break;
        case "Perfíl Lipídico":
          header.innerText = "Examen de Perfíl Lipídico";

          $("#perfil-lipidico-table").removeClass("d-none");
          btncolesterol.classList.remove("d-none")
          btncolesterol2.classList.remove("d-none")
          btncolesterol3.classList.remove("d-none")
          btntrigliceridos.classList.remove("d-none")
          
          btncolesterol.addEventListener("click", ()=>{
            const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#C4EFF3','#7BE7F1','#36E0F0'];
  
  const data = {
      labels: labels,
      datasets: [{
          label:"Colesterol HDL en Sangre (mg/dL)",
          data: [47, 51, 56],
          backgroundColor: colors
      }]
  };
  
  const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Colesterol HDL Últimos 3 exámenes'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            min: 30,
            max: 65,
            title: {
              display: true,
              text: 'Valores Colesterol HDL en Sangre (mg/dL)'
            }
          },
        }
      },
    };
    if (grafico == null){
      grafico = new Chart(graph, config)
    }
    else{
      grafico.destroy()
      grafico = new Chart(graph, config)
    }
          })
          btncolesterol2.addEventListener("click", ()=>{
            const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#F3230B','#F3422E','#F05341'];
  
  const data = {
      labels: labels,
      datasets: [{
          label:"Colesterol LDL en Sangre (mg/dL)",
          data: [205, 190, 179],
          backgroundColor: colors
      }]
  };
  
  const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Colesterol LDL Últimos 3 exámenes'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            min: 55,
            max: 220,
            title: {
              display: true,
              text: 'Valores Colesterol LDL en Sangre (mg/dL)'
            }
          },
        }
      },
    };
    if (grafico == null){
      grafico = new Chart(graph, config)
    }
    else{
      grafico.destroy()
      grafico = new Chart(graph, config)
    }

          })


  const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#C4EFF3','#7BE7F1','#36E0F0'];
  
  
  
  const data = {
      labels: labels,
      datasets: [{
          label:"Colesterol HDL en Sangre (mg/dL)",
          data: [47, 51, 56],
          backgroundColor: colors
      }]
  };
  
  const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Colesterol HDL Últimos 3 exámenes'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses'
            }
          },
          y: {
            min: 30,
            max: 65,
            title: {
              display: true,
              text: 'Valores Colesterol HDL en Sangre (mg/dL)'
            }
          },
        }
      },
    };
    if (grafico == null){
      grafico = new Chart(graph, config)
    }
    else{
      grafico.destroy()
      grafico = new Chart(graph, config)
    }
  




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
function ocultarbtn(){
  btncolesterol.classList.add("d-none")
  btncolesterol2.classList.add("d-none")
  btncolesterol3.classList.add("d-none")
  btntrigliceridos.classList.add("d-none")
}