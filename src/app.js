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
