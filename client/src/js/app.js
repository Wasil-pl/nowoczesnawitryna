import { emailRegex } from "./settings.js";

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
    const name = document.querySelector("#inputName").value;
    const email = document.querySelector("#inputEmail").value;
    const message = document.querySelector("#inputTextArea").value;

    if (name === "") {
      alert("Please enter your name");
      return false;
    }

    if (email === "") {
      alert("Please enter your email");
      return false;
    }

    if (!emailRegex.test(email)) {
      console.log("email:", email);
      alert("Please enter a valid email");
      return false;
    }

    if (message === "") {
      alert("Please enter your message");
      return false;
    }

    return true;
  },

  sendEmail: function () {
    const data = {
      name: document.querySelector("#inputName").value,
      email: document.querySelector("#inputEmail").value,
      message: document.querySelector("#inputTextArea").value,
    };

    return console.log("data:", data);
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
  },
};

app.init();
