import GameGenerator from "./gameGenerator";
import { shrinkBlackboard } from "./rulesPage";

export default class Game {
  constructor(level) {
    this.level = level;
    this.removeHomePage();
    this.openGamePage(this.level);
  }

  removeHomePage() {
    const blackboardContent = document.querySelector(".blackboard-textcontent-hp");
    blackboardContent.style.display = "none";

    const students = document.querySelector(".students");
    students.style.display = "none";

    const blackboardButtons = document.querySelector(".blackboard-buttons");
    blackboardButtons.style.display = "none";
  }

  openGamePage(level) {
    this.addHomePageButton(level);
    const teacherTooltipText = document.querySelector("#teacher-tooltip-text");
    teacherTooltipText.style.visibility = "visible";

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

  }

  addHomePageButton(level) {
    const homePageButton = document.createElement("i");
    homePageButton.classList.add("fa");
    homePageButton.classList.add("fa-home");

    const gameFrame = document.getElementById("game-frame");
    gameFrame.appendChild(homePageButton);

    homePageButton.addEventListener("click", () => {
      this.backToHomePage(level);
    })    
  }

  backToHomePage(level) {
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

    const currentLevelInfo = document.querySelector("#level-info");
    currentLevelInfo.remove();

    const currentLevelStudents = document.querySelector(`#level${level}-students`);
    if (currentLevelStudents) {
      currentLevelStudents.remove();
    }

    const currentLevelBBContent = document.querySelector(`#level${level}-bb-text-container`);
    if (currentLevelBBContent) {
      currentLevelBBContent.remove();
    }

    const teacher = document.querySelector("#teacher-tooltip-text");
    teacher.style.visibility = "hidden";

    const students = document.querySelector(".students");
    students.style.display = "";

    const blackboardButtons = document.querySelector(".blackboard-buttons");
    blackboardButtons.style.display = "";

    const homePageButton = document.querySelector(".fa-home");
    homePageButton.remove();    
  }

}