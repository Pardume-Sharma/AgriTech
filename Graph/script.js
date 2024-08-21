var data = [
  {
    x: ['12:00:00', '15:30:00', '09:45:00', '18:20:00','21:50:00','23:30:00'],
    y: [0, 5, 9, 8, 2, 1],
    mode: "lines",
    name: "Element 1",
    line: {
      color: "rgb(0, 255, 106)",
      width: 2,
    },
  },
];

var layout = {
  title: "Real-time Graph Generation",
  xaxis: {
    type: 'time', 
    tickformat: '%H:%M:%S' 
  },
  yaxis: {
    range: [0, 10],
  }
};

Plotly.newPlot("chart", data, layout,{responsive:true});