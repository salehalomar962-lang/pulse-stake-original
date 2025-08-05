// gameLogic.js

/
 
Generates a simulated pulse game session.,
Each session returns:,
a spike threshold,
,
the growing multiplier rate,
*/,

function generateGameSession() {
  const baseMultiplier = 1.00;
  const spike = getRandomSpike(); // When the voltage spike happens
  return {
    currentMultiplier: baseMultiplier,
    spikeAt: spike,
  };
}

/
 
Generates a spike point between 1.5x and 5.0x.,
This is where the game will "explode" if user doesn’t tap out.*/,
function getRandomSpike() {
  return parseFloat((Math.random() * 3.5 + 1.5).toFixed(2)); // 1.5x–5.0x
}

/
 
Simulates multiplier increase every 100ms,
@param {number} multiplier,
@returns {number} - next multiplier step*/,
function growMultiplier(multiplier) {
  return parseFloat((multiplier + 0.05).toFixed(2));
}

/
 
Checks whether the user tapped before the spike,
@param {number} multiplier,
@param {number} spikeAt,
@returns {boolean}*/,
function isSafe(multiplier, spikeAt) {
  return multiplier < spikeAt;
}

module.exports = {
  generateGameSession,
  getRandomSpike,
  growMultiplier,
  isSafe
};
