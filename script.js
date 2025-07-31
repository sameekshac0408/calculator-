//display input fields
const displayField = document.getElementById("calc-display");

//selecting input buttons
const inputButtons = document.querySelectorAll(".btn-secondary, .btn-warning");

//append to display the pressed key
function appendToDisplay(value) {
    displayField.value += value;
}

//clear the display
function clearDisplay() {
    displayField.value = "";
}

//evaluate the expression
function calculateResult() {
    try{
        const result = eval(displayField.value);
        displayField.value = result;
    } catch {
        displayField.value = "Error";
    }
}

//to calculate percentage
function calculatePercentage() {
    if(displayField.value !== "") {
        const num = parseFloat(displayField.value);
        displayField.value = (num / 100).toString();
    }
}

//to calculate square root of the number
function calculateSquareRoot() {
    if(displayField.value !== "") {
        const num = parseFloat(displayField.value);
        if (num < 0) {
            displayField.value = "Error";
        }
        else {
            displayField.value = Math.sqrt(num).toString();
        }
    }
}
//operator buttons
inputButtons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;
    appendToDisplay(key);
  });
});

//attach event listeners to special buttons
document.getElementById("btn-clear").addEventListener("click", clearDisplay);
document.getElementById("btn-equals").addEventListener("click", calculateResult);
document.getElementById("btn-percent").addEventListener("click", calculatePercentage);
document.getElementById("btn-square-root").addEventListener("click", calculateSquareRoot);