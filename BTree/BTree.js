class Entry {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  add(value) {
    const tree = new Entry(value);
    this.size++;
    if (!this.root) {
      this.root = tree;
      return;
    }

    let current = this.root;
    while (current) {
      if (current.value > tree.value) {
        if (!current.left) {
          current.left = tree;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = tree;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  remove(value) {
    if (this.size === 0) {
      throw new Error("Empty");
    }

    this.size--;

    if (this.root.value === value && !this.size) {
      this.root = null;
      return;
    }

    let current = this.root;
    let parent = null;

    while (current && current.value !== value) {
      parent = current;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!current) {
      this.size++;
      return;
    }

    if (!parent) {
      if (current.left && !current.right) {
        this.root = current.left;
      } else if (current.right && !current.left) {
        this.root = current.right;
      } else {
        let last = current.right;
        while (last.left) {
          last = last.left;
        }
        last.left = current.left;
        this.root = current.right;
      }
    } else {
      if (!current.left && !current.right) {
        if (parent.left === current) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (current.left && !current.right) {
        if (parent.left === current) {
          parent.left = current.left;
        } else {
          parent.right = current.left;
        }
      } else if (current.right && !current.left) {
        if (parent.left === current) {
          parent.left = current.right;
        } else {
          parent.right = current.right;
        }
      } else {
        let last = current.right;
        while (last.left) {
          last = last.left;
        }
        last.left = current.left;
        if (parent.left === current) {
          parent.left = last;
        } else {
          parent.right = last;
        }
      }
    }

    // while (current) {
    //   if (value < current.value) {
    //     prev = current;
    //     current = current.left;
    //   } else if (value === current.value && !current.left && !current.right) {
    //     prev.left = null;
    //     break;
    //   } else if (value === current.value && !current.left && current.right) {
    //     prev.left = current.right;
    //     break;
    //   } else if (value === current.value && !current.right && current.left) {
    //     prev.left = current.left;
    //     break;
    //   } else if (value === current.value && current.right && current.left) {
    //     const nearRightChanged = current.right;
    //     const nearLeftChanged = current.left;
    //     current = current.right;
    //     while (current.left) {
    //       current = current.left;
    //     }
    //     current.left = nearLeftChanged;
    //     prev.left = nearRightChanged;
    //   } else {
    //     break;
    //   }

    // if (value < current.value) {
    //   if (current.value === value && !current.right) {
    //     prev.left = null;
    //     break;
    //   }
    //   if (current.value === value && current.right) {
    //     prev.left = current.right;
    //   } else {
    //     prev = current;
    //     current = current.left;
    //   }
    // } else {
    //   if (current.value === value && !current.left) {
    //     prev.right = null;
    //     break;
    //   }
    //   if (current.value === value && current.left) {
    //     prev.right = current.left;
    //   } else {
    //     prev = current;
    //     current = current.right;
    //   }
    // }
    // }
  }

  toArray() {
    function ltr(node, arr) {
      if (node.left) {
        ltr(node.left, arr);
      }

      arr.push(node.value);

      if (node.right) {
        ltr(node.right, arr);
      }
    }

    if (!this.root) {
      return [];
    }

    const array = [];
    ltr(this.root, array);
    return array;
  }
}
