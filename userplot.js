// Google Charts Library
google.charts.load('current', {'packages':['corechart']});

function drawCharts() {
  fetch('data_user(1).js')
    .then(response => response.text())
    .then(data => {
      eval(data);

      // 1st chart
      var data1 = google.visualization.arrayToDataTable([
        ['User', 'Pre-Pandemic Count'],
        ...data.map(row => [row[0], row[1]]), 
      ]);


      var options1 = {
        title: 'Pre-Pandemic User Types'
      };

      var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
      chart1.draw(data1, options1);

      // 2nd chart
      var data2 = google.visualization.arrayToDataTable([
        ['User', 'Pandemic Count'],
        ...data.map(row => [row[0], row[2]]), 
      ]);


      var options2 = {
        title: 'Pandemic User Types'
      };


      var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
      chart2.draw(data2, options2);
    })
    .catch(error => console.error(error));
}


google.charts.setOnLoadCallback(drawCharts);
