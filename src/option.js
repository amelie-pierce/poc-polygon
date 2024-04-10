import "../echarts.min.js";
import {
  RADAR_DEFAULT_STYLING,
  INIT_VALUE,
  INIT_DATA,
} from "./shared/constants.js";

import { createSeriesLayer } from "./actions/series.js";
import { parseValueArray, createValueLine } from "./actions/values.js";

export default function createOption(
  data = INIT_DATA,
  values = [],
  styleOptions
) {
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
      center: styleOptions?.center || ["50%", "50%"],
      axisName: {
        color: styleOptions?.axisName?.color || "black",
        borderRadius: styleOptions?.axisName?.borderRadius || 3,
        padding: styleOptions?.axisName?.padding || [3, 5],
        fontSize: styleOptions?.axisName?.fontSize || 20,
      },
      splitArea: {
        show: styleOptions?.splitArea?.show || false,
      },
      splitLine: {
        lineStyle: {
          color: styleOptions?.splitLine?.lineStyle?.color || [
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "black",
          ],
        },
      },
      axisLine: {
        lineStyle: {
          color: styleOptions?.axisLine?.lineStyle?.color || "black",
        },
      },
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
        type: "radar",
        data: values.map((value, idx) => ({
          value: value,
          name: `Person ${idx + 1}`,
        })),
      },
    ],
  };
}
