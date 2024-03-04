export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const API_URL =
  window.location.hostname === "localhost" ? "http://localhost:8000" : "";

export const myServicePictures = [
  {
    src: "images/multi-page-background.webp",
    id: "multi-page-img",
    alt: "multi-page-background",
    minWidth: 1201,
    maxWidth: Infinity,
  },
  {
    src: "images/multi-page-background-mobile-90.webp",
    id: "multi-page-img",
    alt: "multi-page-background",
    minWidth: 993,
    maxWidth: 1200,
  },
  {
    src: "images/multi-page-background-mobile.webp",
    id: "multi-page-img",
    alt: "multi-page-background",
    maxWidth: 992,
  },
  {
    src: "images/one-page-background.webp",
    id: "one-page-img",
    alt: "one-page-background",
    minWidth: 1201,
    maxWidth: Infinity,
  },
  {
    src: "images/one-page-background-mobile-90.webp",
    id: "one-page-img",
    alt: "one-page-background",
    minWidth: 993,
    maxWidth: 1200,
  },
  {
    src: "images/one-page-background-mobile.webp",
    id: "one-page-img",
    alt: "one-page-background",
    maxWidth: 992,
  },
  {
    src: "images/portfolio-background.webp",
    id: "portfolio-img",
    alt: "portfolio-background",
    minWidth: 1201,
    maxWidth: Infinity,
  },
  {
    src: "images/portfolio-background-mobile-90.webp",
    id: "portfolio-img",
    alt: "portfolio-background",
    minWidth: 993,
    maxWidth: 1200,
  },
  {
    src: "images/portfolio-background-mobile.webp",
    id: "portfolio-img",
    alt: "portfolio-background",
    maxWidth: 992,
  },
  {
    src: "images/firmowe-background.webp",
    id: "firmowe-img",
    alt: "firmowe-background",
    minWidth: 1201,
    maxWidth: Infinity,
  },
  {
    src: "images/firmowe-background-mobile-90.webp",
    id: "firmowe-img",
    alt: "firmowe-background",
    minWidth: 993,
    maxWidth: 1200,
  },
  {
    src: "images/firmowe-background-mobile.webp",
    id: "firmowe-img",
    alt: "firmowe-background",
    maxWidth: 992,
  },
  {
    src: "images/zaawansowane-background.webp",
    id: "zaawansowane-img",
    alt: "zaawansowane-background",
    minWidth: 1201,
    maxWidth: Infinity,
  },
  {
    src: "images/zaawansowane-background-mobile-90.webp",
    id: "zaawansowane-img",
    alt: "zaawansowane-background",
    minWidth: 993,
    maxWidth: 1200,
  },
  {
    src: "images/zaawansowane-background-mobile.webp",
    id: "zaawansowane-img",
    alt: "zaawansowane-background",
    maxWidth: 992,
  },
];

export const myServiceDescriptions = [
  "projektowaniu i programowaniu stron internetowych",
  "tworzeniu responsywnych i z optymalizowanych stron internetowych",
  "realizowaniu indywidualnych projektów webowych",
  "integracji baz danych",
  "automatyzacji i testowaniu",
];

export const blogDescriptions = [
  "Witaj na moim blogu!",
  "Znajdziesz tu wiele ciekawych artykułów, które pomogą Ci w rozwoju",
  "Są tu moje inspiracje, przemyślenia i doświadczenia",
  "Zapraszam do lektury!",
];
