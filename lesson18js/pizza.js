window.onload = function () {
  const form = document.getElementById("pizzaForm");
  const totalEl = document.getElementById("total");
  const breakdown = document.getElementById("breakdown");
  const body = document.body;

  body.style.fontFamily = "Poppins, sans-serif";
  body.style.backgroundColor = "#fff7ed";
  body.style.margin = "40px";
  body.style.color = "#333";
  body.style.lineHeight = "1.6";

  document.querySelector("h2").style.textAlign = "center";
  document.querySelector("h2").style.color = "#d35400";

  form.style.background = "#fff";
  form.style.padding = "20px";
  form.style.border = "2px solid #f0c27b";
  form.style.borderRadius = "12px";
  form.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  form.style.maxWidth = "400px";
  form.style.margin = "20px auto";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";

  const fieldsets = document.querySelectorAll("fieldset");
  fieldsets.forEach((fs) => {
    fs.style.border = "1px solid #f0c27b";
    fs.style.borderRadius = "8px";
    fs.style.padding = "10px";
    fs.style.background = "#fffaf1";
  });

  breakdown.style.margin = "15px auto";
  breakdown.style.maxWidth = "400px";
  breakdown.style.fontSize = "16px";
  breakdown.style.color = "#555";
  breakdown.style.background = "#fff";
  breakdown.style.border = "1px dashed #ccc";
  breakdown.style.borderRadius = "8px";
  breakdown.style.padding = "10px";

  const priceEl = document.querySelector(".price");
  priceEl.style.textAlign = "center";
  priceEl.style.fontSize = "22px";
  priceEl.style.fontWeight = "bold";
  priceEl.style.color = "#e67e22";
  priceEl.style.marginTop = "15px";

  const pizzaPrices = {
    Margherita: 100,
    Pepperoni: 120,
    Veggie: 110,
    "Four Cheese": 140,
  };
  const sizeAdd = { small: 0, medium: 50, large: 100 };

  function calc() {
    const pizza = document.getElementById("pizza").value;
    const sizeRadio = document.querySelector('input[name="size"]:checked');
    const toppings = [
      ...document.querySelectorAll('input[name="topping"]:checked'),
    ];

    const base = pizza ? pizzaPrices[pizza] || 0 : 0;
    const size = sizeRadio ? sizeRadio.value : null;
    const sizeCost = size ? sizeAdd[size] || 0 : 0;
    const toppingsCost = toppings.length * 25;

    const total = base + sizeCost + toppingsCost;

    const lines = [];
    lines.push(`Pizza: ${pizza || "—"} ${pizza ? `(${base} $)` : ""}`);
    lines.push(`Size: ${size || "—"} ${size ? `(+${sizeCost} $)` : ""}`);
    lines.push(
      `Toppings: ${
        toppings.length ? toppings.map((t) => t.value).join(", ") : "—"
      } ${toppings.length ? `(+${toppingsCost} $)` : ""}`
    );
    breakdown.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
    totalEl.textContent = total;
  }

  form.addEventListener("change", calc);
  calc();
};
