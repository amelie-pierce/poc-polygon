import { createOption } from "./src/option.js";

// Default init echarts
var chartDom = document.getElementById("chart-container");

var myChart = echarts.init(chartDom);

//#region for demonstration only
var values = {
  technology: 300,
  system: 200,
  influence: 240,
  people: 120,
  process: 150,
};

var data = [
  {
    name: "Nghia",
    value: {
      technology: 300,
      system: 200,
      influence: 240,
      people: 120,
      process: 150,
    },
  },
  {
    name: "Quoc",
    value: {
      technology: 150,
      system: 100,
      influence: 140,
      people: 220,
      process: 300,
    },
  },
];

var options = { title: { text: "People Growth" } };
//#endregion

var option = createOption({ data, options });

option && myChart.setOption(option);

window.addEventListener("resize", function () {
  myChart.resize();
});
