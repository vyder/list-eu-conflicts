google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  data.columns.forEach(column => dataTable.addColumn(column));
  dataTable.addRows(data.rows);

  chart.draw(dataTable);
}