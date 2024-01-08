const DEFAULT_STYLES = {
  backgroundColor: "rgba(75, 192, 192, 0.2)",
  borderColor: "rgb(75, 192, 192)",
  borderWidth: 2,
};

const createCustomDatasetStyle = (customStyle = DEFAULT_STYLES) => {
  return {
    ...customStyle,
  };
};

export default createCustomDatasetStyle;
