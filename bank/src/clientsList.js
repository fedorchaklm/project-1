class ClientsList {
  constructor({ clients, onDelete, onAdd, onEdit }) {
    this.clients = clients;
    this.onDelete = onDelete;
    this.onAdd = onAdd;
    this.onEdit = onEdit;
  }

  drawClientsList() {
    let html = `
    <table>
    <caption>Clients list</caption>
    <thead>
      <th>ID</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Balance</th>
      <th>
        <button id="add-client-btn">Add New Client</button>
      </th>
    </thead>
    <tbody>`;

    for (let i = 0; i < this.clients.length; i++) {
      const client = this.clients[i];
      html += `
      <tr>
        <th>${client.id}</th>
        <th>${client.firstName}</th>
        <th>${client.lastName}</th>
        <th>${client.balance}</th>
        <th>
          <button class="delete-client-btn" data-client-id="${client.id}">Delete</button>
          <button class="edit-client-btn" data-client-id="${client.id}">Edit</button>
        </th>
      </tr>
    `;
    }
    html += `</tbody></table>`;
    const container = document.getElementById("clients-list");
    container.innerHTML = html;

    const deleteClientButtons = document.querySelectorAll(".delete-client-btn");
    deleteClientButtons.forEach((btn) => {
      btn.addEventListener("click", (evt) => {
        this.onDelete(evt.target.dataset.clientId);
      });
    });

    const addClientButton = document.getElementById("add-client-btn");
    addClientButton.addEventListener("click", (evt) => {
      const modal = new Modal();
      modal.show();
      new ClientForm({
        container: document.getElementById("modal-content"),
        onSubmit: (formData) => {
          this.onAdd(formData);
          modal.close();
        },
        text: 'Add Client'
      });
    });
    
    const editClientButtons = document.querySelectorAll(".edit-client-btn");
    editClientButtons.forEach((btn) => {
      btn.addEventListener("click", (evt) => {
        const clientId = evt.target.dataset.clientId;
        const client = this.clients.find((item) => item.id === clientId);
        const modal = new Modal();
        modal.show();
        new ClientForm({
          container: document.getElementById("modal-content"),
          onSubmit: (formData) => {
            this.onEdit(clientId, formData);
            modal.close();
          },
          formData: client,
          text: 'Edit Client'
        });
      });
    });
  }
}
