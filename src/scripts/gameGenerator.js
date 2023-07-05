import { delayLoop } from "./delayLoop";
import { studentImgSrc } from "./rulesPage";

export default class GameGenerator {
  constructor(level) {
    this.level = level;
    this.generateStudents(this.level);
    this.generateTimer(this.level);
    // this.generate
  }

  generateStudents(level) {
    if (level === 1) {
      this.generateLevelOne();
    } else if (level === 2) {
      this.generateLevelTwo();
    } else if (level === 3) {
      this.generateLevelThree();
    } else if (level === 4) {
      this.generateLevelFour();
    } else if (level === 5) {
      this.generateLevelFive();
    } else if (level === 6) {
      this.generateLevelSix();
    }
  }

  generateTimer(level) {
    const currentGame = document.querySelector("#game-frame");
    const currentLevelTimer = document.createElement("div");
    currentLevelTimer.setAttribute("id", "current-level-timer");

    const timerText = document.createElement("span");
    timerText.innerHTML = "Time Left: ";
    timerText.classList.add("timer-text");
    currentLevelTimer.appendChild(timerText);

    const timer = document.createElement("span");
    timer.setAttribute("id", "count-down-timer");
    currentLevelTimer.appendChild(timer);

    const unit = document.createElement("span");
    unit.innerHTML = " seconds";
    unit.classList.add("timer-text");
    currentLevelTimer.appendChild(unit);

    let sec = 30;

    if (level === 3 || level === 4) {
      sec = 60;
    } else if (level === 5) {
      sec = 90;
    } else if (level === 6) {
      sec = 120;
    }

    timer.innerHTML = sec;
    this.setTimer(timer, sec);

    currentGame.appendChild(currentLevelTimer);
  }

  async setTimer (timer, sec) {
    await delayLoop();
    const timerCountDown = setInterval(function () {
      timer.innerHTML = --sec;
    }, 1000);
    
    const delayTime = sec * 1000;

    setTimeout(function() {
      clearInterval(timerCountDown);
    }, delayTime);

  }

  generateLevelOne() {
    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level1-students");

    const randomOption = Math.floor(Math.random() * 2);
    if (randomOption === 0) {
     this.levelOneOptionOne(currentLevelStudents);
    } else if (randomOption === 1) {
      this.levelOneOptionTwo(currentLevelStudents);
    }

    const currentGame = document.querySelector("#game-frame");
    currentGame.appendChild(currentLevelStudents);
  }

  levelOneOptionOne(studentsContainer) {
    const studentImgs = document.createElement("div");
    
    for (let i = 1; i <= 4; ++i) {

    }
  }

  levelOneOptionTwo(studentsContainer) {

  }

  generateLevelTwo() {

  }

  generateLevelthree() {

  }

  generateLevelFour() {

  }

  generateLevelFive() {

  }

  generateLevelSix() {

  }
}