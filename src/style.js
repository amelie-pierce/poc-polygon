const createCustomDatasetStyle = (customStyle) => {
    const defaultDatasetStyle = {
      backgroundColor: "transparent",
      borderColor: "blue",
    };
  
    return {
      ...defaultDatasetStyle,
      ...customStyle,
    };
}

export default createCustomDatasetStyle