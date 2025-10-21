window.onload = function () {
  function createSvgLine(x1, y1, x2, y2, color, width) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "300");
    svg.style.border = "2px solid gray";

    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);
    line.setAttribute("stroke-linecap", "round");
    svg.appendChild(line);

    document.getElementById("svgContainer").appendChild(svg);
  }

  createSvgLine(50, 250, 450, 50, "blue", 5);

  createSvgLine(50, 50, 450, 250, "red", 3);
  createSvgLine(250, 20, 250, 280, "green", 2);

  // Task 5
  function createSvgRectangle(
    width,
    height,
    fillColor,
    strokeColor,
    strokeWidth
  ) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "300");
    svg.style.border = "2px solid gray";

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", 100);
    rect.setAttribute("y", 50);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    rect.setAttribute("stroke", strokeColor);
    rect.setAttribute("stroke-width", strokeWidth);

    svg.appendChild(rect);

    document.getElementById("svgContainer").appendChild(svg);
  }

  createSvgRectangle(200, 120, "lightblue", "navy", 4);
  createSvgRectangle(120, 80, "pink", "red", 2);
};
