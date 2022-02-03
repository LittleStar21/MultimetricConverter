// Programmer input selector
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
})

optionsList.forEach(option => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    console.log("Programmer input:", selected.innerHTML);
    optionsContainer.classList.remove("active");
  });
});

 // Application modes
const PROGRAMMER = 0;
const TEMPERATURE = 1;
const WEIGHT = 2;
const LENGTH = 3;

let applicationMode = PROGRAMMER;

const setMode = (mode) => {
  applicationMode = mode;

  switch (mode) {
    case PROGRAMMER:
      showProgrammerMode(true);
      break;
    case TEMPERATURE:
      showProgrammerMode(false);
      break;
    case WEIGHT:
      showProgrammerMode(false);
      break;
    case LENGTH:
      showProgrammerMode(false);
      break;
    default:
  }
};

const showProgrammerMode = (isProgrammer) => {
  const programmerDisplay = document.querySelector(".programmer-display");
  const hexLetters = document.querySelector(".hex-letter-container");
  const programmerOperations = document.querySelector(".programmer-operation-container");
      
  if (isProgrammer) {
    programmerDisplay.style.display = "flex";
    hexLetters.style.display = "flex";
    programmerOperations.style.display = "flex";
  } else {
      programmerDisplay.style.display = "none";
      hexLetters.style.display = "none";
      programmerOperations.style.display = "none";
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
