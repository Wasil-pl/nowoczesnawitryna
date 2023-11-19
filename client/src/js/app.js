import AboutMe from "./components/AboutMe.js";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import { select, classNames } from "./settings.js";

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace("#/", "");

    let pageMatchingHash = thisApp.pages[0].id;
    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener("click", function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute("href").replace("#", "");
        console.log("id:", id);

        thisApp.activatePage(id);

        // window.history.pushState({}, "", id);
        window.location.hash = "#/" + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    /* add class active to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.active, page.id == pageId);
    }
    /* add class active to matching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.active,
        link.getAttribute("href") == "#/" + pageId
      );
    }
  },

  initHome: function () {
    new Home();
  },

  initAboutMe: function () {
    new AboutMe();
  },

  initPortfolio: function () {
    new Portfolio();
  },

  init: function () {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initHome();
    thisApp.initAboutMe();
    thisApp.initPortfolio();
  },
};

app.init();
