function updateTodos(todos, patch, _next) {
  const index = todos.findIndex((item) => item.id === patch.id);
  const updated = { ...todos[index], ...patch };

  if (_next) {
    const nextIndex = todos.findIndex(({ id }) => _next === id);
    todos[index] = null;
    todos.splice(nextIndex, 0, updated);
    return todos.filter(item => item !== null);
  }

  todos[index] = updated;
  return todos;
}

module.exports = {
  updateTodos,
}