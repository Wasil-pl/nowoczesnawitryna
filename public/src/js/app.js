import Accordion from "./components/Accordion.js";
import ContactForm from "./components/ContactForm.js";
import ResponsiveImageManager from "./components/ResponsiveImageManager.js";
import Scroll from "./components/Scrool.js";
import showSection from "./components/SectionDisplay.js";
import TypingWriter from "./components/TypingWriter.js";
import { myServicePictures } from "./settings.js";

const app = {
  initContactForm: function () {
    const thisApp = this;

    thisApp.contactForm = new ContactForm();
  },

  initTypewriter: function () {
    const thisApp = this;

    thisApp.typingWriter = new TypingWriter();
  },

  initScroll: function () {
    const thisApp = this;

    thisApp.scroll = new Scroll();
  },

  initAccordion: function () {
    const thisApp = this;

    thisApp.accordion = new Accordion();
  },

  initShowSection: function () {
    const thisApp = this;

    thisApp.showSection = new showSection();
  },

  initResponsiveImage: function () {
    const thisApp = this;

    thisApp.responsiveImage = new ResponsiveImageManager(
      ".myService-container",
      myServicePictures
    );
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.initTypewriter();
    thisApp.initScroll();
    thisApp.initAccordion();
    thisApp.initShowSection();
    thisApp.initResponsiveImage();
  },
};

app.init();
