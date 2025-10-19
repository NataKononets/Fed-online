window.onload = function() {
    const STROGE_KEY = "userMessage";
    const inputEl = document.getElementById("userInput");
    const saveBtn = document.getElementById("saveBtn");
    const showBtn = document.getElementById("showBtn");
const clearBtn = document.getElementById("clearBtn");
    const outputEl = document.getElementById("output");
    function render(message) {
        outputEl.textContent = message;
    }
    saveBtn.addEventListener("click", () => {
        const value = inputEl.value.trim();
        if (!value) {
            render("Nothing to save: input is empty.");
            return;
        }
        this.sessionStorage.setItem(STRAGE_KEY, value);
        render(`Saved message: "${value}"`);
        inputEl.value = "";
        inputEl.focus();
    });
    showBtn.addEventListener("click", () => {
        const stored = sessionStorage.getItem(STRAGE_KEY);
        if (stored === null) {
            render("No saved value found in sessionStorage");}
            else {
            render(`stored value: "${stored}"`);
            }        
clearBtn.addEventListener("click", () => {
        sessionStorage.removeItem(STR0GE_KEY);
        render("Cleared saved message from sessionStorage");
    });
    });     
 
    const SETTINGS_KEY = "userSettings";
    const bgColor = document.getElementById("bgColor");
    const fontSize = document.getElementById("fontSize");
    const saveSettingsBtn = document.getElementById("saveSettingsBtn");
    const resertBtn = document.getElementById("resertBtn");
function applySettings(settings) {
        document.body.style.backgroundColor = settings.bgColor;
        document.body.style.fontSize = settings.fontSize;
        bgColor.value = settings.bgColor;
        fontSize.value = settings.fontSize;
    }
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        applySettings(settings);}
        else {
        applySettings({ bgColor: "#ffffff", fontSize: 16 });
    }
    saveSettingsBtn.addEventListener("click", () => {
        const userSettings = {
            bgColor: bgColor.value,
            fontSize: parseInt(fontSize.value, 10)
        };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(userSettings));
        applySettings(userSettings);
        alert ("Settings saved!");
    });
    resertBtn.addEventListener("click", () => {
        localStorage.removeItem(SETTINGS_KEY);
        applySettings({ bgColor: "#ffffff", fontSize: 16 });
        alert("Settings reset to default!");
    });

      // TO-DO LIST (localStorage)
  const TODOS_KEY = "todos";
  const todoInput   = document.getElementById("todoInput");
  const addTodoBtn  = document.getElementById("addTodoBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const todoListEl  = document.getElementById("todoList");
  let todos = [];
  function loadTodos() {
    const raw = localStorage.getItem(TODOS_KEY);
    todos = raw ? JSON.parse(raw) : [];
  }
  function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }

  function renderTodos() {
    todoListEl.innerHTML = "";
    todos.forEach(task => {
      const li = document.createElement("li");
      li.style.margin = "6px 0";
      li.dataset.id = task.id;

      const span = document.createElement("span");
      span.textContent = task.text;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.style.marginLeft = "12px";

      li.appendChild(span);
      li.appendChild(delBtn);
      todoListEl.appendChild(li);
    });
  }
  function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return; 

    const task = { id: String(Date.now()), text };
    todos.push(task);
    saveTodos();
    renderTodos();

    todoInput.value = "";
    todoInput.focus();
  }

  function handleListClick(e) {
    if (e.target.tagName !== "BUTTON") return;
    const li = e.target.closest("li");
    const id = li?.dataset.id;
    if (!id) return;

    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
  }

  function clearAll() {
    if (!todos.length) return;
    if (!confirm("Delete all tasks? / Удалить все задачи?")) return;
    todos = [];
    saveTodos();
    renderTodos();
  }

  loadTodos();
  renderTodos();

  addTodoBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo(); 
  });
  todoListEl.addEventListener("click", handleListClick);
  clearAllBtn.addEventListener("click", clearAll); 
// JSON OBJECT CREATION
  const createJsonBtn = document.getElementById("createJsonBtn");
  const saveJsonBtn   = document.getElementById("saveJsonBtn");
  const jsonOutput    = document.getElementById("jsonOutput");

  let userProfile = {};
  let jsonText = "";
х
  createJsonBtn.addEventListener("click", () => {
    userProfile = {
      name: "Natalia Kononets",
      age: 37,
      city: "Cherson",
      languages: ["Polish", "Ukrainian", "English"],
      education: {
        degree: "Bachelor",
        field: "Pedagogy",
        year: 2010
      },
      active: true,
      projects: [
        { title: "Nursery Superhero Day", completed: true },
        { title: "Netflix Clone Website", completed: false }
      ]
    };
    jsonText = JSON.stringify(userProfile, null, 2);
    jsonOutput.textContent = jsonText;
  });

  saveJsonBtn.addEventListener("click", () => {
    if (!jsonText) {
      alert(" Create JSON first!");
      return;
    }
    localStorage.setItem("userProfileJSON", jsonText);
    alert(" JSON saved to localStorage!");
  });
}