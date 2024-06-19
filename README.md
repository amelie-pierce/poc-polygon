
# Installation

#### 1. Clone the repo
`git clone https://github.com/amelie-pierce/poc-polygon.git`

#### 2. Build the library on development mode
`cd poc-polygon && yarn build:dev`
 
# Usage

**Import the chart** within your html body
```
<body>
	...
	<script src="../poc-polygon/dist/bundle.js"></script>
</body
```

**Add an element with id** for recognizing the chart
```
<body>
	<div id="your-chart-id"></div>

	...
	<script src="../poc-polygon/dist/bundle.js"></script>
</body
```

**Start implementing your chart** within your script

```
// Init the chart dom
var chartDom = document.getElementById("your-chart-id");
var myChart = echarts.init(chartDom);

// Set the data
var data = [
	{
		name: "Person 1",
		value: {
			technology: 300,
			system: 200,
			influence: 240,
			people: 120,
			process: 150,
		}
	}
]

// Assign the chart with the data
var chartOption = polygon.createOption({ data, styles, options });
chartOption && myChart.setOption(chartOption);
```

## Properties

|attribute|type|default|example|
|--|--|--|--|
|data|array|[]|<pre>[<br>	{<br>		name: "Person 1", <br>		value: { <br>			technology: 300, <br>			system: 200, <br>			influence: 240, <br>			people: 120, <br>			process: 150 }<br>	}, <br>	{ <br>		name: "Person 2", <br>		value: { <br>			technology: 300, <br>			system: 200, <br>			influence: 240, <br>			people: 120, <br>			process: 150 <br>	}<br>]</pre>|
|options|object|undefined|<pre>{<br>	title: {<br>		text: "Chart Title"<br>	}<br>}</pre>|
|styles*|

\* see [Custom Theme](https://github.com/nnnghia98/poc-polygon?tab=readme-ov-file#custom-theme)

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
