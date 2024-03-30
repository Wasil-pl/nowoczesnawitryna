import { blogDescriptions, myServiceDescriptions } from "./settings.min.js";
import ContactForm from "./components/ContactForm.min.js";
import Scroll from "./components/Scrool.min.js";
import showSection from "./components/SectionDisplay.min.js";
import TypingWriter from "./components/TypingWriter.min.js";
import ShowText from "./components/ShowText.min.js";

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

  initShowSection: function () {
    const thisApp = this;

    thisApp.showSection = new showSection();
  },

  initShowText: function () {
    const thisApp = this;

    thisApp.showText = new ShowText();
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.initTypewriter();
    thisApp.initTypewriterBlog();
    thisApp.initScroll();
    thisApp.initShowSection();
    thisApp.initShowText();
  },
};

app.init();
