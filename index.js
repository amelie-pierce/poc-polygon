import { createOption } from "./src/option.js";

// Default init echarts
var chartDom = document.getElementById("chart-container");

var myChart = echarts.init(chartDom);

//#region for demonstration only

let data = []

function updateChart(personData) {
  if (personData) {
    data =[...data, personData ]
  }
var options = { title: { text: "People Growth" } };
  var option = createOption({ data, options });
  option && myChart.setOption(option);
}

updateChart()

//#endregion

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

// Add Person
const addPersonButton = document.getElementById('addPerson');
const container = document.getElementById('features');

let personCount = 0;

function updateData(personData) {
  const newData = personData.map((item) => ({
    name: item.personName,
    value: {
      technology: parseInt(item.technology, 10),
      system: parseInt(item.system, 10),
      influence: parseInt(item.influence, 10),
      people: parseInt(item.people, 10),
      process: parseInt(item.process, 10),
    },
  }))

  updateChart(newData[0]);
}


addPersonButton.addEventListener('click', function () {
  const personData = {}
  if (personCount < 3) {
    personCount++;

    const personWrapper = document.createElement('div');
    personWrapper.className = 'person-wrapper';

    const nameInputWrapper = document.createElement('div');
    nameInputWrapper.className = 'input-wrapper';

    const nameLabel = document.createElement('label');
    nameLabel.textContent = `Name for Person ${personCount}: `;
    nameLabel.htmlFor = `person${personCount}-name`;

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = `personName`;
    nameInput.name = `personName`;
    nameInput.addEventListener('change', function (e) {
      const { name, value } = e.target;
      personData[name] = value;
    })

    nameInputWrapper.appendChild(nameLabel);
    nameInputWrapper.appendChild(nameInput);

    personWrapper.appendChild(nameInputWrapper);

    const categories = ['Technology', 'System', 'People', 'Process', 'Influence'];
    const inputs = [];

    categories.forEach(category => {
      const inputWrapper = document.createElement('div');
      inputWrapper.className = 'input-wrapper';

      const label = document.createElement('label');
      label.textContent = `${category} for Person ${personCount}: `;
      label.htmlFor = `person-${category.toLowerCase()}`;

      const input = document.createElement('input');
      input.type = 'number';
      input.id = `person-${category.toLowerCase()}`;
      input.max = 300;
      input.min = 0;
      input.name = category.toLowerCase()

      input.addEventListener('change', function (e) {
        const { name, value } = e.target
        if (parseInt(this.value, 10) > 300 || parseInt(this.value, 10) < 0) {
          alert('Error: Value must be between 0 and 300.');
          this.value = '';
        } else {
          personData[name] = value;
        }
      });

      inputWrapper.appendChild(label);
      inputWrapper.appendChild(input);

      personWrapper.appendChild(inputWrapper);
    });

    inputs.push(personData);

    const buttonUpdate = document.createElement('button');
    buttonUpdate.id = 'updateData';
    buttonUpdate.textContent = 'Update Data';
    // buttonUpdate.disabled = true
    buttonUpdate.addEventListener('click', () => updateData(inputs))
    personWrapper.appendChild(buttonUpdate);

    container.after(personWrapper);

  } else {
    alert('Maximum of 3 persons reached.');
  }
});