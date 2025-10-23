window.onload = function () {
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");
  canvas.style.border = "2px solid gray";
  canvas.style.display = "block";
  canvas.style.margin = "20px auto";
  ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
  ctx.fillRect(60, 40, 180, 120);
  ctx.fillStyle = "rgba (0, 180, 0, 0.6)";
  ctx.fillRect(140, 80, 210, 140);
  ctx.fillStyle = "rgba(0, 80, 255, 0.6)";
  ctx.fillRect(240, 30, 160, 170);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("three rectangles overlapping", 130, 290);

  // 2
  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext("2d");
  canvas2.style.border = "2px solid gray";
  canvas2.style.display = "block";
  canvas2.style.margin = "20px auto";
  function fillGradient(color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, canvas2.width, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx2.fillStyle = gradient;
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
  }
  fillGradient("red", "blue");

  // 3
  const canvas3 = document.getElementById("canvas3");
  const ctx3 = canvas3.getContext("2d");
  canvas3.style.border = "2px solid gray";
  canvas3.style.display = "block";
  canvas3.style.margin = "20px auto";
  function drawLine(x1, y1, x2, y2, color, width) {
    ctx3.beginPath();
    ctx3.moveTo(x1, y1);
    ctx3.lineTo(x2, y2);
    ctx3.strokeStyle = color;
    ctx3.lineWidth = width;
    ctx3.stroke();
  }
  drawLine(20, 20, 280, 150, "green", 5);
  ctx3.fillStyle = "black";
  ctx3.font = "20px Arial";
  ctx3.fillText("a green line", 100, 180);
};
