class showSection {
  constructor() {
    const thisSection = this;

    thisSection.showSection();
  }

  showSection() {
    const thisSection = this;

    thisSection.section = document.getElementById("mySkills");

    if (!thisSection.section) {
      return;
    }

    const button = document.getElementById("showSection");
    const buttonName = button.innerHTML;

    button.addEventListener("click", () => {
      button.innerHTML = button.innerHTML === buttonName ? "Ukryj" : buttonName;

      if (thisSection.section.style.maxHeight) {
        thisSection.section.style.maxHeight = null;
      } else {
        thisSection.section.style.maxHeight =
          thisSection.section.scrollHeight + "px";
      }
    });
  }
}

export default showSection;
