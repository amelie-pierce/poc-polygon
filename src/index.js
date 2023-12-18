import userRadarDataset from "./config.js";

const chartOptions = {
  type: "radar",
  data: userRadarDataset,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
};

const ctx = document.getElementById("chart");

new Chart(ctx, chartOptions);
