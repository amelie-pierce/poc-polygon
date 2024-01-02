import createCustomDatasetStyle from "./style.js";
import createCustomDataset from "./createCustomDataset.js";

const DEFAULT_ATTRIBUTES = {
  labels: ["Technology", "System", "People", "Process", "Influence"],
  datasets: {
    label: "Growth Up Chart",
    data: [
      { id: "Sales", nested: { value: 1500 } },
      { id: "Purchases", nested: { value: 500 } },
    ],
  },
  options: {
    parsing: {
      key: "nested.value",
    },
  },
};

const userRadarDataset = createCustomDataset(
  DEFAULT_ATTRIBUTES.labels,
  DEFAULT_ATTRIBUTES.datasets.data,
  DEFAULT_ATTRIBUTES.datasets.label,
  createCustomDatasetStyle()
);

export default userRadarDataset;
