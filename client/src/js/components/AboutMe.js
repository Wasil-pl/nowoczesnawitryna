import { select, templates } from "../settings.js";
import utils from "../utils.js";

class AboutMe {
  constructor() {
    const thisAboutMe = this;

    thisAboutMe.render();
  }

  render() {
    const thisAboutMe = this;

    const generatedHTML = templates.aboutMe();
    thisAboutMe.element = utils.createDOMFromHTML(generatedHTML);
    const aboutMeContainer = document.querySelector(select.containerOf.aboutMe);
    aboutMeContainer.appendChild(thisAboutMe.element);
  }
}

export default AboutMe;
