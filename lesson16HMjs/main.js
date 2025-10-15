window.onload = function () {
  // Завдання 'onMouseOver' і 'onMouseOut':
  const box = document.createElement("div");
  box.textContent = "Наведі";
  document.body.appendChild(box);
  box.style.width = "200px";
  box.style.height = "200px";
  box.style.backgroundColor = "lightblue";
  box.style.border = "2px solid navy";
  box.style.textAlign = "center";
  box.style.lineHeight = "200px";
  box.style.fontWeight = "bold";
  box.style.transition = "backround-color 0.3s ease";
  box.style.margin = "50 px auto";
  box.onmouseover = function () {
    box.style.backgroundColor = "lightcoral";
    box.textContent = "Ой!";
  };
  box.onmouseout = function () {
    box.style.backgroundColor = "lightblue";
    box.textContent = "наведі мишь";
  };

  const textBlock = document.createElement("div");
  textBlock.textContent = "правий клік";
  document.body.appendChild(textBlock);
  Object.assign(textBlock.style, {
    width: "420px",
    minHeight: "120px",
    border: "2px dashed #555",
    padding: "16px",
    margin: "40px auto",
    background: "#e9f4ff",
    color: "#222",
    fontFamily: "sans-serif",
    lineHeight: "1.5",
    userSelect: "none",
    cursor: "default",
  });

  const customMenu = document.createElement("div");
  document.body.appendChild(customMenu);

  Object.assign(customMenu.style, {
    position: "fixed",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
    padding: "5px",
    display: "none",
    zIndex: "999",
  });

  const menuOptions = [
    { label: "Вирівняти по центру", action: "center" },
    { label: "Вирівняти по правому краю", action: "right" },
    { label: "Вирівняти по лівому краю", action: "left" },
    { label: "Приховати елемент", action: "hide" },
  ];

  menuOptions.forEach(({ label, action }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.dataset.action = action;
    Object.assign(btn.style, {
      display: "block",
      width: "100%",
      border: "none",
      background: "transparent",
      padding: "10px",
      textAlign: "left",
      borderRadius: "8px",
      cursor: "pointer",
    });
    btn.onmouseenter = () => (btn.style.background = "#f2f2f2");
    btn.onmouseleave = () => (btn.style.background = "transparent");
    customMenu.appendChild(btn);
  });

  textBlock.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    customMenu.style.display = "block";
    customMenu.style.left = e.clientX + "px";
    customMenu.style.top = e.clientY + "px";
  });

  document.addEventListener("click", (e) => {
    if (!customMenu.contains(e.target)) {
      customMenu.style.display = "none";
    }
  });

  customMenu.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;

    if (action === "center") textBlock.style.textAlign = "center";
    if (action === "right") textBlock.style.textAlign = "right";
    if (action === "left") textBlock.style.textAlign = "left";
    if (action === "hide") textBlock.style.display = "none";

    customMenu.style.display = "none";
  });
  // Завдання 'onMouseOver' і 'onMouseOut':
  const img = document.createElement("img");
  img.src = "https://picsum.photos/250";
  img.alt = "Фото для ефекту наведення";
  document.body.appendChild(img);

  Object.assign(img.style, {
    display: "block",
    margin: "40px auto",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  });

  img.onmouseover = function () {
    img.style.transform = "scale(1.2)";
    img.style.boxShadow = "0 0 25px rgba(0, 150, 255, 0.7)";
  };

  img.onmouseout = function () {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  };
  // Завдання 'keyup':
  // 1
  const field = document.createElement("div");
  Object.assign(field.style, {
    width: "480px",
    height: "300px",
    border: "2px solid #333",
    margin: "30px auto",
    position: "relative",
    background: "#f7f9fc",
    borderRadius: "12px",
    overflow: "hidden",
  });
  document.body.appendChild(field);

  // Об'єкт (квадрат)
  const player = document.createElement("div");
  Object.assign(player.style, {
    width: "40px",
    height: "40px",
    background: "#ff6b6b",
    borderRadius: "8px",
    position: "absolute",
    left: "20px",
    top: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,.12)",
  });
  field.appendChild(player);

  // Стан клавіш
  const pressed = new Set();
  // Позиція і швидкість
  let x = 20,
    y = 20;
  const speed = 220; // px/s

  // Щоб сторінка не скролилася стрілками
  window.addEventListener("keydown", (e) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
    ) {
      e.preventDefault();
    }
  });

  // Натискання — додаємо в set; Відпускання — прибираємо
  document.addEventListener("keydown", (e) => pressed.add(e.key));
  document.addEventListener("keyup", (e) => pressed.delete(e.key));

  // Ігровий цикл
  let prev = performance.now();
  function tick(now) {
    const dt = (now - prev) / 1000; // у секундах
    prev = now;

    let vx = 0,
      vy = 0;
    if (pressed.has("ArrowLeft")) vx -= 1;
    if (pressed.has("ArrowRight")) vx += 1;
    if (pressed.has("ArrowUp")) vy -= 1;
    if (pressed.has("ArrowDown")) vy += 1;

    // Нормалізація діагоналі
    if (vx !== 0 && vy !== 0) {
      const k = Math.SQRT1_2; // ~0.707
      vx *= k;
      vy *= k;
    }

    x += vx * speed * dt;
    y += vy * speed * dt;

    // Межі поля
    const maxX = field.clientWidth - player.clientWidth;
    const maxY = field.clientHeight - player.clientHeight;
    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};
