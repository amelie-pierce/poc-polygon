import { RADAR_DEFAULT_STYLING, INIT_VALUE } from "./shared/constants.js";

import { createSeriesLayer } from "./actions/series.js";
import { parseValueArray, createValueLine } from "./actions/values.js";

export default function createOption(data, newValue = INIT_VALUE) {
  const divisor = data.qty + 1;

  const valueArray_1 = parseValueArray(data.size, divisor, 1);
  const valueArray_2 = parseValueArray(data.size, divisor, 2);
  const valueArray_3 = parseValueArray(data.size, divisor, 3);
  const valueArray_4 = parseValueArray(data.size, divisor, 4);
  const valueArray_5 = parseValueArray(data.size, divisor, 5);

  return {
    title: {
      text: "Basic Radar Chart",
    },
    legend: {},
    radar: [
      {
        ...RADAR_DEFAULT_STYLING,
        indicator: [
          { name: "Technology" },
          { name: "Influence" },
          { name: "Process" },
          { name: "People" },
          { name: "System" },
        ],
        radius: data.size,
        splitNumber: divisor,
      },
    ],
    series: [
      createValueLine(newValue),
      createSeriesLayer(valueArray_1, 1),
      createSeriesLayer(valueArray_2, 2),
      createSeriesLayer(valueArray_3, 3),
      createSeriesLayer(valueArray_4, 4),
      createSeriesLayer(valueArray_5, 5),
    ],
  };
}
