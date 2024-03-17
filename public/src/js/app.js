import {
  blogDescriptions,
  myServiceDescriptions,
  myServicePictures,
} from "./settings.js";
import Accordion from "./components/Accordion.js";
import ContactForm from "./components/ContactForm.js";
import ResponsiveImageManager from "./components/ResponsiveImageManager.js";
import Scroll from "./components/Scrool.js";
import showSection from "./components/SectionDisplay.js";
import TypingWriter from "./components/TypingWriter.js";
import ServiceActivation from "./components/ServiceActivation.js";

const app = {
  initContactForm: function () {
    const thisApp = this;

    thisApp.contactForm = new ContactForm();
  },

  initTypewriter: function () {
    const thisApp = this;

    const descryptionContainer = document.getElementById("description-main");

    if (!descryptionContainer) {
      return;
    }

    thisApp.typingWriter = new TypingWriter(
      descryptionContainer,
      myServiceDescriptions
    );
  },

  initTypewriterBlog: function () {
    const thisApp = this;

    const descryptionContainer = document.getElementById("description-blog");

    if (!descryptionContainer) {
      return;
    }

    thisApp.typingWriterBlog = new TypingWriter(
      descryptionContainer,
      blogDescriptions
    );
  },

  initScroll: function () {
    const thisApp = this;

    thisApp.scroll = new Scroll();
  },

  initService: function () {
    const thisApp = this;

    thisApp.serviceActivation = new ServiceActivation();
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

    thisApp.responsiveImageManager = new ResponsiveImageManager(
      ".myService-container",
      myServicePictures
    );
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.initTypewriter();
    thisApp.initTypewriterBlog();
    thisApp.initScroll();
    thisApp.initService();
    thisApp.initAccordion();
    thisApp.initShowSection();
    thisApp.initResponsiveImage();
  },
};

app.init();
