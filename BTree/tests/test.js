describe("BTree", function () {
  describe("add", function () {
    it("should return size 1 after added new value", function () {
      const expected = 1;
      const tree = new BTree();
      tree.add(1);
      const actual = tree.size;
      assert.equal(expected, actual);
    });
    it("should return size 2 after added new value", function () {
      const expected = 2;
      const tree = new BTree();
      tree.add(1);
      tree.add(2);
      const actual = tree.size;
      assert.equal(expected, actual);
    });
    it("should return size 5 after added new value", function () {
      const expected = 5;
      const tree = new BTree();
      tree.add(10);
      tree.add(9);
      tree.add(6);
      tree.add(5);
      tree.add(7);
      const actual = tree.size;
      assert.equal(expected, actual);
      console.log(">", tree);
    });
  });
  describe("remove", function () {
    it("should return size 0 after remove value", function () {
      const expected = 0;
      const tree = new BTree();
      tree.add(1);
      tree.remove(1);
      const actual = tree.size;
      assert.equal(expected, actual);
    });
    it("should return size 1 after remove 1 value", function () {
      const expected = 1;
      const tree = new BTree();
      tree.add(1);
      tree.add(2);
      tree.remove(2);
      const actual = tree.size;
      assert.equal(expected, actual);
    });
    it("should throw error", function () {
      const tree = new BTree();
      assert.throws(() => tree.remove(2));
    });
    it("should return size after remove value", function () {
      const expected = [5, 6, 7, 8, 9];
      const tree = new BTree();
      tree.add(10);
      tree.add(9);
      tree.add(6);
      tree.add(5);
      tree.add(7);
      tree.add(8);
      tree.remove(10);
      const actual = tree.toArray();
      assert.deepEqual(expected, actual);
    });
  });
  describe("toArray", function () {
    it("should return empty array when this.root = null", function () {
      const expected = [];
      const tree = new BTree();
      const actual = tree.toArray();
      assert.deepEqual(expected, actual);
    });
    it("should return array when 1 element", function () {
      const expected = [1];
      const tree = new BTree();
      tree.add(1);
      const actual = tree.toArray();
      assert.deepEqual(expected, actual);
    });
  });
});
