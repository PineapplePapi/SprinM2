$(document).ready(function(){

    const labels = ['Recuento']
    const colors = ['rgb(69,177,223)'];
    
    const graph = document.querySelector("#grafica");
    
    const data = {
        labels: labels,
        datasets: [{
            label:"Recuento",
            data: [4850],
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
              text: 'Min and Max Settings'
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
    new Chart(graph, config)

});

// // // // -------------------------------------Perfil Liídico
// -------------------------------Colesterol HDL

$(document).ready(function(){

  const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#C4EFF3','#7BE7F1','#36E0F0'];
  
  const graph = document.querySelector("#graficaplipidico");
  
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
  new Chart(graph, config)

});


// // // // -------------------------------------Perfil Liídico
// -------------------------------Colesterol LDL

$(document).ready(function(){

  const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#F3230B','#F3422E','#F05341'];
  
  const graph = document.querySelector("#graficaplipidico2");
  
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
  new Chart(graph, config)

});

// // // // -------------------------------------Perfil Liídico
// -------------------------------Triglicéridos

$(document).ready(function(){

  const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#F3230B','#F3422E','#F05341'];
  
  const graph = document.querySelector("#graficaplipidico3");
  
  const data = {
      labels: labels,
      datasets: [{
          label:"Triglicéridos en Sangre (mg/dL)",
          data: [215, 200, 194],
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
            text: 'Triglicéridos Últimos 3 exámenes'
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
            min: 150,
            max: 500,
            title: {
              display: true,
              text: 'Triglicéridos en Sangre (mg/dL)'
            }
          },
        }
      },
    };
  new Chart(graph, config)

});

// // // // -------------------------------------Perfil Liídico
// -------------------------------Colesterol Total

$(document).ready(function(){

  const labels = ['Septiembre','Diciembre','Febrero']
  const colors = ['#F3230B','#F3422E','#F05341'];
  
  const graph = document.querySelector("#graficaplipidico4");
  
  const data = {
      labels: labels,
      datasets: [{
          label:"Colesterol Total en Sangre (mg/dL)",
          data: [252, 241, 235],
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
            text: 'Colesterol Total Últimos 3 exámenes'
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
            min: 150,
            max: 500,
            title: {
              display: true,
              text: 'Colesterol Total en Sangre (mg/dL)'
            }
          },
        }
      },
    };
  new Chart(graph, config)

});