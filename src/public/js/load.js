let classData;

$.get("/api/students", function(data, status){
    Utils7C.info("Load student data: " + status);
    classData = data;
    const container = document.getElementById("ajax-students");
    for (let i=0; i<data.students.length; i++) {
        container.innerHTML += `<div class="row">
            <div class="col-12 d-flex justify-content-between w-100 mb-3">
                <div class="d-flex align-items-center">    
                    <div class="me-3">
                        <img class="rounded-circle" src="public/static/author.png" width="75px">
                    </div>
                    <div>
                        <span>
                            <div class="text-decoration-none">${data.students[i].firstname + ' ' + data.students[i].surname}</div>
                            <div class="small text-gray-500 text-decoration-none">Average Rating: ${Utils7C.formatNumber(Utils7C.arrayAverage(data.students[i].c), 2)}</div>
                        </span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <a href="/student?id=${(i+1)}" class="btn btn-primary">Manage</a>
                </div>
            </div>
      </div>`;
    }

    let generatedPieData = [];
    for (let i=0; i<Utils7C.categories.length; i++) {
        generatedPieData.push({
            name: Utils7C.categories[i],
            y: 1,
            z: 10+i,
            color: Utils7C.colors[i]
          })
    }

    Highcharts.chart('ctx-panel', {
        chart: {
          type: 'variablepie'
        },
        credits: {
            enabled: false
        },
        title: {
          text: 'Average rating across the 7Cs'
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Average Rating: <b>{point.z}</b><br/>'
        },
        series: [{
          minPointSize: 10,
          innerSize: '20%',
          zMin: 0,
          data: generatedPieData
        }]
      });
});