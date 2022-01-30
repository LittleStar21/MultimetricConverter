const inputType = {
    "Hexadecimal": 0,
    "Decimal": 1,
    "Octal": 2,
    "Binary": 3
};

let programmerInput = inputType["Hexadecimal"];

// Dropdown input menu
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(option => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    console.log("Programmer input:", selected.innerHTML);
    optionsContainer.classList.remove("active");
  });
});

// Create output menu
