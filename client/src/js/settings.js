export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

let API_URL;
if (window.location.hostname === "localhost") {
  API_URL = "http://localhost:8000";
} else {
  API_URL = "https://nowoczesnawitryna.pl";
}
export { API_URL };
