import createOption from "./option.js";

const data = {
  size: 300,
  qty: 6,
};

var dom = document.getElementById("chart-container");

var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var app = {};

var option = createOption(data);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
