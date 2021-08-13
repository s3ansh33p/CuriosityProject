
function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

let classData;

$.get("/api/students", function(data, status){
    console.log("Status: " + status);
    classData = data;
    const container = document.getElementById("ajax-students");
    for (let i=0; i<data.students.length; i++) {
        container.innerHTML += `<div class="d-flex align-items-center mb-3">
        <div class="me-3">
          <img class="rounded-circle" src="public/static/author.png" width="75px">
        </div>
        <div>
          <span>
            <div class="text-decoration-none">${data.students[i].firstname + ' ' + data.students[i].surname}</div>
            <div class="small text-gray-500 text-decoration-none">Average Rating: ${number_format(data.students[i].c.reduce((a, b) => a + b) / data.students[i].c.length, 2)}</div>
          </span>
        </div>
      </div>`;
    }

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontColor = '#858796';

    classAverages = ['n/a','n/a','n/a','n/a','n/a','n/a','n/a'];
    //Calculate Class Averages
    for (i=0; i<7; i++) {
        classAverageScore = 0;
        //Each Student
        for (j=0; j<classData.students.length; j++) {
            classAverageScore += classData.students[j].c[i]
        }
        classAverageScore /= classData.students.length
        classAverageScore = Math.round(classAverageScore * 100)/100;
        classAverages[i] = classAverageScore.toString();
    }

    // Polar Area Chart
    var ctx = document.getElementById("ctx-panel");
    var myLineChart = new Chart(ctx, {
    responsive: true,
    type: 'polarArea',
    data: {
        labels: Utils7C.categories,
        datasets: [{
        label: ["Rating"],
        lineTension: 0.3,
        backgroundColor: Utils7C.colors,
        data: classAverages,
        }],
    },
    options: {
        title: {
        display: true,
        text: 'Class averages across all 7Cs',
    },
        maintainAspectRatio: false,
        layout: {
        padding: {
            left: 25,
            right: 25,
            top: 5,
            bottom: 0
        }
        },
        legend: {
        display: false
        },
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: true,
        mode: 'index',
        caretPadding: 10,
        }
    }
    });

});