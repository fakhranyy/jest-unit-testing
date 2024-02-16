const { getBook } = require("../src/asyncCode");

describe("getBook", () => {
  test("should return the book object if bookId === 1 ", async () => {
    // const result = await getBook(1);
    // expect(result).toMatchObject({ id: 1, title: "book 1" });
    // other way
    await expect(getBook(1)).resolves.toMatchObject({ id: 1, title: "book 1" });
  });

  test("should promise failed with an error object", async () => {
    // try {
    //   expect.assertions(1); // should has only one assertion at least
    //   await getBook(0);
    // } catch (error) {
    //   expect(error).toMatchObject({ errorMessage: "invalid id" });
    // }
    // other way
    await expect(getBook(0)).rejects.toMatchObject({ errorMessage: "invalid id" })

  });
});
