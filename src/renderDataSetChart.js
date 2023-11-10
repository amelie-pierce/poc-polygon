export default function generateRadarDataset(labels, data, dataSetLabel, styleOptions = {}) {
    const defaultStyleOptions = {
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    };
  
    const mergedStyleOptions = { ...defaultStyleOptions, ...styleOptions };
  
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