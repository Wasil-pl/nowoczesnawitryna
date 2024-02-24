import Accordion from "./components/Accordion.js";
import ContactForm from "./components/ContactForm.js";
import CookiesConsent from "./components/CookieConsent.js";
import ResponsiveImageManager from "./components/ResponsiveImageManager.js";
import Scroll from "./components/Scrool.js";
import showSection from "./components/SectionDisplay.js";
import TypingWriter from "./components/TypingWriter.js";
import { cookieContent, myServicePictures } from "./settings.js";

const app = {
  initContactForm: function () {
    const thisApp = this;

    thisApp.contactForm = new ContactForm();
  },

  initCookiesConsent: function () {
    const thisApp = this;

    thisApp.cookiesConsent = new CookiesConsent(cookieContent);

    const settingsCookiesButton = document.querySelector(
      ".settings-cookies-button"
    );

    settingsCookiesButton.addEventListener("click", function () {
      thisApp.cookiesConsent.createBanner();
    });
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

    thisApp.initCookiesConsent();
    thisApp.initContactForm();
    thisApp.initTypewriter();
    thisApp.initScroll();
    thisApp.initAccordion();
    thisApp.initShowSection();
    thisApp.initResponsiveImage();
  },
};

app.init();
