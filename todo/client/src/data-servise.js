class DataService {
  static getData() {
    return fetch("http://localhost:3005/api").then((data) => data.json());
  }

  static postData(data) {
    return fetch("http://localhost:3005/api", {
      method: "POST",
      headers: { "Content-type": "aplication.json" },
      body: JSON.stringify(data),
    });
  }

  static updateData(data) {
    return fetch("http://localhost:3005/api", {
      method: "PATCH",
      headers: { "Content-type": "aplication.json" },
      body: JSON.stringify(data),
    });
  }

  static deleteData(id) {
    return fetch(`http://localhost:3005/api?id=${id}`, {
      method: "DELETE",
    });
  }
}
