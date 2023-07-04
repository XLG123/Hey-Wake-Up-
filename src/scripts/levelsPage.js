const showLevels = function() {
  removeBlackboardContent();
  addLevelsPageButtons();
}

const removeBlackboardContent = function() {
  const blackboardTextContent = document.querySelector(".blackboard-textcontent-hp");
  blackboardTextContent.style.display = "none";

  const blackboardButtons = document.querySelector(".blackboard-buttons");
  blackboardButtons.style.display = "none";
}

const addLevelsPageButtons = function() {
  const blackboard = document.querySelector("#blackboard");
  addGoBackButton(blackboard);
  addLevelsButtons(blackboard);
}

const addGoBackButton = function(element) {
  const goBackButton = document.createElement("i");
  goBackButton.classList.add("fa");
  goBackButton.classList.add("fa-arrow-left");
  goBackButton.setAttribute("id", "levels-back-to-hp-btn");

  element.appendChild(goBackButton);

  goBackButton.addEventListener("click", () => {
    backToHomePage();
  })
}

const addLevelsButtons = function(element) {
  const allLevels = document.createElement("div");
  allLevels.setAttribute("id", "all-levels-container");

  for (let i = 1; i <= 6; ++i) {
    const level = document.createElement("div");
    level.innerHTML = `${i}`;
    level.classList.add("level-button");
    level.setAttribute("id", `level${i}-button`);
    allLevels.appendChild(level);
  }

  element.appendChild(allLevels);
}

const backToHomePage = function() {
  const goBackButton = document.querySelector("#levels-back-to-hp-btn");
  goBackButton.remove();

  const allLevels = document.querySelector("#all-levels-container");
  allLevels.remove();

  const blackboardTextContent = document.querySelector(".blackboard-textcontent-hp");
  blackboardTextContent.style.display = "";

  const blackboardButtons = document.querySelector(".blackboard-buttons");
  blackboardButtons.style.display = "";
}

export { showLevels }