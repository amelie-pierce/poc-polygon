# Development
#### 1. Clone the repo:
 `git clone https://github.com/amelie-pierce/poc-polygon.git`

#### 2. Build the library on development mode:
`cd poc-polygon && yarn build:dev`

#### 3. Basic usage: 

 - Add  `<script  src="../poc-polygon/dist/bundle.js"></script>` within the `body` tag
 - Init the chart (from echart)
 - Set the chart's value.
 - Assign the chart with the value.

##### Example:

your-index.html
```
<body>
...
<div id="your-chart-id"></div>

<script src="../poc-polygon/dist/bundle.js"></script>
// Then exec or import your script here
...
</body>
```

your-script.js
```
...
// Default init echarts

var chartDom = document.getElementById("your-chart-id");
var myChart = echarts.init(chartDom);

// Set the value (Array of 5 numbers)
var  option = polygon.createOption([50, 100, 100, 99, 0]);

// Assign the chart with the value
option && myChart.setOption(option);
...
```

# Custom Theme

| Attribute             | Type              | Description                                                                                                                                                                                                                                                                                  | Default Value  |
| :-------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| center                | `Array`           | <div style="width:300px"> <p>Center position of , the first of which is the horizontal position, and the second is the vertical position. </p> <p>Percentage is supported. When set in percentage, the item is relative to the container width, and the second item to the height.</p></div> | ['50%', '50%'] |  |
| axisName.color        | `string`           | <div style="width:300px"> Text color. </div>                                                                                                                                                                                                                                                 | 'black'        |
| axisName.borderRadius | `number`          | <div style="width:300px"> <p>Border radius of the text fragment.</p></div>                                                                                                                                                                                                                   | 3              |
| axisName.padding      | `number` \| `Array` | <div style="width:300px"> <p>Padding of the text fragment.</p> <p>`padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`</p> <p>`padding: 4`: represents padding: `[4, 4, 4, 4]`.</p> <p>`padding: [3, 4]`: represents padding: `[3, 4, 3, 4]`.</p></div>                 | [3, 5]         |
| axisName.fontSize     | `number`          | <div style="width:300px"> <p>Font size.</p></div>                                                                                                                                                                                                                                             | 20             |
| splitArea.show        | `boolean`         | <div style="width:300px"> <p>Set this to true to show the splitArea.</p> </div>                                                                                                                                                                                                              | false          |
| splitLine.lineStyle.color        | `Array`, `string`         | <div style="width:300px"> <p>The color of the splitLine, which could be set separately.</p> <p>SplitLine color could also be set in color array, which the split lines would take as their colors in turns.</p> </div>                                                                                                                                                                                                               | ["transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "black"]          |
| axisLine.lineStyle.color        | `string`         | <div style="width:300px"> <p>Line styleLine color.</p> </div>                                                                                                                                                                                                              | 'black'          |
