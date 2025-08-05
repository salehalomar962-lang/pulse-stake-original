// fairnessUtils.js
function generateServerSeed() {
  return Math.random().toString(36).substring(2);
}

function verifyResult(serverSeed, clientSeed) {
  return serverSeed + clientSeed; // mock verification
}

module.exports = { generateServerSeed, verifyResult };
