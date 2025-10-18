window.onload = function () {
  function showMessage(message, delay) {
    setTimeout(function () {
      console.log(message);
    }, delay);
  }
  showMessage("Hello after 1 second", 1000);
  showMessage("Hello after 2 seconds", 2000);
  showMessage("Hello after 3 seconds", 3000);
  const showMessage2 = (message, delay) => {
    setTimeout(() => {
      console.log(message);
    }, delay);
  };
  showMessage2("Arrow function: Hello after 3 second", 3000);
  //   2
  const startBtn = document.getElementById("startBtn");
  const counterDisplay = document.getElementById("counter");
  let count = 0;
  let timer = null;
  startBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      count++;
      counterDisplay.textContent = count;
      if (count === 10) {
        clearInterval(timer);
        console.log("Counter stopped at 10");
      }
    }, 1000);
});
  // 3
  (function () {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const button = document.getElementById("colorBTN3");
    const info = document.getElementById("colorInfo3");
    const section = document.getElementById("task3");
    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const selectedColor = colors[randomIndex];
      info.textContent = `Selected color: ${selectedColor}`;
      info.style.color = selectedColor;
    });
  })();
    console.log("All tasks initialized succesfuly");
    // 4
    (function () {
        const startBtn4 = document.getElementById("startBtn4");
        const resetBtn4 = document.getElementById("resetBtn4");
        const timerDisplay = document.getElementById("timerDisplay4");
        const INITIAL_SECONDS = 25*60; 
        let remaining = INITIAL_SECONDS;
        let intervalId = null;
        let isRunning = false;
        function render() {
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        function startTimer() {
            if (isRunning) return;
            isRunning = true;
            startBtn4.textContent = 'Running...';
            startBtn4.disabled = true;
            intervalId = setInterval(() => {
           remaining--;
        render();
                if (remaining <= 0) {
                    clearInterval(intervalId);
                    intervalId = null;
                    isRunning = false;
                    startBtn4.textContent = 'Start';
                    startBtn4.disabled = false;
                }
            }, 1000);
        }
        function resetTimer() {
            clearInterval(intervalId);
            intervalId = null;
            isRunning = false;
            remaining = INITIAL_SECONDS;
            render();
            startBtn4.textContent = 'Start';
            startBtn4.disabled = false;
        }
render();
startBtn4.addEventListener('click', startTimer);
resetBtn4.addEventListener('click', resetTimer);}

)
();
}; 
