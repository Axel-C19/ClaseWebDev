document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");
  const addFieldButton = document.getElementById("add-field");
  const changeColorButton = document.getElementById("change-color");

  function calculateSum() {
    const inputs = document.querySelectorAll(".number-input");
    let sum = 0;
    inputs.forEach((input) => {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        sum += value;
      }
    });
    resultElement.textContent = `Sum: ${sum}`;
  }

  function addInputField() {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "number-input";
    newInput.addEventListener("input", calculateSum);
    document.body.insertBefore(newInput, resultElement);
  }

  function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  }

  document.querySelectorAll(".number-input").forEach((input) => {
    input.addEventListener("input", calculateSum);
  });

  addFieldButton.addEventListener("click", addInputField);
  changeColorButton.addEventListener("click", changeBackgroundColor);
});
