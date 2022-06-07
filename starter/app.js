import { extractEnteredNumberValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");
function formSubmitHandler(event) {
  event.preventDefault();

  const numbers = extractEnteredNumberValues(form);

  const result = calculateResult(numbers);
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", (e) => formSubmitHandler(e));
