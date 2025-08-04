let multiplier = 1.0;
let growing = false;
let interval;

const startBtn = document.getElementById("start-btn");
const tapoutBtn = document.getElementById("tapout-btn");
const multiplierDisplay = document.getElementById("multiplier");

startBtn.onclick = () => {
  multiplier = 1.0;
  growing = true;
  multiplierDisplay.innerText = `Multiplier: ${multiplier.toFixed(2)}x`;

  interval = setInterval(() => {
    multiplier += 0.01;
    multiplierDisplay.innerText = `Multiplier: ${multiplier.toFixed(2)}x`;

    if (Math.random() < 0.01) { // 1% chance of spike
      clearInterval(interval);
      growing = false;
      multiplierDisplay.innerText = `💥 Voltage Spike! You lost at ${multiplier.toFixed(2)}x`;
    }
  }, 100);
};

tapoutBtn.onclick = () => {
  if (growing) {
    clearInterval(interval);
    multiplierDisplay.innerText = `✅ You cashed out at ${multiplier.toFixed(2)}x`;
    growing = false;
  }
};
