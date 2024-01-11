export default function createOption(data, value) {
  return {
    legend: {},
    radar: [
      {
        indicator: [
          { text: "Technology", max: data.size },
          { text: "Influence", max: data.size },
          { text: "Process", max: data.size },
          { text: "People", max: data.size },
          { text: "System", max: data.size },
        ],
        center: ["50%", "50%"],
        radius: data.size,
        axisName: {
          color: "black",
          borderRadius: 3,
          padding: [3, 5],
          fontSize: 20,
        },
      },
    ],
    series: [
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: value,
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "solid",
              color: "black",
              width: 2,
              color: "orange",
            },
            areaStyle: {
              color: "transparent",
            },
            label: {
              show: false,
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
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
              data.size - data.size / data.qty,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
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
              data.size - (data.size / data.qty) * 2,
              data.size - (data.size / data.qty) * 2,
              data.size - (data.size / data.qty) * 2,
              data.size - (data.size / data.qty) * 2,
              data.size - (data.size / data.qty) * 2,
              data.size - (data.size / data.qty) * 2,
            ],
            //name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
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
              data.size - (data.size / data.qty) * 3,
              data.size - (data.size / data.qty) * 3,
              data.size - (data.size / data.qty) * 3,
              data.size - (data.size / data.qty) * 3,
              data.size - (data.size / data.qty) * 3,
              data.size - (data.size / data.qty) * 3,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
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
              data.size - (data.size / data.qty) * 4,
              data.size - (data.size / data.qty) * 4,
              data.size - (data.size / data.qty) * 4,
              data.size - (data.size / data.qty) * 4,
              data.size - (data.size / data.qty) * 4,
              data.size - (data.size / data.qty) * 4,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
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
              data.size - (data.size / data.qty) * 5,
              data.size - (data.size / data.qty) * 5,
              data.size - (data.size / data.qty) * 5,
              data.size - (data.size / data.qty) * 5,
              data.size - (data.size / data.qty) * 5,
              data.size - (data.size / data.qty) * 5,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
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
