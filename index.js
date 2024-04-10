import createOption from "./src/option.js";

// Default init echarts
var chartDom = document.getElementById("chart-container");

var myChart = echarts.init(chartDom);

var option = createOption();

option && myChart.setOption(option);

window.addEventListener("resize", function () {
  myChart.resize();
});

export default createOption;
