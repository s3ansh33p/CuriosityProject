Chart.defaults.global.defaultFontFamily = "Lato";

const ctxH1 = document.getElementById("ctx-panel-2");
const graphBG = '#198754';
const horizontalBarChart = new Chart(ctxH1, {
   type: 'horizontalBar',
   data: {
      labels: ["Critical Thinking","Creativity","Commitment","Communication","Collaboration","Citizenship","Continuous Improvement"],
      datasets: [{
         data: [2, 4, 6, 8, 13, 12, 14],
         backgroundColor: [graphBG, graphBG, graphBG, graphBG, graphBG, graphBG, graphBG], 
      }]
   },
   options: {
      tooltips: {
        enabled: true
      },
      responsive: true,
      legend: {
         display: false,
         position: 'bottom',
         fullWidth: true,
         labels: {
           boxWidth: 10,
           padding: 50
         }
      },
      scales: {
         yAxes: [{
           gridLines: {
             display: true,
             drawTicks: true,
             drawOnChartArea: false
           },
           ticks: {
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11
           }
            
         }],
         xAxes: [{
             gridLines: {
               display: true,
               drawTicks: false,
               tickMarkLength: 5,
               drawBorder: false
             },
           ticks: {
             padding: 5,
             beginAtZero: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11,
             max: 17,
             stepSize: 1
            //  callback: function(label, index, labels) {
            //   return label;
            //  }
               
           },
            scaleLabel: {
              display: true,
              padding: 10,
              fontFamily: 'Lato',
              fontColor: '#555759',
              fontSize: 16,
              fontStyle: 700,
              labelString: 'Average Rating'
            },
           
         }]
      }
   }
});
