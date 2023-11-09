document.addEventListener("DOMContentLoaded", () => {
  render();
  addEvents();
});

const getCreateBtn = () => document.querySelector(".create");
const getSaveBtn = () => document.querySelector(".save");
const getCancelBtn = () => document.querySelector(".cancel");

function addEvents() {
  getCreateBtn().addEventListener("click", () => {
    createNew();
  });
  getSaveBtn().addEventListener("click", () => {
    save();
  });
  getCancelBtn().addEventListener("click", () => {
    cancel();
  });
}

async function render() {
  const resData = await DataService.getData();
  const favoriteData = resData.filter(({ favorite }) => favorite === true);
  const nextData = resData.filter(({ favorite }) => favorite === false);
  const data = [...favoriteData, ...nextData];
  const container = document.querySelector(".notes");
  container.innerHTML = "";
  data.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("note");
    element.setAttribute("data-id", item.id);
    element.innerHTML = `<span class="title">${item.title}</span>
        <p class="content">${item.content}</p>`;
    element.onclick = () => {
      const notes = document.querySelectorAll(".note");
      notes.forEach((el) => el.classList.remove("selected"));
      element.classList.add("selected");
      renderSelectedNote(item);
    };
    container.appendChild(element);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    element.appendChild(controls);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.onclick = async (e) => {
      e.stopPropagation();
      console.log("> remove btn click");
      await DataService.removeData(item.id);
      render();
    };
    controls.appendChild(removeBtn);

    const favoriteBtn = document.createElement("button");
    favoriteBtn.classList.add("favorite");
    if (item.favorite) {
      favoriteBtn.classList.add("active");
    }
    favoriteBtn.onclick = async (e) => {
      e.stopPropagation();
      await DataService.setFavorite({
        id: item.id,
        favorite: !item.favorite,
      }); // sends POST to /api/notes/favorite { id, favorite }
      render();
    };
    controls.appendChild(favoriteBtn);
  });
}

function getTitle() {
  return document.querySelector(".note-title");
}
function getContent() {
  return document.querySelector(".note-content");
}

function makeData() {
  const selectedElement = document.querySelector(".note.selected");
  const id = selectedElement?.dataset.id;
  const title = getTitle();
  const content = getContent();
  const data = {
    id,
    title: title.value,
    content: content.value,
  };
  console.log(data);
  return data;
}

function clearNote() {
  const title = getTitle();
  const content = getContent();
  title.value = "";
  content.value = "";
}

async function createNew() {
  clearNote();
  const title = getTitle();
  const content = getContent();
  if (title.value || content.value) {
    const data = {
      title: title.value,
      content: content.value,
      flag: getFlag,
    };
    await DataService.postData(data);
  }
  await render();
}

async function save() {
  const data = makeData();
  if (data.id) {
    console.log("> update", data);
    await DataService.updateData(data);
    await render();
    const selector = `div.note[data-id="${data.id}"]`;
    const element = document.querySelector(selector);
    element.classList.add("selected");
  } else {
    const res = await DataService.postData(data);
    await render();
    const selector = `div.note[data-id="${res}"]`;
    const element = document.querySelector(selector);
    element.classList.add("selected");
  }
  getSaveBtn().setAttribute("disabled", true);
  getCancelBtn().setAttribute("disabled", true);
}

function renderSelectedNote(
  note = {
    title: "",
    content: "",
    flag: false,
  }
) {
  getSaveBtn().setAttribute("disabled", true);
  getCancelBtn().setAttribute("disabled", true);

  console.log("> selected", note);

  const prevData = makeData();
  getTitle().value = note.title;
  getContent().value = note.content;

  const handleChange = () => {
    console.log("> handleChange");
    const isChanged =
      prevData.title !== getTitle().value ||
      prevData.content !== getContent().value;
    if (isChanged) {
      getSaveBtn().removeAttribute("disabled");
      getCancelBtn().removeAttribute("disabled");
    }
  };

  getTitle().oninput = handleChange;
  getContent().oninput = handleChange;
}

function removeNote(id) {
  DataService.removeData(id);
  render();
  renderSelectedNote();
}

function updateNote() {
  const data = makeData();
  DataService.updateData(data);
  render();
}

async function cancel() {
  const selected = document.querySelector(".note.selected");
  const id = selected?.dataset.id;
  const notes = await DataService.getData();
  const note = notes.find((item) => item.id === id);
  renderSelectedNote(note);
}

function makeFavorite() {
  const favorite = document.querySelector(".favorite");
  favorite.onclick = favorite.classList.toggle(favorite);
}
