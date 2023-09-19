describe("moveItemsUp", function () {
  [
    {
      items: ["", "", "2", ""],
      expected: ["2", "", "", ""],
    },
    {
      items: ["2", "2", "2", "2"],
      expected: ["4", "4", "", ""],
    },
    {
      items: ["2", "", "2", "2"],
      expected: ["4", "2", "", ""],
    },
    {
      items: ["4", "", "2", "2"],
      expected: ["4", "4", "", ""],
    },
    {
      items: ["4", "", "4", "2"],
      expected: ["8", "2", "", ""],
    },
  ].forEach(({ items, expected }, i) => {
    it(`should handle case - ${i}`, function () {
      const actual = moveItemsUp(items);
      assert.deepEqual(expected, actual);
    });
  });
});
