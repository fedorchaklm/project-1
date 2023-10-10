const { isUniqueUsername } = require("../helper");

describe("isUniqueUsername", () => {
  it("should return true", () => {
    const users = {};
    const username = "username-1";
    const act = isUniqueUsername(users, username);
    expect(act).toEqual(true);
  });

  it("should return true", () => {
    const users = {
      "386a34ed-4d59-4e07-aa98-af45f9227bb0": {
        username: "Petya",
        password:
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
      "6b6c5a54-7f54-4021-ac29-312930b4627f": {
        username: "Sasha",
        password:
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    };
    const username = "username-1";
    const act = isUniqueUsername(users, username);
    expect(act).toEqual(true);
  });

  it("should return false", () => {
    const users = {
      "386a34ed-4d59-4e07-aa98-af45f9227bb0": {
        username: "Petya",
        password:
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
      "6b6c5a54-7f54-4021-ac29-312930b4627f": {
        username: "Sasha",
        password:
          "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
      },
    };
    const username = "Sasha";
    const act = isUniqueUsername(users, username);
    expect(act).toEqual(false);
  });
});
