class Presenter {
  constructor(bank) {
    this.bank = bank;

    this.clientsList = new ClientsList({
      clients: this.bank.clients,
      onDelete: this.handleDeleteClient,
      onAdd: this.handleAddClient,
      onEdit: this.handleEditClient
    });
    this.clientsList.drawClientsList();
  }

  handleEditClient = (clientId, formData) => {
    const client = new Client(
      formData.firstName,
      formData.lastName,
      Number(formData.balance),
      clientId
    );
    this.bank.updateClient(client);
    this.clientsList.drawClientsList();
  }

  handleAddClient = (formData) => {
    const client = new Client(
      formData.firstName,
      formData.lastName,
      Number(formData.balance),
      uniqueId()
    );
    this.bank.addClient(client);
    this.clientsList.drawClientsList();
  };

  handleDeleteClient = (clientId) => {
    this.bank.deleteClient(clientId);
    this.clientsList.drawClientsList();
  };
}
