import { INIT_VALUE, INIT_DATA, CATEGORIES } from "./shared/constants.js";
import createOption from "./option.js";

const data = INIT_DATA;

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

function updateChart(newValue) {
  var option = createOption(data, newValue);

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}

const value = INIT_VALUE;

var myButton = document.getElementById("addPerson");

myButton.onclick = function () {
  // Get the container element
  var container = document.getElementById("container");

  // Loop through each item in the array
  CATEGORIES.forEach((name, idx) => {
    // Create a new label element
    var newLabel = document.createElement("label");

    // Set the label text
    var labelText = document.createTextNode(name + ": ");
    newLabel.appendChild(labelText);

    // Create a new select element
    var newSelect = document.createElement("select");

    // Add options from 1 to 5 to the select element
    for (var i = 1; i <= 5; i++) {
      var option = document.createElement("option");
      option.value = i * 50;
      option.text = i;
      newSelect.appendChild(option);
    }

    newSelect.addEventListener("change", function () {
      value[idx] = newSelect.value;

      updateChart(value);
    });

    // Append the select element to the label
    newLabel.appendChild(newSelect);

    // Append the label to the container
    container.appendChild(newLabel);
  });
};
