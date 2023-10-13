const form = document.getElementById("signin-form");
form.onsubmit = async (evt) => {
  evt.preventDefault();
  const data = {
    username: evt.target.querySelector('input[name="username"]').value,
    password: evt.target.querySelector('input[name="password"]').value,
  };
  try {
    const res = await fetch("http://localhost:3005/api/auth/signin", {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(data),
    });
    if (res.status != 200) {
      const message = await res.text();
      throw new Error(message);
    }
    window.location.href = '/';
  } catch (err) {
    const error = document.getElementById("error");
    error.classList.remove('hidden');
    error.textContent = err.message;
  }
};
