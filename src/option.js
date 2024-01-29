import {
  SERIES_OPTION_OUTLINE,
  RADAR_OPTION_STYLING,
} from "./shared/constants.js";

const createSeriesLayer = () => {};

export default function createOption(data, value) {
  const divisor = data.qty + 1;

  return {
    radar: [
      {
        ...RADAR_OPTION_STYLING,
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
      {
        ...SERIES_OPTION_OUTLINE,
      },
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [
              data.size - data.size / divisor,
              data.size - data.size / divisor,
              data.size - data.size / divisor,
              data.size - data.size / divisor,
              data.size - data.size / divisor,
              data.size - data.size / divisor,
            ],
            symbol: "circle",
            symbolSize: 4,
            lineStyle: {
              type: "dashed",
              color: "black",
              width: 1,
              opacity: 0.5,
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                let label;

                switch (params.dimensionIndex) {
                  case 0:
                    label = "Creates";
                    break;
                  case 1:
                    label = "Community";
                    break;
                  case 2:
                    label = "Defines";
                    break;
                  case 3:
                    label = "Manages";
                    break;
                  case 4:
                    label = "Leads";
                    break;
                  default:
                    break;
                }

                return label;
              },
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [
              data.size - (data.size / divisor) * 2,
              data.size - (data.size / divisor) * 2,
              data.size - (data.size / divisor) * 2,
              data.size - (data.size / divisor) * 2,
              data.size - (data.size / divisor) * 2,
              data.size - (data.size / divisor) * 2,
            ],
            symbol: "circle",
            symbolSize: 4,
            lineStyle: {
              type: "dashed",
              color: "black",
              width: 1,
              opacity: 0.5,
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                let label;

                switch (params.dimensionIndex) {
                  case 0:
                    label = "Masters";
                    break;
                  case 1:
                    label = "Company";
                    break;
                  case 2:
                    label = "Adjusts";
                    break;
                  case 3:
                    label = "Coordinates";
                    break;
                  case 4:
                    label = "Evolves";
                    break;
                  default:
                    break;
                }

                return label;
              },
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [
              data.size - (data.size / divisor) * 3,
              data.size - (data.size / divisor) * 3,
              data.size - (data.size / divisor) * 3,
              data.size - (data.size / divisor) * 3,
              data.size - (data.size / divisor) * 3,
              data.size - (data.size / divisor) * 3,
            ],
            symbol: "circle",
            symbolSize: 4,
            lineStyle: {
              type: "dashed",
              color: "black",
              width: 1,
              opacity: 0.5,
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                let label;

                switch (params.dimensionIndex) {
                  case 0:
                    label = "Evangelizes";
                    break;
                  case 1:
                    label = `Multiple
Teams`;
                    break;
                  case 2:
                    label = "Challenges";
                    break;
                  case 3:
                    label = "Mentors";
                    break;
                  case 4:
                    label = "Owns";
                    break;
                  default:
                    break;
                }

                return label;
              },
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [
              data.size - (data.size / divisor) * 4,
              data.size - (data.size / divisor) * 4,
              data.size - (data.size / divisor) * 4,
              data.size - (data.size / divisor) * 4,
              data.size - (data.size / divisor) * 4,
              data.size - (data.size / divisor) * 4,
            ],
            symbol: "circle",
            symbolSize: 4,
            lineStyle: {
              type: "dashed",
              color: "black",
              width: 1,
              opacity: 0.5,
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                let label;

                switch (params.dimensionIndex) {
                  case 0:
                    label = "Specializes";
                    break;
                  case 1:
                    label = "Team";
                    break;
                  case 2:
                    label = "Enforces";
                    break;
                  case 3:
                    label = "Supports";
                    break;
                  case 4:
                    label = "Designs";
                    break;
                  default:
                    break;
                }

                return label;
              },
            },
          },
        ],
      },
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [
              data.size - (data.size / divisor) * 5,
              data.size - (data.size / divisor) * 5,
              data.size - (data.size / divisor) * 5,
              data.size - (data.size / divisor) * 5,
              data.size - (data.size / divisor) * 5,
              data.size - (data.size / divisor) * 5,
            ],
            symbol: "circle",
            symbolSize: 4,
            lineStyle: {
              type: "dashed",
              color: "black",
              width: 1,
              opacity: 0.5,
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                let label;

                switch (params.dimensionIndex) {
                  case 0:
                    label = "Adopts";
                    break;
                  case 1:
                    label = "Subsystem";
                    break;
                  case 2:
                    label = "Follows/";
                    break;
                  case 3:
                    label = "Learns";
                    break;
                  case 4:
                    label = "Enhances";
                    break;
                  default:
                    break;
                }

                return label;
              },
            },
          },
        ],
      },
    ],
  };
}
