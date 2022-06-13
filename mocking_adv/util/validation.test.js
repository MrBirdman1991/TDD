import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided", () => {
  const testInput = "";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("should throw an error if only whitespace provided as value", () => {
  const testInput = "    ";

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("should throw an error with provided error message", () => {
  const testInput = "    ";
  const errorMessage = "error";

  const validationFn = () => validateNotEmpty(testInput, errorMessage);

  expect(validationFn).toThrowError(errorMessage);
});
