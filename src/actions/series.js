import { SERIES_DEFAULT_DATA, LABELS } from "../shared/constants.js";

export const createSeriesLayer = (value, layerOrder) => ({
  type: "radar",
  radarIndex: 0,
  data: [
    {
      ...SERIES_DEFAULT_DATA,
      value: value,
      label: {
        show: true,
        color: "black",
        formatter: function (params) {
          return formatLabel(layerOrder, params.dimensionIndex);
        },
      },
      name: "Detail:",
    },
  ],
});

export const formatLabel = (layerOrder = 1, dimensionIndex = 5) => {
  const labels = LABELS[layerOrder - 1];

  let label;

  switch (dimensionIndex) {
    case 0:
      label = labels[0];
      break;
    case 1:
      label = labels[1];
      break;
    case 2:
      label = labels[2];
      break;
    case 3:
      label = labels[3];
      break;
    case 4:
      label = labels[4];
      break;
    default:
      label = "";
      break;
  }

  return label;
};
