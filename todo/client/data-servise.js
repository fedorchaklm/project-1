class DataServise {
  getData() {
    return fetch("http://localhost:3005/api").then((data) => data.json());
  }

  postData(data) {
    return fetch("http://localhost:3005/api", {
      method: "POST",
      headers: { "Content-type": "aplication.json" },
      body: JSON.stringify(data),
    });
  }
}
