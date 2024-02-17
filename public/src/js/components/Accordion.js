class Accordion {
  constructor() {
    const thisAccordion = this;

    thisAccordion.initAccordion();
  }

  initAccordion() {
    const thisAccordion = this;

    thisAccordion.accordionItems = document.querySelectorAll(".accordion");
    thisAccordion.container = document.querySelector(".myService-container");

    const sectionNames = [
      "one-page",
      "multi-page",
      "firmowe",
      "portfolio",
      "zaawansowane",
    ];

    thisAccordion.accordionItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Check if the item already has the "active" class
        const isActive = item.classList.contains("active");
        const hasSectionName = sectionNames.some((sectionName) =>
          item.classList.contains(sectionName)
        );

        const h3Element = item.querySelector("h3");
        const sectionNameWithNumber = h3Element.textContent.trim();
        const sectionName = sectionNameWithNumber.slice(2).toLowerCase();

        // Remove "active" class from all accordion items
        thisAccordion.accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }

          sectionNames.forEach((name) => {
            if (!otherItem.classList.contains(name)) {
              thisAccordion.container.classList.remove(name);
            }
          });
        });

        // Add "active" class only if it wasn't already active
        if (!isActive) {
          item.classList.add("active");
        }

        if (!hasSectionName) {
          thisAccordion.container.classList.add(sectionName);
        }
      });
    });
  }
}

export default Accordion;
