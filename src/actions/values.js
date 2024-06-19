import { DIVISOR } from "../shared/constants.js";

export const parseValueArray = ({ size, divisor = DIVISOR, layerOrder }) => [
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
];

export const createValueLine = ({ value, name }) => ({
  type: "radar",
  radarIndex: 0,
  data: [
    {
      value: value,
      symbol: "circle",
      symbolSize: 0,
      label: {
        show: false,
      },
      lineStyle: {
        type: "solid",
        width: 2,
      },
      name: name,
    },
  ],
});

export const parseValueLine = (values) => {
  const order = {
    0: "technology",
    1: "influence",
    2: "process",
    3: "people",
    4: "system",
  };

  const arrayValues = [];

  for (let i = 0; i <= 4; i++) {
    let value = values[order[i]];

    if (!value || value < 0) {
      value = 0;
    }

    arrayValues[i] = value;
  }

  return arrayValues;
};
