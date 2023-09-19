class Client {
  constructor(firstName, lastName, balance, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.id = id;
  }
}

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.clients = [];
    this.balance = 0;
    this.comission = 0.01;
    this.load();
  }

  addClient(client) {
    this.clients.push(client);
    this.save();
  }

  deleteClient(clientId) {
    const index = this.clients.findIndex((item) => item.id === clientId);
    this.clients.splice(index, 1);
    this.save();
  }

  updateClient(client) {
    const index = this.clients.findIndex((item) => item.id === client.id);
    this.clients[index] = client; 
    this.save();
  }

  save() {
    const data = {
      bankName: this.bankName,
      clients: this.clients.map((item) => ({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        balance: item.balance,
      })),
      balance: this.balance,
    };
    localStorage.setItem("bank", JSON.stringify(data));
  }

  load() {
    const dataString = localStorage.getItem("bank");
    if (!dataString) {
      return;
    }
    try {
      const data = JSON.parse(dataString);
      this.clients = data.clients.map(
        (item) =>
          new Client(item.firstName, item.lastName, item.balance, item.id)
      );
      this.balance = data.balance;
      this.bankName = data.bankName;
    } catch (e) {
      console.error("Invalid modal found");
      localStorage.removeItem("bank");
      window.location.reload();
    }
  }

  sendMoney(fromId, toId, amount) {
    const from = this.clients.find((item) => item.id === fromId);
    const to = this.clients.find((item) => item.id === toId);
    if (!from) {
      throw new Error(`${fromId} not found`);
    }
    if (!to) {
      throw new Error(`${toId} not found`);
    }

    const value = amount * (this.comission + 1);

    if (from.balance < value) {
      throw new Error(`${fromId} out of money`);
    }

    from.balance -= value;
    to.balance += amount;
    this.balance += amount * this.comission;
    console.log("send money success ");
  }

  trySendMoney(fromId, toId, amount) {
    try {
      this.sendMoney(fromId, toId, amount);
    } catch (e) {
      console.log("> Handled an Error", e.message);
    }
  }
}

