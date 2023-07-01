import GameFrame from "./scripts/gameFrame";

document.addEventListener("DOMContentLoaded", () => {
  const gameFrame = document.getElementById("game-frame");
  new GameFrame(gameFrame);
})

const gameTitle = document.getElementById("game-title");

gameTitle.addEventListener("click", () => {
  document.location.reload();
})