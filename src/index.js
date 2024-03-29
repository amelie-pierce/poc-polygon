import { INIT_VALUE, INIT_DATA, CATEGORIES } from "./shared/constants.js";
import createOption from "./option.js";

// Default init attributes
const data = INIT_DATA;
const values = [];

// Default init echarts
var dom = document.getElementById("chart-container");

var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var app = {};

// var option = createOption(data);
var option = createOption(data, values);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

// Called every time value changed
function updateChart(values) {
  // var option = createOption(data, values);
  var option = createOption(data, values, styleOptions);

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}
