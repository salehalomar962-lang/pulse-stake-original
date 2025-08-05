// fairnessUtils.js

const crypto = require('crypto');

/
 
Generates a server seed (should be kept secret until after game).*/,
function generateServerSeed() {
  return crypto.randomBytes(32).toString('hex');
}

/
 
Generates a client seed (public value set by the user).*/,
function generateClientSeed() {
  return Math.random().toString(36).substring(2, 15);
}

/
 
Generates a hash of the server seed to display to users before game starts.*/,
function getHashedServerSeed(serverSeed) {
  return crypto.createHash('sha256').update(serverSeed).digest('hex');
}

/
 
Verifies fairness by combining seeds + nonce to simulate volatility spike.,
@param {string} serverSeed,
@param {string} clientSeed,
@param {number} nonce,
@returns {number} - a spike threshold between 1.00x and 5.00x*/,
function getSpikeThreshold(serverSeed, clientSeed, nonce) {
  const combined = ${serverSeed}:${clientSeed}:${nonce};
  const hash = crypto.createHash('sha256').update(combined).digest('hex');
  const decimal = parseInt(hash.substring(0, 8), 16) / 0xffffffff;
  const multiplier = 1 + decimal * 4; // result between 1.00x and 5.00x
  return parseFloat(multiplier.toFixed(2));
}

module.exports = {
  generateServerSeed,
  generateClientSeed,
  getHashedServerSeed,
  getSpikeThreshold
};
