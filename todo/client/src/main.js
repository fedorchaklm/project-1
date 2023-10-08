document.addEventListener("DOMContentLoaded", () => {
  render();
  addAddEvent();
  addDragEvent();
});

const dropdownHtml = (id) => `<div class="dropdown-container">
  <div class="dropdown">
    <button class="dropbtn">&#168;</button>
    <div class="dropdown-content">
      <button class="btn-edit" data-id="${id}">Edit</button>
      <button class="btn-delete" data-id="${id}">Delete</button>
    </div>
  </div>
</div>`;

function renderCards(data, status) {
  const parent = document.getElementById(status);
  const filtered = data.filter((item) => item.status === status);
  let html = "";
  for (let i = 0; i < filtered.length; i++) {
    html += `<div class="card" draggable="true" data-id="${filtered[i].id}">
      <span class="title">${filtered[i].title}</span>
      <p class="description">${filtered[i].description}</p>
      ${dropdownHtml(filtered[i].id)}
    </div>`;
  }
  parent.innerHTML = html;
  parent
    .querySelectorAll(".btn-delete")
    .forEach((btn) => btn.addEventListener("click", (evt) => handleDeleteTask(evt)));
  parent
    .querySelectorAll(".btn-edit")
    .forEach((btn) => btn.addEventListener("click", (evt) => handleEditTask(evt)));
}

function render() {
  DataService.getData().then((data) => {
    renderCards(data, statuses.TODO);
    renderCards(data, statuses.IN_PROGRESS);
    renderCards(data, statuses.DONE);
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

      const card = evt.target;
      let nextCard = evt.target.nextElementSibling;
      let prevStatus = getPrevStatus(card.parentNode.id);
      while (!nextCard && prevStatus) {
        nextCard = document.getElementById(prevStatus).firstChild;
        prevStatus = getPrevStatus(prevStatus);
      }
      const data = {
        id: card.dataset.id,
        status: card.parentNode.id,
        _next: nextCard?.dataset.id,
      };
      DataService.updateData(data);
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

      // console.log(currentCard.nextElementSibling.dataset.id);
      current.insertBefore(activeCard, nextCard);
    });
  });
}

function addAddEvent() {
  const buttonAdd = document.getElementById("add-task");
  buttonAdd.addEventListener("click", () => handleAddTask());
}

function handleDeleteTask(evt) {
  const id = evt.currentTarget.dataset.id;
  DataService.deleteData(id).then(() => {
    render();
  });
  console.log("here");
}

function handleEditTask(evt) {
  const id = evt.currentTarget.dataset.id;

  console.log("here");
}
function handleAddTask() {
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
    DataService.postData(task)
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .finally(() => {
        modal.close();
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
