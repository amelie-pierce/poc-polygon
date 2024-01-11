import userRadarDataset from "./config.js";

const CHART_OPTIONS = {
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};

const createChartConfig = (
  type = "radar",
  data = userRadarDataset,
  options = CHART_OPTIONS
) => {
  return {
    type: type,
    data: data,
    options: options,
  };
};

const ctx = document.getElementById("chart");
new Chart(ctx, createChartConfig("radar", userRadarDataset, CHART_OPTIONS));
