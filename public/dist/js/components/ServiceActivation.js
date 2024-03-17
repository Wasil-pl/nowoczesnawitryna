class ServiceActivation {
  constructor() {
    const thisServiceActivation = this;

    thisServiceActivation.initServiceActivation();
  }

  initServiceActivation() {
    const thisServiceActivation = this;
    const active = "active-service";

    thisServiceActivation.servicesButtons =
      document.querySelectorAll(".button-myService");
    thisServiceActivation.servicesExplanation = document.querySelectorAll(
      ".myService-descryption"
    );
    thisServiceActivation.servicesContainers =
      document.querySelectorAll(".myService-wrapper");
    thisServiceActivation.accordionItems =
      document.querySelectorAll(".accordion");
    thisServiceActivation.container_html =
      document.getElementById("service-html");
    thisServiceActivation.container_cms =
      document.getElementById("service-cms");

    thisServiceActivation.servicesButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const isActive = button.classList.contains(active);

        thisServiceActivation.servicesButtons.forEach((otherButton) => {
          if (otherButton !== button) {
            otherButton.classList.remove(active);
          }
        });

        if (!isActive) {
          button.classList.add(active);

          thisServiceActivation.accordionItems.forEach((item) => {
            console.log("item:", item);
            console.log("jestesmy w accordionie");
            const h3Element = item.querySelector("h3");
            const sectionNameWithNumber = h3Element.textContent.trim();
            let sectionName = sectionNameWithNumber.slice(2).toLowerCase();

            if (sectionName.includes("wordpress")) {
              sectionName = sectionName.replace(" ", "-");
            }

            if (sectionName === "one-page") {
              item.classList.add("active");
              thisServiceActivation.container_html.classList.add("one-page");
            }

            if (sectionName === "wordpress-one-page") {
              item.classList.add("active");
              thisServiceActivation.container_cms.classList.add(
                "wordpress-one-page"
              );
            }
          });
        }

        thisServiceActivation.servicesContainers.forEach((container) => {
          if (container.classList.contains(button.id)) {
            container.classList.add(active);
          } else {
            container.classList.remove(active);
          }
        });

        thisServiceActivation.servicesExplanation.forEach((explanation) => {
          if (explanation.classList.contains(button.id)) {
            explanation.classList.add(active);
          } else {
            explanation.classList.remove(active);
          }
        });
      });
    });
  }
}

export default ServiceActivation;
