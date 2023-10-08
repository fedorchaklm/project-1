const statuses = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

const servise = new DataServise();

document.addEventListener("DOMContentLoaded", () => {
  render();
  addDragEvent();
  addCardEvent();
});

function renderCards(data, status, parent) {
  const filtered = data.filter((item) => item.status === status);
  let html = "";
  for (let i = 0; i < filtered.length; i++) {
    html += `<div class="card" draggable="true"> 
      <span class="title">${filtered[i].title}</span>
      <p class="description">${filtered[i].description}</p>
    </div>`;
  }
  parent.innerHTML = html;
}

function render() {
  servise.getData().then((data) => {
    const getParent = (id) => document.querySelector(`#${id} > .cards`);
    renderCards(data, statuses.TODO, getParent("todo"));
    renderCards(data, statuses.IN_PROGRESS, getParent("in-progress"));
    renderCards(data, statuses.DONE, getParent("done"));
  });
}

function addDragEvent() {
  document.querySelectorAll(".cards").forEach((cards) => {
    cards.addEventListener("dragstart", (evt) => {
      // target is card in the list
      evt.target.classList.add("selected");
    });

    cards.addEventListener("dragend", (evt) => {
      // target is card in the list
      evt.target.classList.remove("selected");
    });

    cards.addEventListener("dragover", (evt) => {
      // evt.currentTarget is cards
      // evt.target is cards or card
      evt.preventDefault();
      const activeCard = document.querySelector(".selected");
      const current = evt.currentTarget;

      if (!current.childNodes.length) {
        current.appendChild(activeCard);
        return;
      }

      const currentCard = evt.target;

      const isMoveable =
        activeCard !== currentCard && currentCard.classList.contains("card");

      if (!isMoveable) {
        return;
      }

      const nextCard =
        currentCard === activeCard.nextElementSibling
          ? currentCard.nextElementSibling
          : currentCard;

      current.insertBefore(activeCard, nextCard);
    });
  });
}

function addCardEvent() {
  const button = document.getElementById("add-task");
  button.addEventListener("click", () => handlerAddTask());
}

function handlerAddTask() {
  const modal = renderAddTaskFormModal();
  const form = document.getElementById("add-task-form");
  form.onsubmit = (evt) => {
    evt.preventDefault();
    const task = {
      title: evt.target.querySelector('input[name="title"]').value,
      description: evt.target.querySelector('textarea[name="description"]')
        .value,
      status: statuses.TODO,
    };
    servise
      .postData(task)
      .then((data) => {
        console.log(data);
        form.reset();
        const messageWindow = document.createElement("div");
        messageWindow.classList.add("message-window");
        form.appendChild(messageWindow);
        messageWindow.textContent = "added task";
      })
      .finally(() => {
        modal.close;
        render();
      });
  };
}

function renderAddTaskFormModal() {
  const modal = new Modal();
  modal.show();
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `<div class="form-container">
    <form id="add-task-form"> 
      <div class="form-field">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"/>
      </div>
      <div class="form-field">
        <label for="description">Description</label>
        <textarea id="description" rows="5" name="description"></textarea>
      </div>
      <div class="form-buttons">
        <button type="submit">Create</button>
        <button type="button">Cancel</button>
      </div>
    </form>
    </div>`;
  return modal;
}
