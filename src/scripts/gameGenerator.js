import { delayLoop } from "./delayLoop";
import { studentImgSrc } from "./rulesPage";

export default class GameGenerator {
  constructor(level) {
    this.level = level;
    this.generateStudents(this.level);
    this.generateTimer(this.level);
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
    const currentGame = document.querySelector("#game-frame");
  
    this.showLevelOneBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level1-students");

    const randomOption = Math.floor(Math.random() * 2);
    console.log(randomOption);
    if (randomOption === 0) {
     this.levelOneOptionOne(currentLevelStudents);
    } else if (randomOption === 1) {
      this.levelOneOptionTwo(currentLevelStudents);
    }
    
    currentGame.appendChild(currentLevelStudents);
    this.decrementEnergyPoints(1);
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

  levelOneOptionOne(studentsContainer) {
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
        energyLevel.innerHTML = "100%";
        energyLevel.classList.add("level1-energy-level");
        energyLevel.setAttribute("id", `level1-student-${i}-energy-level`);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        energyLevel.innerHTML = "79%";
        energyLevel.classList.add("level1-energy-level");
        energyLevel.setAttribute("id", `level1-student-${i}-energy-level`);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);
      
      studentsContainer.appendChild(student);

      img.addEventListener("click", () => {
        const id = "level1-student-" + `${i}` + "-energy-level";
        const energyLevel = document.getElementById(id);
        if (parseInt(energyLevel.innerHTML) + 4 < 100) {
          const newEnergyLevel = parseInt(energyLevel.innerHTML) + 4;
          energyLevel.innerHTML = `${newEnergyLevel}%`;
        } else {
          energyLevel.innerHTML = "100%";
        }
      })
    }
  }

  levelOneOptionTwo(studentsContainer) {

  }

  decrementEnergyPoints(level) {

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