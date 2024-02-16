const { loginUser } = require("../src/main");

describe("loginUser", () => {
  test("should throw an error(exception) if email is falsy", () => {
    // * All these values return false value
    //! expect(() => { loginUser(null) }).toThrow()
    //! expect(() => { loginUser(undefined) }).toThrow()
    //! expect(() => { loginUser("") }).toThrow()
    //! expect(() => { loginUser(NaN) }).toThrow()
    //! expect(() => { loginUser(0) }).toThrow()
    //! expect(() => { loginUser(false) }).toThrow()

    const falsyValues = [null, undefined, "", NaN, 0, false];
    falsyValues.forEach((value) => {
        expect(() => { loginUser(value); }).toThrow();
    });
  });

  test("should return a user object if valid email passed", () => {
    const result = loginUser("ziad@email.com");
    expect(result).toMatchObject({ email: "ziad@email.com" });
    expect(result.id).toBeDefined();
    expect(result.id).toBeGreaterThan(0);
  });
});
