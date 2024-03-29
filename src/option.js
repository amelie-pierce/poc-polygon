import { RADAR_DEFAULT_STYLING, INIT_VALUE } from "./shared/constants.js";

import { createSeriesLayer } from "./actions/series.js";
import { parseValueArray, createValueLine } from "./actions/values.js";

export default function createOption(data, values = []) {
  const divisor = data.qty + 1;

  const valueArray_1 = parseValueArray(data.size, divisor, 1);
  const valueArray_2 = parseValueArray(data.size, divisor, 2);
  const valueArray_3 = parseValueArray(data.size, divisor, 3);
  const valueArray_4 = parseValueArray(data.size, divisor, 4);
  const valueArray_5 = parseValueArray(data.size, divisor, 5);

  return {
    title: {
      text: data.text,
    },
    tooltip: {},
    legend: {
      data: values.map((_, idx) => `Person ${idx + 1}`),
    },
    radar: {
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
    series: [
      createSeriesLayer(valueArray_1, 1),
      createSeriesLayer(valueArray_2, 2),
      createSeriesLayer(valueArray_3, 3),
      createSeriesLayer(valueArray_4, 4),
      createSeriesLayer(valueArray_5, 5),
      {
        name: "预算 vs 开销（Budget vs spending）",
        type: "radar",
        data: values.map((value, idx) => ({
          value: value,
          name: `Person ${idx + 1}`,
        })),
      },
    ],
  };
}
