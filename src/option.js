export default function createOption(data) {
  return {
    legend: {},
    radar: [
      {
        indicator: [
          { text: "Technology", max: data.size },
          { text: "System", max: data.size },
          { text: "People", max: data.size },
          { text: "Process", max: data.size },
          { text: "Influence", max: data.size },
        ],
        center: ["50%", "50%"],
        radius: data.size,
        axisName: {
          color: "black",
          borderRadius: 3,
          padding: [3, 5],
        },
      },
    ],
    series: [
      {
        type: "radar",
        radarIndex: 0,
        data: [
          {
            value: [100, 200, 50, 200, 150],
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "solid",
              color: "black",
            },
            areaStyle: {
              color: "transparent",
            },
            lineStyle: {
              width: 5,
              color: "orange",
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
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                return "Hello world";
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
              data.size - (data.size / data.qty) * 2,
            ],
            //name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                return "lorem";
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
              data.size - (data.size / data.qty) * 3,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                return "ispum";
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
              data.size - (data.size / data.qty) * 4,
            ],
            // name: 'Data C',
            symbol: "circle",
            symbolSize: 0,
            lineStyle: {
              type: "dashed",
              color: "gray",
            },
            label: {
              show: true,
              color: "black",
              formatter: function (params) {
                return "smallest";
              },
            },
          },
        ],
      },
    ],
  };
}
