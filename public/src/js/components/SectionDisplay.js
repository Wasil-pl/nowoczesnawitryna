import utils from "../utils.min.js";

class ShowSection {
  constructor() {
    const thisSection = this;

    thisSection.showSectionToggle();
  }

  showSectionToggle() {
    const thisSection = this;

    thisSection.show = utils.showContent("showSection", "mySkills", "Ukryj");
  }
}

export default ShowSection;
