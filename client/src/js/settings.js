export const select = {
  templatesOf: {
    home: "#template-home",
    aboutMe: "#template-aboutMe",
    portfolio: "#template-portfolio",
  },
  containerOf: {
    home: "#home-wrapper",
    pages: "#pages",
    aboutMe: "#aboutMe-wrapper",
    portfolio: "#portfolio-wrapper",
  },
  nav: {
    links: ".nav-item a",
  },
};

export const classNames = {
  active: "active",
  hidden: "hidden",
};

export const templates = {
  home: Handlebars.compile(
    document.querySelector(select.templatesOf.home).innerHTML
  ),
  aboutMe: Handlebars.compile(
    document.querySelector(select.templatesOf.aboutMe).innerHTML
  ),
  portfolio: Handlebars.compile(
    document.querySelector(select.templatesOf.portfolio).innerHTML
  ),
};
