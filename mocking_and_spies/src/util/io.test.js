import { it, expect, describe, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

describe("writeData()", () => {
  it("should execute the writeFile Method", async () => {
    const testData = "Test";
    const testFilename = "test.txt";
    await writeData(testData, testFilename);

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  });

  it("should return a promise that resolves no value if calles", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  });
});
