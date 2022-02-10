const PROGRAMMER = 0;
const TEMPERATURE = 1;
const WEIGHT = 2;
const LENGTH = 3;

let applicationMode = PROGRAMMER;

const PROGRAMMER_TYPES = ["Hexadecimal", "Decimal", "Octal", "Binary"];
const TEMPERATURE_TYPES = ["Celcius", "Fahrenheit", "Kelvin", "Reamur"];
const WEIGHT_TYPES = ["Kilogram", "Gram", "Miligram", "Ton", "Ounce", "Pound"];
const LENGTH_TYPES = ["Inch", "Kilometer", "Meter", "Centimeter"];

window.onload = () => {
  const programmerDisplay = document.querySelector(".programmer-display");
  const optionsContainer = document.querySelector(".options-container");
  const programmerOutputContainer = document.querySelector(
    ".programmer-output-container"
  );
  const selected = document.querySelector(".selected");
  const inputNumber = document.querySelector(".programmer-input-number");

  selected.innerHTML = "Hexadecimal";
  inputNumber.innerHTML = "0";

  for (const programmerType of PROGRAMMER_TYPES) {
    const newChild = document.createElement("div");
    newChild.className = "option";

    const newChildInput = document.createElement("input");
    newChildInput.type = "radio";
    newChildInput.className = "radio";
    newChildInput.id = programmerType;
    newChildInput.name = "category";
    newChild.appendChild(newChildInput);

    const newChildLabel = document.createElement("label");
    newChildLabel.innerHTML = programmerType;
    newChildLabel.setAttribute("for", programmerType);
    newChild.appendChild(newChildLabel);

    optionsContainer.appendChild(newChild);
  }

  resetInputSelector();

  for (let i = 1; i < PROGRAMMER_TYPES.length; i++) {
    const newChild = document.createElement("div");
    newChild.className = "programmer-output";

    if (i < PROGRAMMER_TYPES.length - 1) newChild.classList.add("border-bot");

    const childTitle = document.createElement("div");
    childTitle.className = "programmer-output-title";
    childTitle.innerHTML = PROGRAMMER_TYPES[i];
    newChild.appendChild(childTitle);

    const childValue = document.createElement("div");
    childValue.className = "programmer-output-value";
    childValue.innerHTML = "0";
    newChild.appendChild(childValue);

    programmerOutputContainer.appendChild(newChild);
  }
};

const resetInputSelector = () => {
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");

  const optionsList = document.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach((option) => {
    option.addEventListener("click", () => {
      const newInputType = option.querySelector("label").innerHTML;
      selected.innerHTML = newInputType;
      optionsContainer.classList.remove("active");

      switch (applicationMode) {
        case PROGRAMMER: {
          const selectedIdx = PROGRAMMER_TYPES.indexOf(newInputType);
          const newArray = PROGRAMMER_TYPES.slice(0);
          newArray.splice(selectedIdx, 1);
          setNewOutputContainer(newArray);
          break;
        }
        case TEMPERATURE: {
          const selectedIdx = TEMPERATURE_TYPES.indexOf(newInputType);
          const newArray = TEMPERATURE_TYPES.slice(0);
          newArray.splice(selectedIdx, 1);
          setNewOutputContainer(newArray);
          break;
        }
        case LENGTH: {
          const selectedIdx = LENGTH_TYPES.indexOf(newInputType);
          const newArray = LENGTH_TYPES.slice(0);
          newArray.splice(selectedIdx, 1);
          setNewOutputContainer(newArray);
          break;
        }
      }
    });
  });
};

const setMode = (mode) => {
  if (applicationMode === mode) return;
  applicationMode = mode;

  const hexLetterContainer = document.querySelector(".hex-letter-container");
  const programmerOperation = document.querySelector(
    ".programmer-operation-container"
  );
  const otherOperationContainer = document.querySelector(
    ".operation-container"
  );

  switch (mode) {
    case PROGRAMMER:
      showProgrammerMode();
      hexLetterContainer.style.display = "flex";
      programmerOperation.style.display = "flex";
      otherOperationContainer.style.display = "none";
      break;
    case TEMPERATURE:
      showTemperatureMode();
      hexLetterContainer.style.display = "none";
      programmerOperation.style.display = "none";
      otherOperationContainer.style.display = "grid";
      break;
    case LENGTH:
      showLengthMode();
      hexLetterContainer.style.display = "none";
      programmerOperation.style.display = "none";
      otherOperationContainer.style.display = "grid";
      break;
    default:
  }
};

