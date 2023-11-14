import createCustomDatasetStyle from "./style.js";

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      ...createCustomDatasetStyle({}),
    },
  ],
};

const chartOptions = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

export default chartOptions;
