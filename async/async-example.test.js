import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a jwt", (done) => {
  const userEmail = "julian.vogel@web.de";

  generateToken(userEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value", async () => {
  const userEmail = "julian.vogel@web.de";

  const token = await generateTokenPromise(userEmail);

  expect(token).toBeDefined();
});

//it("should generate a token value", () => {
//  const userEmail = "julian.vogel@web.de";
//
//  return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
//});
