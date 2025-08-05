// gameLogic.js
function generateRandomMultiplier() {
  const spike = Math.random() * 5 + 1;
  return parseFloat(spike.toFixed(2));
}

module.exports = { generateRandomMultiplier };
