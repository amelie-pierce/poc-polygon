export const parseValueArray = (size, divisor, layerOrder) => [
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
  size - (size / divisor) * layerOrder,
];

export const createValueLine = (values) => ({
  type: "radar",
  radarIndex: 0,
  data: values.map((value) => ({
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
  })),
});
