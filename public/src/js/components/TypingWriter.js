class TypingWriter {
  constructor() {
    const thisTypeWriter = this;

    thisTypeWriter.initTypeWriter();
  }

  initTypeWriter() {
    const descryptionContainer = document.getElementById("description");

    if (!descryptionContainer) {
      return;
    }

    const skills = [
      "projektowaniu i programowaniu stron internetowych",
      "tworzeniu responsywnych i z optymalizowanych stron internetowych",
      "realizowaniu indywidualnych projektów webowych",
      "integracji baz danych",
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

      descryptionContainer.innerHTML = currentPart;
    }

    typeWriterSkills();
  }
}

export default TypingWriter;
