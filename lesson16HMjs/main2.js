window.onload = function () {
  // 2
  // Завдання: Комбіноване keydown + keyup (інтерактивне меню)
  // M — показати, C — сховати, ↑/↓ — навігація

  const wrap = document.createElement("div");
  Object.assign(wrap.style, {
    width: "260px",
    margin: "20px auto",
    fontFamily: "system-ui, sans-serif",
  });
  document.body.appendChild(wrap);

  const hint = document.createElement("div");
  hint.textContent = "M — показати меню, C — сховати, ↑/↓ — навігація";
  Object.assign(hint.style, {
    fontSize: "14px",
    color: "#333",
    textAlign: "center",
    marginBottom: "8px",
  });
  wrap.appendChild(hint);

  const menu = document.createElement("ul");
  menu.setAttribute("aria-hidden", "true");
  Object.assign(menu.style, {
    listStyle: "none",
    padding: "6px",
    margin: 0,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 8px 24px rgba(0,0,0,.12)",
    display: "none",
  });
  wrap.appendChild(menu);

  const itemsText = ["Пункт 1", "Пункт 2", "Пункт 3"];
  itemsText.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    li.dataset.index = String(i);
    li.setAttribute("role", "menuitem");
    Object.assign(li.style, {
      padding: "10px 12px",
      borderRadius: "8px",
      cursor: "pointer",
    });
    li.addEventListener("mouseenter", () => setActive(i));
    li.addEventListener("mouseleave", () => setActive(activeIndex));
    menu.appendChild(li);
  });

  let activeIndex = 0;
  function setActive(i) {
    activeIndex = i;
    Array.from(menu.children).forEach((li, idx) => {
      li.style.background = idx === activeIndex ? "#eef6ff" : "transparent";
      li.setAttribute("aria-selected", idx === activeIndex ? "true" : "false");
    });
  }

  function showMenu() {
    menu.style.display = "block";
    menu.setAttribute("aria-hidden", "false");
    setActive(0);
  }
  function hideMenu() {
    menu.style.display = "none";
    menu.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyM") showMenu();
    if (e.code === "KeyC") hideMenu();

    if (menu.style.display === "none") return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((activeIndex + 1) % menu.children.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(
        (activeIndex - 1 + menu.children.length) % menu.children.length
      );
    }
  });

  document.addEventListener("click", (e) => {
    if (menu.style.display === "none") return;
    if (!menu.contains(e.target)) hideMenu();
  });

  // Додаткове завдання 'onMouseDown' і 'onMouseUp':!

  const dragArea = document.createElement("div");
  Object.assign(dragArea.style, {
    width: "520px",
    height: "320px",
    border: "2px solid #444",
    margin: "30px auto",
    position: "relative",
    background: "#f4f7fb",
    borderRadius: "12px",
    overflow: "hidden",
  });
  document.body.appendChild(dragArea);

  const dragItem = document.createElement("div");
  Object.assign(dragItem.style, {
    width: "60px",
    height: "60px",
    background: "#4f8cff",
    borderRadius: "12px",
    position: "absolute",
    left: "20px",
    top: "20px",
    boxShadow: "0 8px 22px rgba(0,0,0,.15)",
    cursor: "grab",
    userSelect: "none",
  });
  dragArea.appendChild(dragItem);

  let isDragging = false;
  let startMouseX = 0,
    startMouseY = 0;
  let startLeft = 0,
    startTop = 0;

  dragItem.onmousedown = function (e) {
    isDragging = true;
    dragItem.style.cursor = "grabbing";

    startMouseX = e.clientX;
    startMouseY = e.clientY;

    startLeft = parseFloat(dragItem.style.left) || 0;
    startTop = parseFloat(dragItem.style.top) || 0;

    e.preventDefault();
  };

  document.onmousemove = function (e) {
    if (!isDragging) return;

    const dx = e.clientX - startMouseX;
    const dy = e.clientY - startMouseY;

    let newLeft = startLeft + dx;
    let newTop = startTop + dy;

    const maxLeft = dragArea.clientWidth - dragItem.clientWidth;
    const maxTop = dragArea.clientHeight - dragItem.clientHeight;

    newLeft = Math.max(0, Math.min(maxLeft, newLeft));
    newTop = Math.max(0, Math.min(maxTop, newTop));

    dragItem.style.left = newLeft + "px";
    dragItem.style.top = newTop + "px";
  };

  document.onmouseup = function () {
    if (!isDragging) return;
    isDragging = false;
    dragItem.style.cursor = "grab";
  };
};
