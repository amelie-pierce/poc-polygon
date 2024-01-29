export const INIT_VALUE = [0, 0, 0, 0, 0];

export const SERIES_OPTION_OUTLINE = {
  type: "radar",
  radarIndex: 0,
  data: [
    {
      value: INIT_VALUE,
      symbol: "circle",
      symbolSize: 0,
      lineStyle: {
        type: "solid",
        color: "black",
        width: 2,
        color: "orange",
      },
      label: {
        show: false,
      },
    },
  ],
};

export const RADAR_OPTION_STYLING = {
  center: ["50%", "50%"],
  axisName: {
    color: "black",
    borderRadius: 3,
    padding: [3, 5],
    fontSize: 20,
  },
  splitArea: {
    show: false,
  },
  splitLine: {
    lineStyle: {
      color: [
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "black",
      ],
      // type: 4, // Dashed width 4px dotted
      // // color: "gray",
      // width: 1,
      // opacity: 0.5,
    },
  },
  axisLine: {
    lineStyle: {
      color: "black",
    },
  },
};
