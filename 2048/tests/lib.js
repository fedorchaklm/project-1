function moveItemsUp(items) {
  console.log('> 0', items);
  const elements = items.sort((a, b) => a !== '' && b !== ''  ? 0 : a === '' ? 1 : -1);
  console.log('> 1', elements);
  for (let i = 0; i < elements.length - 1; i++) {
    const el = elements[i];
    if (el !== '' && el === elements[i + 1]) {
      elements[i] = `${el * 2}`;
      elements[i + 1] = '';
      i++;
    }
  }
  console.log('> 2', elements);
  for (let i = 0; i < elements.length - 1; i++) {
    const el = elements[i];
    if (!el) {
      elements[i] = elements[i + 1];
      elements[i + 1] = '';
    }
  }
  console.log('> 3', elements);
  return elements;
}