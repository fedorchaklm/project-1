class ClientForm {
  constructor({ 
    container,
    onSubmit,
    formData = {
      firstName: '',
      lastName: '',
      balance: '',
    },
    text = 'Submit'
  }) {
    this.container = container;
    this.onSubmit = onSubmit;
    this.container.innerHTML = `
      <form id="add-client-form">
        <div class="form-field">
          <label for="first-name">First name</label>
          <input type="text" id="first-name" name="firstName" autocomplete="off" value=${formData.firstName}>
        </div>
        <div class="form-field">
          <label for="last-name">Last name</label>
          <input type="text" id="last-name" name="lastName" autocomplete="off" value=${formData.lastName}>
        </div>
        <div class="form-field">
          <label for="balance">Balance</label>
          <input type="number" id="balance" name="balance" pattern="[0-9]+([,\.][0-9]+)?" autocomplete="off" value=${formData.balance}>
        </div>
        <div class="button-container">
          <button type="submit" id="submit-btn">${text}</button>
        </div>
      </form>
    `;
    this.addEvents();

  }

  validate(formData) {
    let isValid = true;
    const errors = {};

    if (formData.firstName === "") {
      isValid = false;
      errors.firstName = "First name shouldn't be empty";
    }
    if (formData.lastName === "") {
      isValid = false;
      errors.lastName = "Last name shouldn't be empty";
    }
    if (formData.balance === "" || isNaN(Number(formData.balance))) {
      isValid = false;
      errors.balance = "Balance should have number value";
    }

    return {
      isValid,
      errors,
    };
  }

  showErrors(errors) {
    function showErrorElement(formElement, message) {
      let errorElement = formElement.querySelector(".form-field-error");
      if (!errorElement) {
        errorElement = document.createElement("span");
        errorElement.classList.add("form-field-error");
        formElement.appendChild(errorElement);
      }
      errorElement.textContent = message;
    }

    if (errors.firstName) {
      const formElement = document.querySelector(
        'input[name="firstName"]'
      ).parentElement;
      showErrorElement(formElement, errors.firstName);
    }

    if (errors.lastName) {
      const formElement = document.querySelector(
        'input[name="lastName"]'
      ).parentElement;
      showErrorElement(formElement, errors.lastName);
    }

    if (errors.balance) {
      const formElement = document.querySelector(
        'input[name="balance"]'
      ).parentElement;
      showErrorElement(formElement, errors.balance);
    }
  }

  clearErrors() {
    const errors = document.querySelectorAll(".form-field-error");
    errors.forEach((el) => el.parentElement.removeChild(el));
  }

  clearForm(form) {
    form.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }

  addEvents() {
    const form = document.getElementById("add-client-form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const formData = {
        firstName: evt.target.querySelector('input[name="firstName"]').value,
        lastName: evt.target.querySelector('input[name="lastName"]').value,
        balance: evt.target.querySelector('input[name="balance"]').value,
      };
      this.clearErrors();
      const { isValid, errors } = this.validate(formData);
      if (!isValid) {
        this.showErrors(errors);
        return;
      }
      this.clearForm(evt.target);
      this.onSubmit(formData);
    });
  }
}
