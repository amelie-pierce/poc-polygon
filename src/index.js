import { INIT_VALUE } from "./shared/constants.js";
import createOption from "./option.js";

const data = {
  size: 300,
  qty: 5,
};

var dom = document.getElementById("chart-container");

var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var app = {};

const value = INIT_VALUE;

var option = createOption(data, value);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

var inputField1 = document.getElementById("inputField1");
var inputField2 = document.getElementById("inputField2");
var inputField3 = document.getElementById("inputField3");
var inputField4 = document.getElementById("inputField4");
var inputField5 = document.getElementById("inputField5");

function updateChart(newValue) {
  var option = createOption(data, newValue);

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}

inputField1.addEventListener("change", function () {
  value[0] = inputField1.value;

  updateChart(value);
});

inputField2.addEventListener("change", function () {
  value[1] = inputField2.value;

  updateChart(value);
});

inputField3.addEventListener("change", function () {
  value[2] = inputField3.value;

  updateChart(value);
});

inputField4.addEventListener("change", function () {
  value[3] = inputField4.value;

  updateChart(value);
});

inputField5.addEventListener("change", function () {
  value[4] = inputField5.value;

  updateChart(value);
});
