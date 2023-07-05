import { delayLoop5, delayLoop30, delayLoop60, delayLoop90, delayLoop120 } from "./delayLoop";
import { studentImgSrc } from "./rulesPage";

export default class GameGenerator {
  constructor(level) {
    this.level = level;
    this.generateLevelTitle(level);
    this.generateStudents(this.level);
    this.generateTimer(this.level);
    this.decrementEnergyPoints(this.level);
    this.updateColor(this.level);
    this.endCurrentLevel(this.level);
  }

  generateLevelTitle(level) {
    const levelTitle = document.createElement("div");

    const levelText = document.createElement("span");
    levelText.innerHTML = "Level ";

    const levelNumber = document.createElement("span");
    levelNumber.innerHTML = `${level}`;
    levelNumber.setAttribute("id", "level-number");

    levelTitle.appendChild(levelText);
    levelTitle.appendChild(levelNumber);
    levelTitle.setAttribute("id", "level-title");
    
    const game = document.querySelector("#game-frame");
    game.appendChild(levelTitle);
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
    await delayLoop5();
    const timerCountDown = setInterval(function () {
      timer.innerHTML = --sec;
    }, 1000);
    
    const delayTime = sec * 1000;

    setTimeout(function() {
      clearInterval(timerCountDown);
    }, delayTime);

  }

  generateLevelOne() {
    const currentGame = document.querySelector("#game-frame");
  
    this.showLevelOneBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level1-students");

    this.levelOne(currentLevelStudents);
    
    currentGame.appendChild(currentLevelStudents);
  }

  showLevelOneBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level1-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "console.log('Hello, World!');";
    firstLine.classList.add("level1-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "console.log('I Love Coding!');";
    secondLine.classList.add("level1-bb-text");
    blackboardContent.appendChild(secondLine);

    currentGame.appendChild(blackboardContent);
  }

  levelOne(studentsContainer) {
    let students = [];
    for (let i = 0; i < 2; ++i) {
      students.push(studentImgSrc[i]);
      students.push(studentImgSrc[i]);
    }

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 4; ++i) {
      const student= document.createElement("div");
      student.classList.add("level1-student");

      const img = document.createElement("img");
      const src = students[i-1];
      img.src = src;
      img.setAttribute("id", `level1-student-${i}-img`);
      img.classList.add("level1-students-img");

      if (src.slice(27) === "energyTop.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "100";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level1-energy-level");
        energyNumber.setAttribute("id", `level1-student-${i}-energy`);
        energyLevel.setAttribute("id", `level1-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "79";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level1-energy-level");
        energyNumber.setAttribute("id", `level1-student-${i}-energy`);
        energyLevel.setAttribute("id", `level1-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);
      
      studentsContainer.appendChild(student);
    }

    this.clickableStudentsLv1(this.level);
  }

  async clickableStudentsLv1(level) {
    await delayLoop5();

    let studentSize = 4;
    if (level === 3) {
      studentSize = 6;
    } else if (level === 4) {
      studentSize = 8;
    } else if (level === 5) {
      studentSize = 10;
    } else if (level === 6) {
      studentSize = 12;
    }

    for (let i = 1; i <= studentSize; ++i) {
      const studentImg = document.querySelector(`#level${level}-student-${i}-img`);
      studentImg.addEventListener("click", () => {
        this.incrementEnergyPoints(i);
      });
    }

  }

  incrementEnergyPoints(i) {
    const id = "level1-student-" + `${i}` + "-energy";
    const energyLevel = document.getElementById(id);
    if (parseInt(energyLevel.innerHTML) + 4 < 100) {
      const newEnergyLevel = parseInt(energyLevel.innerHTML) + 4;
      energyLevel.innerHTML = `${newEnergyLevel} `;
    } else {
      energyLevel.innerHTML = "100";
    }
  }

  decrementEnergyPoints(level) {
    let points = 4;
    if (level === 2 || level === 3) {
      points = 5;
    } else if (level === 4 || level === 5 || level === 6 ) {
      points = 6;
    }

    this._decrement(level, points);
  }

  async _decrement(level, points) {
    await delayLoop5();
    const students = document.querySelectorAll(`.level${level}-energy-level`);

    const fcn = function() {
      students.forEach(student => {
        let energy = parseInt(student.innerHTML);

        if (energy - points < 0) {
          student.innerHTML = "0";
        } else {
          energy -= points;
          student.innerHTML = `${energy}`;
        }
      });
    }

    const decreasePoints = setInterval(fcn, 1000);

    let stopTime = 30000;

    if (level === 3 || level === 4) {
      stopTime = 60000;
    } else if (level === 5) {
      stopTime = 90000;
    } else if (level === 6) {
      stopTime = 120000;
    }

    setTimeout(function() {
      clearInterval(decreasePoints);
    }, stopTime);

  }

  updateColor(level) {
    const students = document.querySelectorAll(`.level${level}-energy-level`);
    const _updateColor = setInterval(function() {
      students.forEach(student => {
        let energy = parseInt(student.innerHTML);
        if (energy < 50) {
          student.style.color = "darkred";
        } else {
          student.style.color = "black";
        }     
      });
    }, 100);

    let time = 30000;
    if (level === 3 || level === 4) {
      time = 60000;
    } else if (level === 5) {
      time = 90000;
    } else if (level === 6) {
      time = 120000;
    }

    setTimeout(function() {
      _updateColor;
    }, time);
  }

  generateLevelTwo() {

  }

  generateLevelThree() {

  }

  generateLevelFour() {

  }

  generateLevelFive() {

  }

  generateLevelSix() {

  }

  endCurrentLevel(level) {
    this._endGame(level);
  }
  
  async _endGame(level) {
    await delayLoop5();
    if (level === 1 || level === 2) {
      await delayLoop30();
    } else if (level === 3 || level === 4) {
      await delayLoop60();
    } else if (level === 5) {
      await delayLoop90();
    } else if (level === 6) {
      await delayLoop120();
    }

    const unclickable = document.createElement("div");
    unclickable.setAttribute("id", "unclickable");

    const studentContainerWidth = document.querySelector(`#level${level}-students`).offsetWidth;
    const studentContainerHeight = document.querySelector(`#level${level}-students`).offsetHeight;

    unclickable.style.width = `${studentContainerWidth}px`;
    unclickable.style.height = `${studentContainerHeight}px`;

    const game = document.querySelector("#game-frame");
    game.appendChild(unclickable);

    let win = true;

    const allStudentsEnergyLevel = document.querySelectorAll(`.level${level}-energy-level`);

    allStudentsEnergyLevel.forEach(studentEnergyLevel => {
      if (parseInt(studentEnergyLevel.innerHTML) < 50) {
        win = false;
      }
    });

    this._endPopUp(level, win);
  }
  
  _endPopUp(level, success) {
    const popUpContainer = document.createElement("div");
    const popUpMsg = document.createElement("div");
    const popUpBtn = document.createElement("div");

    if (success) {
      popUpMsg.innerHTML = `Good Job! Every student is awake!!! You passed level ${level}`;
    } else {
      popUpMsg.innerHTML = `Sorry! You failed level ${level}, some students fell asleep.`;
    }

    popUpMsg.setAttribute("id", "end-game-popup-msg");
    popUpBtn.setAttribute("id", "end-game-popup-btn");

    popUpContainer.appendChild(popUpMsg);
    popUpContainer.appendChild(popUpBtn);

    popUpContainer.setAttribute("id", "end-game-popup-container");

    const game = document.querySelector("#game-frame");
    game.appendChild(popUpContainer);
  }

}