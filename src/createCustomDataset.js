const DEFAULT_CONFIGS = {
  styles: {
    fill: true,
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
    pointBackgroundColor: "rgb(255, 99, 132)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(255, 99, 132)",
  },
};

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
