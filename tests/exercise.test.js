const { calculator } = require("../src/exercise");

describe("calculator", () => {
  test("should throw an error(exception) if inputs are not numbers", () => {
    expect(() => {
      calculator("a", 1, 2);
    }).toThrow();
    expect(() => {
      calculator(5, "s", 2);
    }).toThrow();
  });

  test("should add num1 to num2 then return the result", () => {
    const result = calculator(10, 2, "+");
    expect(result).toBe(12);
  });

  test("should subtract num1 to num2 then return the result", () => {
    const result = calculator(10, 2, "-");
    expect(result).toBe(8);
  });

  test("should multipy num1 to num2 then return the result", () => {
    const result = calculator(10, 2, "*");
    expect(result).toBe(20);
  });

  test("should divide num1 to num2 then return the result", () => {
    const result = calculator(10, 2, "/");
    expect(result).toBe(5);
  });

  test("should return an object with a message if invalid operator is passed ", () => {
    const result = calculator(10, 2, "a");
    expect(result).toMatchObject({ message: "invalid operator !"});
    expect(result.success).toBeFalsy();
  });

});
