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
        document.querySelector("#inputTitle").value = "";
        document.querySelector("#inputEmail").value = "";
        document.querySelector("#inputTextArea").value = "";
        return Swal.fire({
          icon: "success",
          title: "Wysłano",
          text: "Wiadomość została wysłana",
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      }
    });
  },

  typeWriter: function () {
    const descriptionContainer = document.getElementById("description");

    if (!descriptionContainer) {
      return;
    }

    const skills = [
      "tworzeniu stron internetowych",
      "tworzeniu aplikacji frontend",
      "projektowaniu backendu",
      "integracji baz danych",
      "programowaniu full-stack",
      "automatyzacji i testowaniu",
    ];
    let skillIndex = 0;
    let isDeleting = false;
    let descriptionIndex = 0;

    function typeWriterSkills() {
      let currentPart = `<span class="skill-style">${skills[
        skillIndex
      ].substring(0, descriptionIndex)}</span>`;

      if (isDeleting) {
        if (descriptionIndex > 0) {
          descriptionIndex--;
          setTimeout(typeWriterSkills, 50); // Szybkość usuwania
        } else {
          isDeleting = false;
          skillIndex = (skillIndex + 1) % skills.length;
          setTimeout(typeWriterSkills, 500); // Opóźnienie przed pisaniem nowego słowa
        }
      } else {
        if (descriptionIndex < skills[skillIndex].length) {
          descriptionIndex++;
          setTimeout(typeWriterSkills, 100); // Szybkość pisania
        } else {
          isDeleting = true;
          setTimeout(typeWriterSkills, 1000); // Opóźnienie przed usunięciem
        }
      }

      descriptionContainer.innerHTML = currentPart;
    }

    typeWriterSkills();
  },

  scroll: function () {
    window.addEventListener("scroll", () => {
      const elements = document.querySelectorAll(".animate");
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
          element.classList.add("fade-in");
        }
      });
    });
  },

  accordion: function () {
    const accordionItems = document.querySelectorAll(".accordion");

    accordionItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        // Check if the item already has the "active" class
        const isActive = item.classList.contains("active");
        console.log("isActive:", isActive);

        // Remove "active" class from all accordion items
        accordionItems.forEach((otherItem) => {
          console.log("jestes tutaj:", otherItem);

          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });

        // Add "active" class only if it wasn't already active
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.typeWriter();
    thisApp.scroll();
    thisApp.accordion();
  },
};

app.init();
