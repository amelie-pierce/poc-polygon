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

var option = createOption(data);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

// Called every time value changed
function updateChart(values) {
  var option = createOption(data, values);

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}

// Get add new person button
var myButton = document.getElementById("new-person");

myButton.onclick = function () {
  // Get the container element
  var container = document.getElementById("container");

  // Create new group for a person
  var newGroup = document.createElement("div");
  newGroup.className = "group-attribute";

  const newValue = [...INIT_VALUE];

  // Loop through each item in the array
  CATEGORIES.forEach((name, idx) => {
    // Create a new label element
    var newLabel = document.createElement("label");

    // Set the label text
    var labelText = document.createTextNode(name + ": ");
    newLabel.appendChild(labelText);

    // Create a new select element
    var newSelect = document.createElement("select");

    // Add options from 0 to 5 to the select element
    for (var i = 0; i <= 5; i++) {
      var option = document.createElement("option");
      option.value = i * 50;
      option.text = i;
      newSelect.appendChild(option);
    }

    newSelect.addEventListener("change", function () {
      newValue[idx] = newSelect.value;

      updateChart(values);
    });

    // Append the select element to the label
    newLabel.appendChild(newSelect);

    // Append the label to the group
    newGroup.appendChild(newLabel);
  });

  // Append the group to the container
  container.appendChild(newGroup);

  values.push(newValue);
};
