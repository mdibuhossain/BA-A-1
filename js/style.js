window.addEventListener("load", (event) => {
  const svgObjectGreen = document.getElementsByClassName("green-svg");

  const hoverableItems = document.querySelectorAll(".hoverable-item");
  hoverableItems.forEach((item) => {
    const svgObject = item.querySelector(".white-svg-hover");

    const svgDocument = svgObject.contentDocument;
    const svgElement = svgDocument.querySelector("svg");

    svgElement.style.fill = "white"; // Add transition for smooth hover effect
    svgElement.style.transition = "fill 0.15s ease-in-out";

    item.addEventListener("mouseover", () => {
      svgElement.style.fill = "black"; // Hover color
    });

    item.addEventListener("mouseout", () => {
      svgElement.style.fill = "white"; // Reset to original color
    });
  });

  for (let i = 0; i < svgObjectGreen.length; i++) {
    const svgDocument = svgObjectGreen[i].contentDocument;
    const svgElement = svgDocument.querySelector("svg");
    svgElement.style.fill = "#00c6a9";
  }
});
