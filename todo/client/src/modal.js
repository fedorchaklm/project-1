class Modal {
  show() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
      <div>
        <div class="modal-header">
          <button id='close-modal-btn'>&#215;</button>
        </div>
        <div id='modal-content'></div>
      </div>
    `;
    const closeButton = document.getElementById("close-modal-btn");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  close() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";
  }
}
