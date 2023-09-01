const playSoundEffectBB = () => {
  const bbBtnSoundEffect = document.querySelector(".bb-btn-sound-effect");
  bbBtnSoundEffect.play();
};

// Sound Effect for Blackboard Buttons
const blackboardButtonsSoundEffect = function (soundEffect) {
  const bbButtons = document.querySelector(".blackboard-buttons");
  const blackboardSoundEffectButton = document.querySelector(
    ".bb-btn-sound-effect"
  );

  if (bbButtons && !blackboardSoundEffectButton) {
    const soundEffectSrc = "src/assets/audios/blackboardButton.MP3";
    const bbBtnSoundEffect = document.createElement("audio");
    bbBtnSoundEffect.classList.add("bb-btn-sound-effect");
    bbBtnSoundEffect.src = soundEffectSrc;
    bbBtnSoundEffect.volume = 0.5;
    bbButtons.appendChild(bbBtnSoundEffect);
  }

  const bbBtns = document.querySelectorAll(".blackboard-button");
  bbBtns.forEach((bbBtn) => {
    if (soundEffect) {
      bbBtn.addEventListener("click", playSoundEffectBB, true);
    } else if (!soundEffect) {
      bbBtn.removeEventListener("click", playSoundEffectBB, true);
    }
  });
};

// const backToHPSoundEffect = () => {
//   const goBackHPSoundEffect = document.querySelector(
//     ".back-to-hp-sound-effect"
//   );

//   goBackHPSoundEffect.play();
//   goBackHPSoundEffect.addEventListener("ended", () => {
//     back
//   })
// }

// // Sound Effect for Back To Home Page Buttons
// const backToHPButtonsSoundEffect = function (soundEffect) {
//   const goBackButtons = document.querySelectorAll(".back-to-hp");

//   goBackButtons.forEach((goBackBtn) => {
//     if (soundEffect) {
//       goBackBtn.addEventListener("click", backToHPSoundEffect, true);
//     } else if (!soundEffect) {
//       goBackBtn.removeEventListener("click", backToHPSoundEffect, true);
//     }
//   })
// };

const playSoundEffectLevelBtn = () => {
  const levelBtnSoundEffect = document.querySelector(".level-btn-sound-effect");
  levelBtnSoundEffect.play();
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

const studentClickSound = () => {
  const studentClickSound = document.querySelector(".click-student-sound");
  studentClickSound.currentTime = 0;
  studentClickSound?.play();
};

// Sound Effect for clicking on students
const handleStudentsClickSound = function (soundEffect) {
  const students = document.querySelectorAll(".current-level-student");
  if (soundEffect) {
    students?.forEach((student) => {
      student.addEventListener("click", studentClickSound, true);
    });
  } else if (!soundEffect) {
    students?.forEach((student) => {
      student.removeEventListener("click", studentClickSound, true);
    });
  }
};

// Sound Effect for End Game Pop Up Button
const endGamePopUpBtnSoundEffect = function () {
  const endGameButton = document.querySelector("#end-game-popup-btn");
  if (endGameButton) {
    const soundEffectSrc = "src/assets/audios/endGamePopUpButton.mp3";
    const endGameBtnSoundEffect = document.createElement("audio");
    endGameBtnSoundEffect.src = soundEffectSrc;
    endGameBtnSoundEffect.volumne = 0.2;
    endGameBtnSoundEffect.setAttribute("id", "end-game-sound");
    endGameButton.appendChild(endGameBtnSoundEffect);
    endGameBtnSoundEffect.addEventListener("click", () => {
      endGameBtnSoundEffect.play();
    });
  }
};

export {
  blackboardButtonsSoundEffect,
  levelsPageButtonsSoundEffect,
  handleStudentsClickSound,
  endGamePopUpBtnSoundEffect,
};
