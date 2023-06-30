class GameFrame {
  constructor(element) {
    this.element = element;
    this.element.innerHTML = "<h1>Game Frame</h1>";
    this.addMoreElements();
  }

  addMoreElements() {
    const newElement = document.createElement("div");
    // newElement.classList.add("game-display");
    // game-display.
    newElement.innerHTML = "<h2>Game Home page will be available soon...</h2>";
    this.element.appendChild(newElement);
  }
}

export default GameFrame;