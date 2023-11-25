window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate");
  console.log("elements:", elements);
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add("fade-in");
    } else {
      element.classList.remove("fade-in");
    }
  });
});
