window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add("fade-in");
    }
  });
});