const showProgrammerMode = () => {
  const programmerDisplay = document.querySelector(".programmer-display");
  const optionsContainer = document.querySelector("options-container");
  const selected = document.querySelector(".selected");

  selected.innerHTML = "Hexadecimal";

  setNewOptionsContainer(PROGRAMMER_TYPES);

  resetInputSelector();
  resetInputSelector();

  const tempInputNumber = document.querySelector(".programmer-input-number");
  tempInputNumber.innerHTML = "0";

  setNewOutputContainer(PROGRAMMER_TYPES.slice(0).splice(1));
};

const showTemperatureMode = () => {
  const temperatureDisplay = document.querySelector(".programmer-display");
  const optionsContainer = document.querySelector(".options-container");
  const selected = document.querySelector(".selected");

  selected.innerHTML = "Celcius";

  setNewOptionsContainer(TEMPERATURE_TYPES);
  resetInputSelector();
  resetInputSelector();

  const tempInputNumber = document.querySelector(".programmer-input-number");
  tempInputNumber.innerHTML = "0";

  setNewOutputContainer(TEMPERATURE_TYPES.slice(0).splice(1));
};

const showLengthMode = () => {
  const selected = document.querySelector(".selected");
  selected.innerHTML = "Inch";

  setNewOptionsContainer(LENGTH_TYPES);
  resetInputSelector();
  resetInputSelector();

  const lengthInputNumber = document.querySelector(".programmer-input-number");
  lengthInputNumber.innerHTML = "0";

  setNewOutputContainer(LENGTH_TYPES.slice(0).splice(1));
};

const setNewOptionsContainer = (newOptions) => {
  const optionsContainer = document.querySelector(".options-container");
  while (optionsContainer.firstChild) optionsContainer.firstChild.remove();

  for (const newOption of newOptions) {
    const newChild = document.createElement("div");
    newChild.className = "option";

    const newChildInput = document.createElement("input");
    newChildInput.type = "radio";
    newChildInput.className = "radio";
    newChildInput.id = newOption;
    newChildInput.name = "category";
    newChild.appendChild(newChildInput);

    const newChildLabel = document.createElement("label");
    newChildLabel.innerHTML = newOption;
    newChildLabel.setAttribute("for", newOption);
    newChild.appendChild(newChildLabel);

    optionsContainer.appendChild(newChild);
  }
};

const setNewOutputContainer = (newOutputs) => {
  const outputContainer = document.querySelector(
    ".programmer-output-container"
  );
  while (outputContainer.firstChild) outputContainer.firstChild.remove();

  for (let i = 0; i < newOutputs.length; i++) {
    const newChild = document.createElement("div");
    newChild.className = "programmer-output";
    if (i < newOutputs.length - 1) newChild.classList.add("border-bot");

    const childTitle = document.createElement("div");
    childTitle.className = "programmer-output-title";
    childTitle.innerHTML = newOutputs[i];
    newChild.appendChild(childTitle);

    const childValue = document.createElement("div");
    childValue.className = "programmer-output-value";
    childValue.innerHTML = "0";
    newChild.appendChild(childValue);

    outputContainer.appendChild(newChild);
  }
};

// Dark mode
let isDarkMode = false;
const setDarkMode = () => {
  isDarkMode = !isDarkMode;
  console.log("Darkmode:", isDarkMode);
};

const feedbackButton = () => {
  console.log("Feedback");
};

const languageButton = () => {
  console.log("Language");
};

const setDefaultButton = () => {
  console.log("Set default");
};

const helpButton = () => {
  console.log("Help");
};

const aboutButton = () => {
  console.log("About");
};
