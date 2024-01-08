anychart.onDocumentLoad(function () {
  // create data for the first series
  // Updated labels
  var labels = ["Technology", "System", "People", "Process", "Influence"];

  // Create data for the radar chart
  var data = [
    { x: labels[0], value: 5 },
    { x: labels[1], value: 1 },
    { x: labels[2], value: 3 },
    { x: labels[3], value: 4 },
    { x: labels[4], value: 2 },
  ];

  var data2 = [
    { x: labels[0], value: 0 },
    { x: labels[1], value: 0 },
    { x: labels[2], value: 0 },
    { x: labels[3], value: 0 },
    { x: labels[4], value: 0 },
  ];

  // create a chart
  chart = anychart.radar();
  chart2 = anychart.radar();

  chart.yScale().minimum(0).maximum(6).ticks({ interval: 1 });

  chart2.startAngle(72);

  chart.yAxis().stroke({
    thickness: 0,
  });

  chart.xAxis().stroke({
    color: "black",
    thickness: 1.5,
    opacity: 0.8,
  });

  chart.xGrid().stroke({
    color: "black",
    thickness: 1.5,
    opacity: 0.8,
  });

  // configure the stroke of the circular grid
  chart.yGrid().stroke({
    color: "black",
    thickness: 1,
    opacity: 0.2,
    dash: "4 4",
  });

  chart.data(data);
  chart2.data(data2);
  // create the first series (line) and set the data
  // var series1 = chart.line(data_1);

  // create the second series (area) and set the data
  // var series2 = chart.area(data_2);

  // set the container id
  chart.container("container");
  chart2.container("container");
  // initiate drawing the chart
  chart.draw();
  chart2.draw();
});
