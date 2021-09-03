let classData;

let curStudent =  new URL(window.location.href).searchParams.get("id");
if (!curStudent) {
    window.location.href = "/home";
}

// End point should be changed
$.get("/api/students", function(data, status){
    Utils7C.info("Load student data: " + status);
    $('#student-name').text(`${data.students[curStudent-1].firstname} ${data.students[curStudent-1].surname}`);
    classData = data;
    const container = document.getElementById("ajax-history");
    for (let i=0; i<data.students.length; i++) {
        container.innerHTML += `<div class="row">
            <div class="col-12 d-flex justify-content-between w-100 mb-3">
                <div class="d-flex align-items-center">    
                    <div>
                        <span>
                            <div class="h5 mb-0">${Utils7C.categories[Math.floor(Math.random()*7)]}</div>
                            <div class="small text-gray-500">Rating: ${Math.floor(Math.random()*17)}</div>
                            <div class="small text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores possimus quaerat quia commodi ullam sunt at consectetur cupiditate accusamus necessitatibus excepturi, consequatur in tenetur asperiores eaque nostrum dolorem voluptas iure!</div>
                        </span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <a onclick="alert('Show modal to confirm deletion: ${(i+1)}')" class="btn btn-danger">Delete</a>
                </div>
            </div>
      </div>`;
    }

    let generatedPieData = [];
    for (let i=0; i<Utils7C.categories.length; i++) {
        generatedPieData.push({
            name: Utils7C.categories[i],
            y: 1,
            z: Math.ceil(Math.random()*17),
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
          text: 'Average student rating across the 7Cs'
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