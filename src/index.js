import GameFrame from "./scripts/gameFrame";

document.addEventListener("DOMContentLoaded", () => {
  const gameFrame = document.getElementById("game-frame");
  new GameFrame(gameFrame);
})