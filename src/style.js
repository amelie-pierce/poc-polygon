const DEFAULT_STYLES = {
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgb(75, 192, 192)",
  pointBackgroundColor: "rgb(75, 192, 192)",
  pointHoverBorderColor: "rgb(75, 192, 192)",
};

const createCustomDatasetStyle = (customStyle = DEFAULT_STYLES) => {
  console.log(customStyle);

  return {
    ...customStyle,
  };
};

export default createCustomDatasetStyle;
