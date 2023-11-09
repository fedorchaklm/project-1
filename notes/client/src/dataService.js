class DataService {
  static async getData() {
    try {
      const res = await fetch("/api/notes");
      if (res.status === 401) {
        window.location.href = "/signin.html";
      } else {
        return res.json();
      }
    } catch (e) {
      console.log(e);
    }
  }

  static async postData(data) {
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-type": "aplication.json" },
        body: JSON.stringify(data),
      });
      return await res.text();
    } catch (e) {
      console.log(e);
    }
  }

  static async updateData(data) {
    try {
      const res = await fetch("/api/notes", {
        method: "PATCH",
        headers: { "Content-type": "aplication.json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }
  }
  

  static async setFavorite(data) {
    try {
      await fetch("/api/notes/favorite", {
        method: "PATCH",
        headers: { "Content-type": "aplication.json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }
  }

  static removeData(id) {
    return fetch(`/api/notes?id=${id}`, {
      method: "DELETE",
    });
  }
}
