import { createOption } from "./src/option.js";

// Default init echarts
var chartDom = document.getElementById("chart-container");

var myChart = echarts.init(chartDom);

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

var option = createOption({ data, options });

// var option = {
//   title: {
//     text: "Basic Radar Chart",
//   },
//   legend: {
//     data: ["Allocated Budget", "Actual Spending"],
//   },
//   radar: {
//     indicator: [
//       { name: "Sales", max: 6500 },
//       { name: "Administration", max: 16000 },
//       { name: "Information Technology", max: 30000 },
//       { name: "Customer Support", max: 38000 },
//       { name: "Development", max: 52000 },
//       { name: "Marketing", max: 25000 },
//     ],
//   },
//   series: [
//     {
//       name: "Budget vs spending",
//       type: "radar",
//       data: [
//         {
//           value: [4200, 3000, 20000, 35000, 50000, 18000],
//           name: "Allocated Budget",
//         },
//         {
//           value: [5000, 14000, 28000, 26000, 42000, 21000],
//           name: "Actual Spending",
//         },
//       ],
//     },
//   ],
// };

option && myChart.setOption(option);

window.addEventListener("resize", function () {
  myChart.resize();
});
