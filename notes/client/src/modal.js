class Modal {
  static show() {
    const modalContainer = document.querySelector("modal-container");
    modalContainer.innerHTML = `<div class="form-container">
    <form id=""> 
      <div class="form-field">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="title"/>
      </div>
      <div class="form-field">
        <label for="content">content</label>
        <textarea id="content" rows="5" name="content">content</textarea>
      </div>
      <div class="form-buttons">
        <button>Create</button>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </form>
    </div>`;
  }
}
