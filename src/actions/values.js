export const parseValueArray = (size, divisor, layerOrder) => [
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
];

export const createValueLine = (newValue) => {
  return {
    type: "radar",
    radarIndex: 0,
    data: [
      {
        value: newValue,
        symbol: "circle",
        symbolSize: 0,
        label: {
          show: false,
        },
        lineStyle: {
          type: "solid",
          color: "red",
          width: 2,
        },
      },
    ],
  };
};
