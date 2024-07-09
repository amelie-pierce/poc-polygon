import { createOption } from "./src/option.js";
import { CATEGORIES, MAX_PERSONS} from "./src/shared/constants.js";

const chartDom = document.getElementById("chart-container");
const myChart = echarts.init(chartDom);

let data = [];
let personCount = 0;

// Update chart with new data
function updateChart(personData) {
  if (personData) {
    data = [...data, personData];
  }
  const options = { title: { text: "People Growth" } };
  const option = createOption({ data, options });
  if (option) myChart.setOption(option);
}

function updateData(personData) {
  const newData = personData.map(item => ({
    name: item.personName,
    value: {
      technology: parseInt(item.technology, 10),
      system: parseInt(item.system, 10),
      influence: parseInt(item.influence, 10),
      people: parseInt(item.people, 10),
      process: parseInt(item.process, 10),
    },
  }));
  updateChart(newData[0]);
}

function createInputElement(type, id, name, max, min) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = name;
  if (max) input.max = max;
  if (min) input.min = min;
  return input;
}

function createLabelElement(text, htmlFor) {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = htmlFor;
  return label;
}

function createPersonForm(personNumber) {
  const personData = {};

  const personWrapper = document.createElement('div');
  personWrapper.className = 'person-wrapper';

  const nameInputWrapper = document.createElement('div');
  nameInputWrapper.className = 'input-wrapper';

  const nameLabel = createLabelElement(`Name for Person ${personNumber}: `, `person${personNumber}-name`);
  const nameInput = createInputElement('text', `personName`, `personName`);
  nameInput.addEventListener('change', (e) => personData[e.target.name] = e.target.value);

  nameInputWrapper.appendChild(nameLabel);
  nameInputWrapper.appendChild(nameInput);
  personWrapper.appendChild(nameInputWrapper);

  CATEGORIES.forEach(category => {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    const label = createLabelElement(`${category} for Person ${personNumber}: `, `person-${category.toLowerCase()}`);
    const input = createInputElement('number', `person-${category.toLowerCase()}`, category.toLowerCase(), 300, 0);

    input.addEventListener('change', function (e) {
      if (parseInt(this.value, 10) > 300 || parseInt(this.value, 10) < 0) {
        alert('Error: Value must be between 0 and 300.');
        this.value = '';
      } else {
        personData[e.target.name] = e.target.value;
        validateInputs();
      }
    });

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    personWrapper.appendChild(inputWrapper);
  });

  const buttonUpdate = document.createElement('button');
  buttonUpdate.id = 'updateData';
  buttonUpdate.textContent = 'Update Data';
  buttonUpdate.disabled = true;
  buttonUpdate.addEventListener('click', () => updateData([personData]));
  personWrapper.appendChild(buttonUpdate);

  function validateInputs() {
    const allFilled = [...personWrapper.querySelectorAll('input')].every(input => input.value.trim() !== '');
    buttonUpdate.disabled = !allFilled;
  }

  return personWrapper;
}

document.getElementById('addPerson').addEventListener('click', () => {
  if (personCount < MAX_PERSONS) {
    personCount++;
    const personForm = createPersonForm(personCount);
    document.getElementById('features').after(personForm);
  } else {
    alert('Maximum of 3 persons reached.');
  }
});

// Export image
document.getElementById('exportButton').addEventListener('click', () => {
  const canvas = document.querySelector('#chart-container canvas');
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;

  // Set white background
  tempCtx.fillStyle = 'white';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Draw main canvas content
  tempCtx.drawImage(canvas, 0, 0);

  const image = tempCanvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'image.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

window.addEventListener("resize", () => myChart.resize());

// Initial call to update the chart
updateChart();