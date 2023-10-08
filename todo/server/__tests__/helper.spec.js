const { updateTodos } = require("../helper");

const todos = [
  {
    title: "1",
    status: "done",
    id: "c4b5c8c2-4cbe-4bb4-b763-2ee6225a2659",
  },
  {
    title: "2",
    status: "todo",
    id: "88434074-d2f6-4a88-ad12-c6079a92e314",
  },
  {
    title: "3",
    status: "done",
    id: "eb7d09a6-e999-4464-984c-a0128e95cda7",
  },
];

const patch = {
  id: "88434074-d2f6-4a88-ad12-c6079a92e314",
  title: "2 - UPDATED",
  status: "todo",
};

const _next = "c4b5c8c2-4cbe-4bb4-b763-2ee6225a2659";

const exp = [
  {
    title: "2 - UPDATED",
    status: "todo",
    id: "88434074-d2f6-4a88-ad12-c6079a92e314",
  },
  {
    title: "1",
    status: "done",
    id: "c4b5c8c2-4cbe-4bb4-b763-2ee6225a2659",
  },
  {
    title: "3",
    status: "done",
    id: "eb7d09a6-e999-4464-984c-a0128e95cda7",
  },
];

describe("updateTodos", () => {
  test("should update todos", () => {
    const act = updateTodos(todos, patch, _next);
    expect(act).toEqual(exp);
  });
});
