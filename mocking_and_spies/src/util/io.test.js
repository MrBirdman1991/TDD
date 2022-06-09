import {it, expect, describe} from "vitest";
import writeData from "./io";

describe("writeData()", () => {
    it("should execute the writeFile Method", async() => {
        const testData = "Test";
        const testFilename = "test.txt";

       const data = await writeData(testData, testFilename)

        expect(data).toBeUndefined()
    })
})