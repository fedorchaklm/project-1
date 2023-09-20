describe("LinkedList", function () {
  describe("size", function () {
    it("should return 0 when list is empty", () => {
      const expected = 0;
      const list = new LinkedList();
      const actual = list.size();
      assert.equal(expected, actual);
    });
  });

  describe("add", function () {
    it("should return size after add", function () {
      const expected = 1;
      const list = new LinkedList();
      list.add(5);
      const actual = list.size();
      assert.equal(expected, actual);
    });

    it("should return array after add", function () {
      const expected = [5];
      const list = new LinkedList();
      list.add(5);
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });

    it("should return size after add second", function () {
      const expected = 2;
      const list = new LinkedList();
      list.add(3);
      list.add(5);
      const actual = list.size();
      assert.equal(expected, actual);
    });

    it("should return array after add", function () {
      const expected = [5];
      const list = new LinkedList();
      list.add(5);
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
  });

  describe("remove", function () {
    it("should return 2 when list is deleted", () => {
      const expected = 2;
      const list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(3);
      list.remove(5);
      const actual = list.size();
      assert.equal(expected, actual);
    });
    it("should return 2 when list is deleted", () => {
      const expected = 2;
      const list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(3);
      list.remove(3);
      const actual = list.size();
      assert.equal(expected, actual);
    });
    it("should return 2 when list is deleted", () => {
      const expected = 2;
      const list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(3);
      list.remove(2);
      const actual = list.size();
      assert.equal(expected, actual);
    });
  });
  describe("toArray", function () {
    it("should return array", () => {
      const expected = [2, 5, 3];
      const list = new LinkedList();
      list.add(2);
      list.add(5);
      list.add(3);
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
    it("should return empty array", () => {
      const expected = [];
      const list = new LinkedList();
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
  });
  describe("sort", function () {
    it("should return array", () => {
      const expected = [2, 3, 5, 8, 10];
      const list = new LinkedList();
      list.add(10);
      list.add(8);
      list.add(5);
      list.add(2);
      list.add(3);
      list.sort();
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
    it("should return array", () => {
      const expected = [];
      const list = new LinkedList();
      list.sort();
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
    it("should return array", () => {
      const expected = [2];
      const list = new LinkedList();
      list.add(2);
      list.sort();
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
    it("should return array", () => {
      const expected = [2, 3];
      const list = new LinkedList();
      list.add(3);
      list.add(2);
      list.sort();
      const actual = list.toArray();
      assert.deepEqual(expected, actual);
    });
  });
});
