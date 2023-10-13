const notesService = require('../notes');
const crypto = require('crypto');

describe("create", () => {
  it("should return created", async () => {
    const userId = crypto.randomUUID();
    const created = await notesService.create(userId, {
      title: 'test-title',
      content: 'test-content',
    });
    const notes = await notesService.read(userId);
    await notesService.removeAll(userId);
    expect(notes.find(({ id }) => created.id === id)).toEqual(created);
  });
});
