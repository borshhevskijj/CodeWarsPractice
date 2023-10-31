const isValidWalk = require("./isValidWalk");

describe("isValidWalk", () => {
  test("if valid path", () => {
    const path = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];
    expect(isValidWalk(path)).toBe(true);
  });
  test("if the path is longer than", () => {
    const path = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "s", "s"];
    expect(isValidWalk(path)).toBe(false);
  });
  test("if the path is less than", () => {
    const path = ["n", "s", "n", "s", "n", "s", "n", "s"];
    expect(isValidWalk(path)).toBe(false);
  });
});
