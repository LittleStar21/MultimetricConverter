const PROGRAMMER = 0;
const TEMPERATURE = 1;
const WEIGHT = 2;
const LENGTH = 3;

const PROGRAMMER_TYPES = ["Hexadecimal", "Decimal", "Octal", "Binary"];
const TEMPERATURE_TYPES = ["Celcius", "Fahrenheit", "Kelvin", "Reamur"];
const WEIGHT_TYPES = ["Kilogram", "Gram", "Miligram", "Ton", "Ounce", "Pound"];
const LENGTH_TYPES = ["Inch", "Kilometer", "Meter", "Centimeter"];

let applicationMode = PROGRAMMER;
let currentInputType = "Hexadecimal";
let isInputNumPositive = true;
let isDecimalPoint = false;

window.onload = () => {
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
      currentInputType = newInputType;
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
        case WEIGHT: {
          const selectedIdx = WEIGHT_TYPES.indexOf(newInputType);
          const newArray = WEIGHT_TYPES.slice(0);
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

  const outputContainer = document.querySelector(
    ".programmer-output-container"
  );
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
      currentInputType = "Hexadecimal";
      hexLetterContainer.style.display = "grid";
      programmerOperation.style.display = "grid";
      otherOperationContainer.style.display = "none";
      outputContainer.style.height = "42vh";
      break;
    case TEMPERATURE:
      showTemperatureMode();
      currentInputType = "Celcius";
      hexLetterContainer.style.display = "none";
      programmerOperation.style.display = "none";
      otherOperationContainer.style.display = "grid";
      outputContainer.style.height = "42vh";
      break;
    case WEIGHT:
      showWeightMode();
      currentInputType = "Kilogram";
      hexLetterContainer.style.display = "none";
      programmerOperation.style.display = "none";
      otherOperationContainer.style.display = "grid";
      outputContainer.style.height = "60vh";
      break;
    case LENGTH:
      showLengthMode();
      currentInputType = "Inch";
      hexLetterContainer.style.display = "none";
      programmerOperation.style.display = "none";
      otherOperationContainer.style.display = "grid";
      outputContainer.style.height = "42vh";
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
  // tempInputNumber.innerHTML = "0";

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
  // tempInputNumber.innerHTML = "0";

  setNewOutputContainer(TEMPERATURE_TYPES.slice(0).splice(1));
};

const showWeightMode = () => {
  const selected = document.querySelector(".selected");

  selected.innerHTML = "Kilogram";

  setNewOptionsContainer(WEIGHT_TYPES);
  resetInputSelector();
  resetInputSelector();

  const tempInputNumber = document.querySelector(".programmer-input-number");
  // tempInputNumber.innerHTML = "0";

  setNewOutputContainer(WEIGHT_TYPES.slice(0).splice(1));
};

const showLengthMode = () => {
  const selected = document.querySelector(".selected");
  selected.innerHTML = "Inch";

  setNewOptionsContainer(LENGTH_TYPES);
  resetInputSelector();
  resetInputSelector();

  const lengthInputNumber = document.querySelector(".programmer-input-number");
  // lengthInputNumber.innerHTML = "0";

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

    // REMOVE
    childValue.innerHTML = "0";
    newChild.appendChild(childValue);

    outputContainer.appendChild(newChild);
  }

  updateOutputValue();
};

const buttonPressed = (key) => {
  const inputNumber = document.querySelector(".programmer-input-number");
  let currentInput = inputNumber.innerHTML;

  if (key === "del") {
    const lastCharacter = currentInput[currentInput.length - 1];
    if (
      (currentInput.length === 2 && !isInputNumPositive) ||
      currentInput.length === 1
    ) {
      currentInput = "0";
      isDecimalPoint = false;
      isInputNumPositive = true;
    } else if (
      (lastCharacter >= "0" && lastCharacter <= "9") ||
      lastCharacter === "."
    ) {
      if (lastCharacter === ".") {
        isDecimalPoint = false;
      }
      currentInput = currentInput.slice(0, -1);
    }
  } else if (key === "clear") {
    currentInput = "0";
    isDecimalPoint = false;
    isInputNumPositive = true;
  } else if (key === "plus-minus") {
    isInputNumPositive = !isInputNumPositive;
  } else if (key === ".") {
    if (!isDecimalPoint) {
      currentInput += ".";
      isDecimalPoint = true;
    }
  } else {
    if (currentInput.length === 1 && currentInput[0] === "0") {
      currentInput = key;
    } else {
      currentInput += key;
    }
  }

  if (isInputNumPositive && currentInput[0] === "-") {
    currentInput = currentInput.substring(1);
  } else if (!isInputNumPositive && currentInput[0] !== "-") {
    currentInput = "-" + currentInput;
  }

  inputNumber.innerHTML = currentInput;
  updateOutputValue();
};

