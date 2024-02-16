const { sayHello } = require("../src/main");

/**
 * @name toContain
 * @job  ensure the string is given included in the whole text, regardless of the rest of the text
 *
 * @name toBe
 * @job compare the (expect value & toBe value) and if it's both equal each other the test will pass, and if not the test will be failed
 */

describe("sayHello", () => {
  test("should return hello message", () => {
    const result = sayHello("ziad");
    expect(result).toContain("ziad"); //* both are works but, toMatch with regular expression used more often 
    expect(result).toMatch(/ziad/i);
  });
});
