function updateScore(scoreName, points) {
  // Select score of playerName
  document.getElementById(scoreName).textContent = Number(document.getElementById(scoreName).textContent) + points;
}
