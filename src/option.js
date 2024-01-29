import {
  SERIES_DEFAULT_OUTLINE,
  RADAR_DEFAULT_STYLING,
} from "./shared/constants.js";

import { createSeriesLayer, parseValueArray } from "./actions.js";

export default function createOption(data, value) {
  const divisor = data.qty + 1;

  const valueArray_1 = parseValueArray(data.size, divisor, 1);
  const valueArray_2 = parseValueArray(data.size, divisor, 2);
  const valueArray_3 = parseValueArray(data.size, divisor, 3);
  const valueArray_4 = parseValueArray(data.size, divisor, 4);
  const valueArray_5 = parseValueArray(data.size, divisor, 5);

  return {
    radar: [
      {
        ...RADAR_DEFAULT_STYLING,
        indicator: [
          { text: "Technology", max: data.size },
          { text: "Influence", max: data.size },
          { text: "Process", max: data.size },
          { text: "People", max: data.size },
          { text: "System", max: data.size },
        ],
        radius: data.size,
        splitNumber: divisor,
      },
    ],
    series: [
      SERIES_DEFAULT_OUTLINE,
      createSeriesLayer(valueArray_1, 1),
      createSeriesLayer(valueArray_2, 2),
      createSeriesLayer(valueArray_3, 3),
      createSeriesLayer(valueArray_4, 4),
      createSeriesLayer(valueArray_5, 5),
    ],
  };
}
