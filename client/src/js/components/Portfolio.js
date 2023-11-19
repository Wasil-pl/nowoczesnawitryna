import { select, templates } from "../settings.js";
import utils from "../utils.js";

class Portfolio {
  constructor() {
    const thisPortfolio = this;

    thisPortfolio.render();
  }

  render() {
    const thisPortfolio = this;

    const generatedHTML = templates.portfolio();
    thisPortfolio.element = utils.createDOMFromHTML(generatedHTML);
    const portfolioContainer = document.querySelector(
      select.containerOf.portfolio
    );
    portfolioContainer.appendChild(thisPortfolio.element);
  }
}

export default Portfolio;
