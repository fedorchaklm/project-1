class Presenter {
  constructor() {
    this.linkedList = new LinkedList();
    this.removeElementEvent();
    this.addElementEvent();
  }

  draw() {
    let current = this.linkedList.root;
    let itemsHtml = "";
    while (current) {
      itemsHtml += `
        <div id="stick"></div>
        <div class='entry'>${current.value}</div>
      `;
      current = current.next;
    }
    document.getElementById("items-container").innerHTML = itemsHtml;
  }

  removeElementEvent() {
    const button = document.getElementById("remove-element");
    const input = document.getElementById("input-add-remove-element");
    button.addEventListener("click", () => {
      const val = input.value;
      if (val) {
        this.linkedList.remove(val);
        this.draw();
        input.value = "";
      }
    });
  }

  addElementEvent() {
    const button = document.getElementById("add-element");
    const input = document.getElementById("input-add-remove-element");
    button.addEventListener("click", () => {
      const val = input.value;
      if (val) {
        this.linkedList.add(val);
        this.draw();
        input.value = "";
      }
    });
  }
}
