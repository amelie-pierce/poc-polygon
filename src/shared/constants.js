export const INIT_VALUE = [0, 0, 0, 0, 0];

export const INIT_DATA = {
  size: 300,
  qty: 5,
};

export const SERIES_DEFAULT_DATA = {
  symbol: "circle",
  symbolSize: 4,
  lineStyle: {
    type: "dashed",
    color: "black",
    width: 1,
    opacity: 0.5,
  },
};

export const RADAR_DEFAULT_STYLING = {
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

export const LABELS = [
  ["Creates", "Community", "Defines", "Manages", "Leads"],
  ["Masters", "Company", "Adjusts", "Coordinates", "Evolves"],
  [
    "Evangelizes",
    `Multiple
Teams`,
    "Challenges",
    "Mentors",
    "Owns",
  ],
  ["Specializes", "Team", "Enforces", "Supports", "Designs"],
  ["Adopts", "Subsystem", "Follows/", "Learns", "Enhances"],
];

export const CATEGORIES = [
  "Technology",
  "Influence",
  "Process",
  "People",
  "System",
];