// ONLY WORKS ON TEMPERATURE
const updateOutputValue = () => {
  const outputValueTitles = document.querySelectorAll(
    ".programmer-output-title"
  );
  const outputValues = document.querySelectorAll(".programmer-output-value");
  const inputNumber = document.querySelector(".programmer-input-number");
  const inputValue = parseFloat(inputNumber.innerHTML);
  if (applicationMode === TEMPERATURE) {
    for (let i = 0; i < outputValues.length; i++) {
      const currentTitle = outputValueTitles[i].innerHTML;

      if (currentInputType === "Celcius") {
        if (currentTitle === "Fahrenheit") {
          outputValues[i].innerHTML = getFahrenheitFromCelcius(inputValue);
        } else if (currentTitle === "Kelvin") {
          outputValues[i].innerHTML = getKelvinFromCelcius(inputValue);
        } else {
          outputValues[i].innerHTML = getReamurFromCelcius(inputValue);
        }
      } else if (currentInputType === "Fahrenheit") {
        if (currentTitle === "Celcius") {
          outputValues[i].innerHTML = getCelciusFromFahrenheit(inputValue);
        } else if (currentTitle === "Kelvin") {
          outputValues[i].innerHTML = getKelvinFromFahrenheit(inputValue);
        } else {
          outputValues[i].innerHTML = getReamurFromFahrenheit(inputValue);
        }
      } else if (currentInputType === "Kelvin") {
        if (currentTitle === "Fahrenheit") {
          outputValues[i].innerHTML = getFahrenheitFromKelvin(inputValue);
        } else if (currentTitle === "Celcius") {
          outputValues[i].innerHTML = getCelciusFromKelvin(inputValue);
        } else {
          outputValues[i].innerHTML = getReamurFromKelvin(inputValue);
        }
      } else {
        if (currentTitle === "Fahrenheit") {
          outputValues[i].innerHTML = getFahrenheitFromReamur(inputValue);
        } else if (currentTitle === "Kelvin") {
          outputValues[i].innerHTML = getKelvinFromReamur(inputValue);
        } else {
          outputValues[i].innerHTML = getCelciusFromReamur(inputValue);
        }
      }
    }
  }
};

// Dark mode
let isDarkMode = false;
const setDarkMode = () => {
  isDarkMode = !isDarkMode;
  console.log("Darkmode:", isDarkMode);
};

const feedbackButton = () => {
  const popUp = document.querySelector(".pop-up");
  const feedback = document.querySelector(".feedback");
  popUp.style.display = "flex";
  feedback.style.display = "block";

  document.querySelector(".pop-up").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      removePopUp();
    }
  });
};

const languageButton = () => {
  console.log("Language");
};

const setDefaultButton = () => {
  console.log("Set default");
};

const helpButton = () => {
  const popUp = document.querySelector(".pop-up");
  const help = document.querySelector(".help");
  popUp.style.display = "flex";
  help.style.display = "block";

  document.querySelector(".pop-up").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      removePopUp();
    }
  });
};

const aboutButton = () => {
  const popUp = document.querySelector(".pop-up");
  const about = document.querySelector(".about");
  popUp.style.display = "flex";
  about.style.display = "block";

  document.querySelector(".pop-up").addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      // console.log("Child clicked");
    } else {
      // console.log("Parent clicked");
      removePopUp();
    }
  });
};

const removePopUp = () => {
  const popUp = document.querySelector(".pop-up");
  const about = document.querySelector(".about");
  const help = document.querySelector(".help");
  const feedback = document.querySelector(".feedback");
  popUp.style.display = "none";
  about.style.display = "none";
  help.style.display = "none";
  feedback.style.display = "none";
};
