import Game from "./game.js";

const showLevels = function () {
  removeBlackboardContent();
  addLevelsPageButtons();
  levelsPageButtonsSoundEffect();
};

const removeBlackboardContent = function () {
  const blackboardTextContent = document.querySelector(
    ".blackboard-textcontent-hp"
  );
  blackboardTextContent.style.display = "none";

  const blackboardButtons = document.querySelector(".blackboard-buttons");
  blackboardButtons.style.display = "none";
};

const addLevelsPageButtons = function () {
  const blackboard = document.querySelector("#blackboard");
  addGoBackButton(blackboard);
  addLevelsButtons(blackboard);
};

const addGoBackButton = function (element) {
  const goBackButton = document.createElement("i");
  goBackButton.classList.add("fa");
  goBackButton.classList.add("fa-arrow-left");
  goBackButton.classList.add("back-to-hp");
  goBackButton.setAttribute("id", "levels-back-to-hp-btn");

  const goBackHPSoundEffect = document.createElement("audio");
  goBackHPSoundEffect.src = "src/assets/audios/blackboardButton.MP3";
  goBackHPSoundEffect.preload = "auto";
  goBackHPSoundEffect.load();
  goBackHPSoundEffect.classList.add("back-to-hp-sound-effect");

  element.appendChild(goBackButton);
  element.appendChild(goBackHPSoundEffect); 

  goBackButton.addEventListener("click", () => {
    const soundEffectBtn = document.querySelector("#sound-effect-button");
    if (soundEffectBtn.getAttribute("soundEffectOn") === "true") {
      goBackHPSoundEffect?.play();
      goBackHPSoundEffect?.addEventListener("ended", function () {
        backToHomePage();
      })
    } else if (soundEffectBtn.getAttribute("soundEffectOn") === "false") {
      backToHomePage();
    }
    backToHomePage();
  });
};

const addLevelsButtons = function (element) {
  const levelBtnSoundEffect = document.createElement("audio");
  levelBtnSoundEffect.src = "src/assets/audios/levelsPageButton.MP3";
  levelBtnSoundEffect.volume = 0.5;
  levelBtnSoundEffect.classList.add("level-btn-sound-effect");
  
  const allLevels = document.createElement("div");
  allLevels.appendChild(levelBtnSoundEffect);
  allLevels.setAttribute("id", "all-levels-container");

  for (let i = 1; i <= 6; ++i) {
    const level = document.createElement("div");
    level.innerHTML = `${i}`;
    level.classList.add("level-button");
    level.setAttribute("id", `level${i}-button`);
    allLevels.appendChild(level);
    level.addEventListener("click", () => {
      const soundEffectButton = document.querySelector("#sound-effect-button");
      if (soundEffectButton.getAttribute("soundEffectOn") === "true") {
        levelBtnSoundEffect.play();
        levelBtnSoundEffect.addEventListener("ended", () => {
          generateLevel(i);
        })
      } else if (soundEffectButton.getAttribute("soundEffectOn") === "false") {
        generateLevel(i);
      }
    });
  }

  element.appendChild(allLevels);
};

const playSoundEffectLevelBtn = () => {
  const levelBtnSoundEffect = document.querySelector(".level-btn-sound-effect");
  levelBtnSoundEffect.play();
  levelBtnSoundEffect.addEventListener("ended", function() {

  })
};

// Sound Effect for Levels Page Buttons
const levelsPageButtonsSoundEffect = function () {
  const soundEffectButton = document.querySelector("#sound-effect-button");

  const levelsButtons = document.querySelectorAll(".level-button");
  levelsButtons.forEach((levelBtn) => {
    if (soundEffectButton.getAttribute("soundEffectOn") === "true") {
      levelBtn.addEventListener("click", playSoundEffectLevelBtn, true);
    } else if (soundEffectButton.getAttribute("soundEffectOn") === "false") {
      levelBtn.removeEventListener("click", playSoundEffectLevelBtn, true);
    }
  });
};

const generateLevel = function (level) {
  const goBackButton = document.querySelector("#levels-back-to-hp-btn");
  goBackButton.remove();

  const allLevels = document.querySelector("#all-levels-container");
  allLevels.remove();

  new Game(level);
};

const backToHomePage = function () {
  const goBackButton = document.querySelector("#levels-back-to-hp-btn");
  goBackButton?.remove();

  const allLevels = document.querySelector("#all-levels-container");
  allLevels?.remove();

  const blackboardTextContent = document.querySelector(
    ".blackboard-textcontent-hp"
  );
  blackboardTextContent.style.display = "";

  const blackboardButtons = document.querySelector(".blackboard-buttons");
  blackboardButtons.style.display = "";
};

export { showLevels };
