import {
  RADAR_DEFAULT_STYLING,
  INIT_VALUE,
  DEFAULT_INDICATOR_MAX,
  DIVISOR,
} from "./shared/constants.js";

import { createSeriesLayer } from "./actions/series.js";
import {
  parseValueArray,
  parseValueLine,
  createValueLine,
} from "./actions/values.js";

export function createOption({ data = [], styles, options }) {
  const valueLines = data.map((d, idx) =>
    createValueLine({
      value: parseValueLine(d.value),
      name: d.name ?? `Person ${idx + 1}`,
    })
  );

  const valueLayer5 = parseValueArray({ size: 300, layerOrder: 1 });
  const valueLayer4 = parseValueArray({ size: 300, layerOrder: 2 });
  const valueLayer3 = parseValueArray({ size: 300, layerOrder: 3 });
  const valueLayer2 = parseValueArray({ size: 300, layerOrder: 4 });
  const valueLayer1 = parseValueArray({ size: 300, layerOrder: 5 });

  return {
    title: {
      text: options?.title?.text,
    },
    tooltip: {},
    legend: {},
    radar: {
      center: styles?.center || ["50%", "50%"],
      axisName: {
        color: styles?.axisName?.color || "black",
        borderRadius: styles?.axisName?.borderRadius || 3,
        padding: styles?.axisName?.padding || [3, 5],
        fontSize: styles?.axisName?.fontSize || 20,
      },
      splitArea: {
        show: styles?.splitArea?.show || false,
      },
      splitLine: {
        lineStyle: {
          color: styles?.splitLine?.lineStyle?.color || [
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
          color: styles?.axisLine?.lineStyle?.color || "black",
        },
      },
      indicator: [
        { name: "Technology" },
        { name: "Influence" },
        { name: "Process" },
        { name: "People" },
        { name: "System" },
      ],
      splitNumber: DIVISOR,
    },
    series: [
      createSeriesLayer(valueLayer5, 1),
      createSeriesLayer(valueLayer4, 2),
      createSeriesLayer(valueLayer3, 3),
      createSeriesLayer(valueLayer2, 4),
      createSeriesLayer(valueLayer1, 5),
      ...valueLines,
    ],
  };
}
