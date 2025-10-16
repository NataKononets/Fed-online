window.onload = function () {
  function parseNumber(str) {
    if (typeof str !== "string") return NaN;
    return Number(str.trim().replace(",", "."));
  }
  const formatNumber = (n) => (Number.isFinite(n) ? n.toFixed(2) : "");

  const form = document.getElementById("fxForm");
  const amountEl = document.getElementById("amount");
  const rateEl = document.getElementById("rate");
  const resultEl = document.getElementById("result");
  const formErrEl = document.getElementById("formErr");
  const amountErrEl = document.getElementById("amountErr");
  const rateErrEl = document.getElementById("rateErr");
  const clearBtn = document.getElementById("clearBtn");

  function clearFeedback() {
    resultEl.textContent = "";
    formErrEl.textContent = "";
    amountErrEl.textContent = "";
    rateErrEl.textContent = "";
    amountEl.classList.remove("is-invalid");
    rateEl.classList.remove("is-invalid");
  }

  [amountEl, rateEl].forEach((el) => {
    el.addEventListener("input", () => {
      el.classList.remove("is-invalid");
      formErrEl.textContent = "";
      if (el === amountEl) amountErrEl.textContent = "";
      if (el === rateEl) rateErrEl.textContent = "";
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFeedback();

    const amount = parseNumber(amountEl.value);
    const rate = parseNumber(rateEl.value);

    let valid = true;
    if (!Number.isFinite(amount) || amount < 0) {
      amountEl.classList.add("is-invalid");
      amountErrEl.textContent = "Сума має бути числом ≥ 0.";
      valid = false;
    }
    if (!Number.isFinite(rate) || rate <= 0) {
      rateEl.classList.add("is-invalid");
      rateErrEl.textContent = "Курс має бути числом > 0.";
      valid = false;
    }
    if (!valid) {
      formErrEl.textContent = "Перевір поля вище.";
      return;
    }

    const converted = amount * rate;
    resultEl.innerHTML = `Результат: <strong>${formatNumber(
      converted
    )}</strong>`;
  });

  clearBtn.addEventListener("click", function () {
    form.reset();
    clearFeedback();
    amountEl.focus();
  });
};
