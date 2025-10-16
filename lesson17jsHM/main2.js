window.onload = function () {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");
  const taskList = document.getElementById("taskList");
  const err = document.getElementById("err");
  const emptyHint = document.getElementById("emptyHint");

  function showError(msg = "") {
    err.textContent = msg;
  }

  function updateEmptyHint() {
    emptyHint.style.display = taskList.children.length ? "none" : "block";
  }

  function createTaskItem(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.className = "btn-del";
    delBtn.type = "button";
    delBtn.textContent = "Видалити";
    delBtn.setAttribute("data-action", "delete");

    li.appendChild(span);
    li.appendChild(delBtn);
    return li;
  }

  function addTask() {
    showError();
    const value = taskInput.value.trim();
    if (value === "") {
      showError("Введи назву задачі (не може бути порожньою).");
      taskInput.focus();
      return;
    }
    const item = createTaskItem(value);
    taskList.appendChild(item);
    taskInput.value = "";
    taskInput.focus();
    updateEmptyHint();
  }

  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  taskList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action='delete']");
    if (!btn) return;
    const li = btn.closest("li");
    if (li) {
      li.remove();
      updateEmptyHint();
    }
  });

  clearBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
    updateEmptyHint();
    taskInput.focus();
  });

  updateEmptyHint();
};
