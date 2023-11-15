import createCustomDatasetStyle from "./style.js";
import createCustomDataset from "./createCustomDataset.js";

const userLabels = ["Drinking", "Coding", "Eating"];
const userDataSet = [45, 50, 10];
const userDataSetLabel = 'My Dataset';

const userRadarDataset = createCustomDataset(userLabels, userDataSet, userDataSetLabel, createCustomDatasetStyle({
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgb(75, 192, 192)",
  pointBackgroundColor: "rgb(75, 192, 192)",
  pointHoverBorderColor: "rgb(75, 192, 192)",
}))

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
