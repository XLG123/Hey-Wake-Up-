// level 1
// 4 students + 30 sec timer
// One of the two options
// Option 1: two students with 100% energy and two students with 79% energy
// Option 2: two students with 100% energy and one student with 79%
// and another one with 64% energy

// level 2
// 4 students + 30 sec timer
// One of the two options
// Option 1: two students with 79% energy and two students with 64% energy
// Option 2: two students with 79% energy and one student with 64%
// and another one with 49% energy

// level 3
// 6 students + 60 sec timer
// One of the two options
// Option 1: four students with 79% energy and two students with 64% energy
// Option 2: three students with 79% energy and two students with 64% energy and one student with 49% energy

// level 4
// 8 students + 60 sec timer
// One student at 100%,
// Two students at 79%,
// Two students at 64%,
// One student at 49%

// level 5
// 10 students + 90 sec timer
// Two students at 79%,
// Three students at 64%,
// Three students at 49%,
// Two students at 34%

// level 6(Impossible Level)
// 12 students + 120 sec timer
// Four students at 64%,
// Three students at 49%,
// Three students at 34%,
// Two students at 14%

import { delayLoop } from "./delayLoop";

export default class GameGenerator {
  constructor(level) {
    this.level = level;
    this.generateStudents(this.level);
    this.generateTimer(this.level);
    // this.generate
  }

  generateStudents(level) {
    if (level === 1) {
      this.generateLevel1();
    } else if (level === 2) {
      this.generateLevel2();
    } else if (level === 3) {
      this.generateLevel3();
    } else if (level === 4) {
      this.generateLevel4();
    } else if (level === 5) {
      this.generateLevel5();
    } else if (level === 6) {
      this.generateLevel6();
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

  generateLevel1() {
    const currentLevelStudents = document.createElement("div");
  }

  generateLevel2() {

  }

  generateLevel3() {

  }

  generateLevel4() {

  }

  generateLevel5() {

  }

  generateLevel6() {

  }
}