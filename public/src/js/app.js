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

  initTitleBox: function () {
    const thisApp = this;

    thisApp.titleBox = document.querySelector(".title_box");

    const p = document.createElement("p");
    p.classList.add("welcome-text");
    p.innerHTML = "Cześć, nazywam się";

    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.setAttribute("id", "name");

    const h2 = document.createElement("h2");
    h2.classList.add("subtitle");
    h2.setAttribute("id", "description");

    thisApp.titleBox.appendChild(p);
    thisApp.titleBox.appendChild(h1);
    thisApp.titleBox.appendChild(h2);

    thisApp.typeWriter();
  },

  typeWriter: function () {
    const nameContainer = document.getElementById("name");
    const descriptionContainer = document.getElementById("description");

    const name = "Dariusz Wasilewski";
    let nameIndex = 0;

    const baseText = "i specjalizuję się w ";
    let baseTextIndex = 0;
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

    function typeWriterName() {
      if (nameIndex < name.length) {
        let currentChar = name.charAt(nameIndex);
        if (currentChar === "D" || currentChar === "W") {
          currentChar = `<span class="first-letter">${currentChar}</span>`;
        }
        nameContainer.innerHTML += currentChar;
        nameIndex++;
        setTimeout(typeWriterName, 100); // Szybkość pisania imienia i nazwiska
      } else {
        // Gdy imię i nazwisko zostanie wypisane, zacznij wypisywać bazowy tekst
        setTimeout(typeWriterBaseText, 500);
      }
    }

    function typeWriterBaseText() {
      if (baseTextIndex < baseText.length) {
        descriptionContainer.innerHTML += baseText.charAt(baseTextIndex);
        baseTextIndex++;
        setTimeout(typeWriterBaseText, 100); // Szybkość pisania bazowego tekstu
      } else {
        // Gdy bazowy tekst zostanie wypisany, zacznij wypisywać umiejętności
        setTimeout(typeWriterSkills, 500);
      }
    }

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

      document.getElementById("description").innerHTML = baseText + currentPart;
    }

    typeWriterName();
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.initTitleBox();
  },
};

app.init();
