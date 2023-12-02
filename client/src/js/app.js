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
      alert("Please enter your title");
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
        alert("Your message has been sent");
        document.querySelector("#inputTitle").value = "";
        document.querySelector("#inputEmail").value = "";
        document.querySelector("#inputTextArea").value = "";
      } else {
        alert("An error occurred");
      }
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
  },
};

app.init();
