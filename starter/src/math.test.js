import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = [1, "2", "3"];
  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if an invalid number is provided", () => {
  // Arrange
  const numbers = [1, "invalid", 3];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBeNaN();
});

it("should yield 0 if an array is empty", () => {
  // Arrange
  const numbers = [];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(0);
});

it("should throw error if no param is passed", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw error if more then one param", () => {
  // Arrange
  const num1 = 1;
  const num2 = 2;
  // Act
  const resultFn = () => {
    add(num1, num2);
  };
  // Assert
  expect(resultFn).toThrow();
});
