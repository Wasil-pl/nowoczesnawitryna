class TypingWriter {
  constructor(descryptionContainer, descriptions) {
    const thisTypeWriter = this;

    thisTypeWriter.descryptionContainer = descryptionContainer;
    thisTypeWriter.descriptions = descriptions;
    thisTypeWriter.initTypeWriter();
  }

  initTypeWriter() {
    const thisTypeWriter = this;

    let skillIndex = 0;
    let isDeleting = false;
    let descriptionIndex = 0;
    let timeoutId = null;

    function typeWriterSkills() {
      let typingSpeed = 100; // Szybkość pisania
      let deletingSpeed = 50; // Szybkość usuwania
      let newWordDelay = 500; // Opóźnienie przed pisaniem nowego słowa
      let deleteDelay = 1000; // Opóźnienie przed usunięciem

      let currentPart = `${thisTypeWriter.descriptions[skillIndex].substring(
        0,
        descriptionIndex
      )}`;

      if (isDeleting) {
        if (descriptionIndex > 0) {
          descriptionIndex--;
          timeoutId = setTimeout(typeWriterSkills, deletingSpeed); // Szybkość usuwania
        } else {
          isDeleting = false;
          skillIndex = (skillIndex + 1) % thisTypeWriter.descriptions.length;
          timeoutId = setTimeout(typeWriterSkills, newWordDelay); // Opóźnienie przed pisaniem nowego słowa
        }
      } else {
        if (descriptionIndex < thisTypeWriter.descriptions[skillIndex].length) {
          descriptionIndex++;
          timeoutId = setTimeout(typeWriterSkills, typingSpeed); // Szybkość pisania
        } else {
          isDeleting = true;
          timeoutId = setTimeout(typeWriterSkills, deleteDelay); // Opóźnienie przed usunięciem
        }
      }

      thisTypeWriter.descryptionContainer.innerHTML = currentPart;
    }

    typeWriterSkills();

    // Zatrzymujemy poprzednie zdarzenie setTimeout przed wywołaniem nowego
    thisTypeWriter.stop = function () {
      clearTimeout(timeoutId);
    };
  }
}

export default TypingWriter;
