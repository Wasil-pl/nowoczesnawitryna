/* eslint-disable no-undef */
import { API_URL, emailRegex } from "./settings.js";

const app = {
  initContactForm: function () {
    const thisApp = this;

    thisApp.contactForm = document.querySelector(".contact-form");
    thisApp.contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (thisApp.isValid()) {
        thisApp.sendEmail();
      }
    });
  },

  isValid: function () {
    const title = document.querySelector("#inputTitle").value;
    const email = document.querySelector("#inputEmail").value;
    const message = document.querySelector("#inputTextArea").value;

    if (title === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać tytuł wiadomości",
      });

      return false;
    }

    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać adres email",
      });

      return false;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać poprawny adres email",
      });

      return false;
    }

    if (message === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać treść wiadomości",
      });

      return false;
    }

    return true;
  },

  sendEmail: function () {
    const data = {
      title: document.querySelector("#inputTitle").value,
      email: document.querySelector("#inputEmail").value,
      message: document.querySelector("#inputTextArea").value,
    };

    fetch(`${API_URL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Wysłano",
          text: "Wiadomość została wysłana",
        });
        document.querySelector("#inputTitle").value = "";
        document.querySelector("#inputEmail").value = "";
        document.querySelector("#inputTextArea").value = "";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      }
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
  },
};

app.init();
