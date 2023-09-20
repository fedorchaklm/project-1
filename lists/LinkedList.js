class Entry {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  root = null;

  add(value) {
    const entry = new Entry(value);

    if (!this.root) {
      this.root = entry;
    } else {
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = entry;
    }
  }

  remove(value) {
    if (!this.root) {
      return;
    }

    if (this.root.value === value) {
      this.root = this.root.next;
    }

    let current = this.root.next;
    let prev = this.root;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }
  }

  sort() {
    let current = this.root;
    while (current) {
      let inner = current;
      while (inner) {
        if (inner.value < current.value) {
          const tmp = current.value;
          current.value = inner.value;
          inner.value = tmp;
        }  
        inner = inner.next;
      }
      current = current.next;
    }
  }
  toArray() {
    const array = [];
    let current = this.root;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  size() {
    let size = 0;
    let current = this.root;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }
}
