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


let applicationMode = "programmer";
let isDarkMode = false;

const setMode = (mode) => {
  applicationMode = mode;
  console.log(applicationMode);
};

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
