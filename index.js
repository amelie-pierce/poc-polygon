import { createOption } from "./src/option.js";

// Default init echarts
var chartDom = document.getElementById("chart-container");

var myChart = echarts.init(chartDom);

//#region for demonstration only
var values = {
  technology: 300,
  system: 200,
  influence: 240,
  people: 120,
  process: 150,
};

var data = [
  {
    name: "Nghia",
    value: {
      technology: 300,
      system: 200,
      influence: 240,
      people: 120,
      process: 150,
    },
  },
  {
    name: "Quoc",
    value: {
      technology: 150,
      system: 100,
      influence: 140,
      people: 220,
      process: 300,
    },
  },
];

var options = { title: { text: "People Growth" } };
//#endregion

var option = createOption({ data, options });

option && myChart.setOption(option);

window.addEventListener("resize", function () {
  myChart.resize();
});

// Export image
document.getElementById('exportButton').addEventListener('click', () => {
  const canvas = document.querySelector('#chart-container canvas')
  // Tạo một canvas tạm thời
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  // Đặt màu nền trắng cho canvas tạm thời
  tempCtx.fillStyle = 'white';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Vẽ nội dung của canvas chính lên canvas tạm thời
  tempCtx.drawImage(canvas, 0, 0);

  // Lấy dữ liệu hình ảnh từ canvas tạm thời
  const image = tempCanvas.toDataURL('image/png');

  // Tạo một liên kết tạm thời để tải xuống hình ảnh
  const link = document.createElement('a');
  link.href = image;
  link.download = 'image.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});