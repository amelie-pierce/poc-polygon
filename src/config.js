import generateRadarDataset from "./renderDataSetChart.js";


const userLabels = ["Drinking", "Coding", "Eating"];
const userDataSet = [45, 50, 10];
const userDataSetLabel = 'My Dataset';

const userOptions = {
  fill: true,
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgb(75, 192, 192)",
  pointBackgroundColor: "rgb(75, 192, 192)",
  pointHoverBorderColor: "rgb(75, 192, 192)",
};

const userRadarDataset = generateRadarDataset(userLabels, userDataSet, userDataSetLabel, userOptions)

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

export default chartOptions;
