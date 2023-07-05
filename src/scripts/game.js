import GameGenerator from "./gameGenerator";
import { shrinkBlackboard } from "./rulesPage";

export default class Game {
  constructor(level) {
    // this.gameLevel = DifficultyGenerator.
    this.level = level;
    this.removeHomePage();
    this.openGamePage(this.level);
  }

  removeHomePage() {
    const blackboardContent = document.querySelector(".blackboard-textcontent-hp");
    blackboardContent.style.display = "none";

    // const teacher = document.querySelector("#teacher-image");
    // teacher.style.animationPlayState = "paused";
    // teacher.style.display = "none";

    const students = document.querySelector(".students");
    students.style.display = "none";

    const blackboardButtons = document.querySelector(".blackboard-buttons");
    blackboardButtons.style.display = "none";
  }

  openGamePage(level) {
    this.showPopUpMsg(level);
    this.removePopUpMsg();

    if (level === 1) {
      new GameGenerator(1);
    } else if (level === 2) {
      new GameGenerator(2);
    } else if (level === 3) {
      new GameGenerator(3);
    } else if (level === 4) {
      new GameGenerator(4);
    } else if (level === 5) {
      new GameGenerator(5);
    } else if (level === 6) {
      new GameGenerator(6);
    }

    this.addHomePageButton();
  }

  showPopUpMsg (level) {
    const popUpContainer = document.createElement("div");
    popUpContainer.setAttribute("id", "pop-up-container");

    const popUpMsg = document.createElement("p");

    const msgFirstHalf = document.createElement("span");
    msgFirstHalf.innerHTML = `Level ${level} starts in `;
    popUpMsg.appendChild(msgFirstHalf);

    const countdown = document.createElement("span");
    countdown.setAttribute("id", "pop-up-timer");
    countdown.innerHTML = "5";
    popUpMsg.appendChild(countdown);

    const msgSecondHalf = document.createElement("span");
    msgSecondHalf.innerHTML = ` seconds!`;
    popUpMsg.appendChild(msgSecondHalf);

    let sec = 5;
    
    let countDown = setInterval(function() {
      document.getElementById("pop-up-timer").innerHTML = --sec;
    }, 1000);

    popUpContainer.appendChild(popUpMsg);

    const gameFrame = document.querySelector("#game-frame");
    gameFrame.appendChild(popUpContainer);

    countDown;

    const stopCountDown = setTimeout(function() {
      clearInterval(countDown);
    }, 5000);
    
    stopCountDown;
  }

  removePopUpMsg() {
    const popUpContainer = document.querySelector("#pop-up-container");
    const removePopUp = setTimeout(function() {
      popUpContainer.remove();
    }, 5000);
    removePopUp;
  }

  addHomePageButton() {
    const homePageButton = document.createElement("i");
    homePageButton.classList.add("fa");
    homePageButton.classList.add("fa-home");

    const gameFrame = document.getElementById("game-frame");
    gameFrame.appendChild(homePageButton);

    homePageButton.addEventListener("click", () => {
      this.backToHomePage();
    })    
  }

  backToHomePage() {
    const blackboard = document.querySelector("#blackboard");
    shrinkBlackboard(blackboard);
    
    // const currentLevelGetReadyMsg = document.querySelector("#pop-up-container");
    // if (currentLevelGetReadyMsg) {
    //   currentLevelGetReadyMsg.remove();
    // }

    const unclickable = document.querySelector("#unclickable");
    if (unclickable) {
      unclickable.remove();
    }

    const endGamePopUp = document.querySelector("#end-game-popup-container");
    if (endGamePopUp) {
      endGamePopUp.remove();
    }

    const currentLevelTimer = document.querySelector("#current-level-timer");
    currentLevelTimer.remove();

    const currentLevelTitle = document.querySelector("#level-title");
    currentLevelTitle.remove();

    const currentLevelStudents = document.querySelector("#level1-students");
    if (currentLevelStudents) {
      currentLevelStudents.remove();
    }

    const currentLevelBBContent = document.querySelector("#level1-bb-text-container");
    if (currentLevelBBContent) {
      currentLevelBBContent.remove();
    }

    const teacher = document.querySelector("#teacher-image");
    teacher.style.animationPlayState = "running";

    const students = document.querySelector(".students");
    students.style.display = "";

    const blackboardButtons = document.querySelector(".blackboard-buttons");
    blackboardButtons.style.display = "";

    const homePageButton = document.querySelector(".fa-home");
    homePageButton.remove();    
  }

}