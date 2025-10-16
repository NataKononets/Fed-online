window.onload = function () {
  // 1
  const colorRadios = document.querySelectorAll('input[name="color"]');
  colorRadios.forEach((radio) => {
    radio.onchange = function () {
      document.body.style.backgroundColor = this.value;
    };
  });
  // 2
  const hobbyBoxes = document.querySelectorAll('input[name="hobby"]');
  const resulText = document.getElementById("selectedHobbies");
  function updateHobbies() {
    const selected = Array.from(hobbyBoxes)
      .filter((box) => box.checked)
      .map((box) => box.value);

    resulText.textContent = selected.length
      ? `Selected hobbies: ${selected.join(",")}`
      : "selected hobbies: none";
  }
  hobbyBoxes.forEach((box) => {
    box.onchange = updateHobbies;
  });
  // 3
  const selectEl = document.getElementById("country");
  const infoBox = document.getElementById("countryInfo");

  const countries = {
    Poland: {
      capital: "Warsaw",
      population: "=38 million",
    },
    Japan: {
      capital: "Tokio",
      population: "=150 million",
    },
    Francia: {
      capital: "Pariz",
      population: "=52 million",
    },
    Ukraina: {
      capital: "Kiew",
      population: "=40million",
    },
    USA: {
      capital: "Washengton",
      population: "=120 million",
    },
  };
  selectEl.onchange = function () {
    const selected = this.value;
    if (selected && countries[selected]) {
      const { capital, population } = countries[selected];
      infoBox.innerHTML = ` <strong>${selected}</strong><br>
      Capital: ${capital}<br>
      Population: ${population}`;
    } else {
      infoBox.textContent = "Please select a country.";
    }
  };
  // 4
  const ratingRadios = document.querySelectorAll('input[name="rating"]');
  const messageBox = document.getElementById("ratingMessage");
  ratingRadios.forEach((radio) => {
    radio.onchange = function () {
      const selected = this.value;
      messageBox.textContent = `Thank you for your rating: ${selected}`;
    };
  });
};
