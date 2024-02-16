const { connectToDb } = require("../src/mockFunc");

const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
  { id: 4, title: "post 4" },
];

describe("Mock function practice", () => {
  test("should returm greeting message", () => {
    const greetMock = jest.fn((username) => "Welcome " + username);
    expect(greetMock("ziad")).toBe("Welcome ziad");
    expect(greetMock("eslam")).toBe("Welcome eslam");

    expect(greetMock).toHaveBeenCalled();
    expect(greetMock).toHaveBeenCalledWith("ziad");
    expect(greetMock).toHaveBeenCalledWith("eslam");
    expect(greetMock).toHaveBeenCalledTimes(2);
  });

  test("should mocking getting posts", () => {
    const getPostMock = jest.fn(() => posts);
    const result = getPostMock();
    expect(result).toHaveLength(4);
    expect(result).toEqual(posts);
    expect(getPostMock).toHaveBeenCalled();
    expect(getPostMock).toHaveBeenCalledTimes(1);
  });
});

describe("connectToDb", () => {
  test("should connect to DB if num = 1", () => {
    const connectMock = jest.fn(() => true);
    connectToDb(1, connectMock);
    expect(connectMock).toHaveBeenCalled();
  });

  test("should not connect to DB if num = 1", () => {
    const connectMock = jest.fn(() => true);
    connectToDb(0, connectMock);
    expect(connectMock).not.toHaveBeenCalled();
  });
});
