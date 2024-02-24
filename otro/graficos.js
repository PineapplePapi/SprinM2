// Hemograma
document.addEventListener('DOMContentLoaded', function() {
    var datos = {
        labels: ['Febrero', 'Marzo', 'Abril', 'Mayo','Junio'],
        datasets: [
            {
                label: 'Referencias',
                data: [5, 5, 5, 5, 5],
                borderColor: 'blue',
                backgroundColor: 'transparent',
                borderWidth: 2,
            },
            {
                label: 'Resultados',
                data: [3.1, 6.8, 2.6, 4.2, 3.1],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 2,
            }
        ]
    };

    var config = {
        type: 'line',
        data: datos,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var graficoLineas = new Chart(document.getElementById('resultadohemograma'), config);
});
//Orina
document.addEventListener('DOMContentLoaded', function() {
    var datos = {
        labels: ['Diciembre', 'Enero','Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                label: 'Referencias',
                data: [7, 7, 7, 7, 7],
                borderColor: 'blue',
                backgroundColor: 'transparent',
                borderWidth: 2,
            },
            {
                label: 'Resultados',
                data: [5.4, 3.2, 10.8, 4.2, 12.3],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 2,
            }
        ]
    };

    var config = {
        type: 'line',
        data: datos,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    var graficoLineas = new Chart(document.getElementById('resultadoorina'), config);
});

// Perfil Bioquimico
//Primer gráfico
var data1 = {
labels: ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
datasets: [
    {
    label: 'mg/dL',
    data: [44, 115, 80, 50, 123],
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
    }
]
};

var referenceValue1 = 150;

var options1 = {
scales: {
    y: {
    beginAtZero: true,
    ticks: {
        stepSize: 50
    }
    }
},
plugins: {
    annotation: {
    annotations: [
        {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y',
        value: referenceValue1,
        borderColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 2,
        label: {
            enabled: true,
            content: 'Valor de Referencia'
        }
        }
    ]
    }
}
};


var ctx1 = document.getElementById('barChart1').getContext('2d');
var barChart1 = new Chart(ctx1, {
type: 'bar',
data: data1,
options: options1
});

// Datos del segundo gráfico
var data2 = {
labels: ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
datasets: [
    {
    label: 'mg/dL',
    data: [0.3, 2.1, 1.6, 0.45, 0.2],
    backgroundColor: 'rgba(255, 99, 132, 0.6)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
    }
]
};

// Valor de referencia para el segundo gráfico
var referenceValue2 = 120;

// Opciones del segundo gráfico
var options2 = {
scales: {
    y: {
    beginAtZero: true,
    ticks: {
        stepSize: 50
    }
    }
},
plugins: {
    annotation: {
    annotations: [
        {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y',
        value: referenceValue2,
        borderColor: 'rgba(54, 162, 235, 0.8)',
        borderWidth: 2,
        label: {
            enabled: true,
            content: 'Valor de Referencia'
        }
        }
    ]
    }
}
};

// Crear el segundo gráfico de barras
var ctx2 = document.getElementById('barChart2').getContext('2d');
var barChart2 = new Chart(ctx2, {
type: 'bar',
data: data2,
options: options2
});
