import { DEFAULT_CONFIGS } from "shared/constants";

export default function createCustomDataset(
  labels,
  data,
  dataSetLabel,
  styleOptions = {}
) {
  const mergedStyleOptions = { ...DEFAULT_CONFIGS.styles, ...styleOptions };

  return {
    labels: labels,
    datasets: [
      {
        label: dataSetLabel,
        data: data,
        ...mergedStyleOptions,
      },
    ],
  };
}
