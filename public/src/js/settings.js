export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const API_URL =
  window.location.hostname === "localhost" ? "http://localhost:8000" : "";
