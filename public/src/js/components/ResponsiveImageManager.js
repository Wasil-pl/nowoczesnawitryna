class ResponsiveImageManager {
  constructor(containerSelector, images) {
    const thisResponsiveImageManager = this;

    thisResponsiveImageManager.container =
      document.querySelector(containerSelector);
    thisResponsiveImageManager.images = images;

    if (!thisResponsiveImageManager.container) {
      return;
    }

    thisResponsiveImageManager.init();
  }

  addImages(src, alt, id) {
    const existingImage = document.getElementById(id);

    if (!existingImage) {
      const img = document.createElement("img");
      img.src = src;
      img.id = id;
      img.alt = alt;

      this.container.appendChild(img);
    }
  }

  chooseImage(screenWidth) {
    let selectedImages = [];

    this.images.forEach((image) => {
      if (
        (image.minWidth &&
          image.maxWidth &&
          screenWidth >= image.minWidth &&
          screenWidth <= image.maxWidth) ||
        (!image.minWidth && screenWidth <= image.maxWidth) ||
        (!image.maxWidth && screenWidth >= image.minWidth)
      ) {
        selectedImages.push(image);
      }
    });

    selectedImages.forEach((image) => {
      this.addImages(image.src, image.alt, image.id);
    });
  }

  init() {
    this.chooseImage(window.innerWidth);
    window.addEventListener("resize", () => {
      this.chooseImage(window.innerWidth);
    });
  }
}

export default ResponsiveImageManager;
