import createCustomDatasetStyle from "./style.js";
import createCustomDataset from "./createCustomDataset.js";

const DEFAULT_ATTRIBUTES = {
  labels: ["Technology", "System", "People", "Process", "Influence"],
  datasets: {
    label: "Growth Up Chart",
    data: [1, 2, 3, 4, 5],
  },
  options: {},
};

const userRadarDataset = createCustomDataset(
  DEFAULT_ATTRIBUTES.labels,
  DEFAULT_ATTRIBUTES.datasets.data,
  DEFAULT_ATTRIBUTES.datasets.label,
  createCustomDatasetStyle()
);

export default userRadarDataset;
