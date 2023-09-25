class Presenter {
  constructor() {
    this.tree = new BTree();
    this.addElementEvent();
    this.removeElementEvent();
  }

  appendContent(entry, parent) {
    const children = document.createElement("div");
    children.classList.add("children");

    const value = document.createElement("div");
    value.classList.add("value");
    const span = document.createElement("span");
    span.textContent = entry.value;
    value.appendChild(span);

    const node = document.createElement("div");
    node.classList.add("node");

    node.appendChild(value);
    node.appendChild(children);

    if (entry.left) {
      this.appendContent(entry.left, children);
    } else {
      const stub = document.createElement("div");
      stub.classList.add("node");
      children.appendChild(stub);
    }

    if (entry.right) {
      this.appendContent(entry.right, children);
    } else {
      const stub = document.createElement("div");
      stub.classList.add("node");
      children.appendChild(stub);
    }

    parent.appendChild(node);
  }

  draw() {
    const container = document.getElementById("tree-container");
    container.innerHTML = "";

    if (this.tree.size === 0) {
      return;
    }

    this.appendContent(this.tree.root, container);
  }

  removeElementEvent() {
    const button = document.getElementById("remove-element");
    const input = document.getElementById("input-add-remove-element");
    button.addEventListener("click", () => {
      const val = Number(input.value);
      if (!isNaN(val) && input.value) {
        this.tree.remove(val);
        this.draw();
        input.value = "";
      }
    });
  }

  addElementEvent() {
    const button = document.getElementById("add-element");
    const input = document.getElementById("input-add-remove-element");
    button.addEventListener("click", () => {
      const val = Number(input.value);
      if (!isNaN(val) && input.value) {
        this.tree.add(val);
        this.draw();
        input.value = "";
      }
    });
  }
}
