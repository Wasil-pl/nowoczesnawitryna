class Accordion {
  constructor() {
    const thisAccordion = this;

    thisAccordion.initAccordion();
  }

  initAccordion() {
    const thisAccordion = this;

    thisAccordion.accordionItems = document.querySelectorAll(".accordion");
    thisAccordion.container_html = document.getElementById("service-html");
    thisAccordion.container_cms = document.getElementById("service-cms");

    const sectionNames = [
      "one-page",
      "multi-page",
      "firmowe",
      "portfolio",
      "zaawansowane",
      "wordpress-one-page",
      "wordpress-multi-page",
      "wordpress-sklep",
      "wordpress-firmowe",
      "wordpress-zaawansowane",
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
        let sectionName = sectionNameWithNumber.slice(2).toLowerCase();

        if (sectionName.includes("wordpress")) {
          sectionName = sectionName.replace(" ", "-");
        }

        // Remove "active" class from all accordion items
        thisAccordion.accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }

          sectionNames.forEach((name) => {
            if (!otherItem.classList.contains(name)) {
              if (thisAccordion.container_html) {
                thisAccordion.container_html.classList.remove(name);
              }

              if (thisAccordion.container_cms) {
                thisAccordion.container_cms.classList.remove(name);
              }
            }
          });
        });

        // Add "active" class only if it wasn't already active
        if (!isActive) {
          item.classList.add("active");
        }

        // Add section name to the container

        if (thisAccordion.container_html) {
          if (!hasSectionName) {
            thisAccordion.container_html.classList.add(sectionName);
          }
        }

        if (thisAccordion.container_cms) {
          if (!hasSectionName) {
            thisAccordion.container_cms.classList.add(sectionName);
          }
        }
      });
    });
  }
}

export default Accordion;
