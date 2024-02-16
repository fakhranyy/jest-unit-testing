const { getNames } = require("../src/main");

describe("getNames", () => {
  test("should return an array of names", () => {
    const result = getNames();

    expect(result).toContain("ziad");
    expect(result).toContain("zrzr");
    expect(result).toContain("omar");
    
    //* or we can use the short and better way
    expect(result).toEqual(expect.arrayContaining(["ziad", "zrzr", "omar"]));
    
    //* or other way
    expect(result).toHaveLength(3); // ensure by the length of the array 
     
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // * all these matcher to ensure the value of the arrays
  });
});
