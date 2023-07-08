import { delayLoop5, delayLoop30, delayLoop60, delayLoop90, delayLoop120 } from "./delayLoop";
import { studentImgSrc } from "./rulesPage";

export default class GameGenerator {
  constructor(level) {
    this.level = level;
    this.showPopUpMsg(this.level);
    this.removePopUpMsg();
    this.generateLevelTitle(this.level);
    this.generateLevelInfo(this.level);
    this.generateStudents(this.level);
    this.generateTimer(this.level);
    this.decrementEnergyPoints(this.level);
    this.updateImg(this.level);
    this.updateColor(this.level);
    this.endCurrentLevel(this.level);
  }

  showPopUpMsg(level) {
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

    let countDown = setInterval(function () {
      document.getElementById("pop-up-timer").innerHTML = --sec;
    }, 1000);

    popUpContainer.appendChild(popUpMsg);

    const gameFrame = document.querySelector("#game-frame");
    gameFrame.appendChild(popUpContainer);

    countDown;

    const stopCountDown = setTimeout(function () {
      clearInterval(countDown);
    }, 5000);

    stopCountDown;
  }

  removePopUpMsg() {
    const popUpContainer = document.querySelector("#pop-up-container");
    const removePopUp = setTimeout(function () {
      popUpContainer.remove();
    }, 5000);
    removePopUp;
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

  generateLevelInfo(level) {
    const levelInfo = document.createElement("div");

    let clickPoints = document.createElement("p");
    let decrementEachSec = document.createElement("p");
    if (level === 1) {
      clickPoints.innerHTML = "Each click: <span class='points'>+4%</span>";
      decrementEachSec.innerHTML = "Each second: <span class='points'>-4%</span>";
    } else if (level >= 2 && level <= 4) {
      clickPoints.innerHTML = "Each click: <span class='points'>+5%</span>";
      decrementEachSec.innerHTML = "Each second: <span class='points'>-5%</span>";
    } else if (level === 5 || level === 6) {
      clickPoints.innerHTML = "Each click: <span class='points'>+6%</span>";
      decrementEachSec.innerHTML = "Each second: <span class='points'>-6%</span>";
    }

    levelInfo.appendChild(clickPoints);
    levelInfo.appendChild(decrementEachSec);

    levelInfo.setAttribute("id", "level-info");

    const game = document.querySelector("#game-frame");
    game.appendChild(levelInfo);   
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

    this.clickableStudents(this.level);
  }

  generateLevelTwo() {
    const currentGame = document.querySelector("#game-frame");

    this.showLevelTwoBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level2-students");

    this.levelTwo(currentLevelStudents);

    currentGame.appendChild(currentLevelStudents);
  }

  showLevelTwoBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level2-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "for (let i = 0; i <= 3; ++i) {";
    firstLine.classList.add("level2-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "console.log('What is Ruby?');";
    secondLine.setAttribute("id", "level2-bb-text-secLine");
    secondLine.classList.add("level2-bb-text");
    blackboardContent.appendChild(secondLine);

    const thirdLine = document.createElement("p");
    thirdLine.innerHTML = "}";
    thirdLine.classList.add("level2-bb-text");
    blackboardContent.appendChild(thirdLine);

    currentGame.appendChild(blackboardContent);
  }

  levelTwo(studentsContainer) {
    let students = [];
    for (let i = 1; i < 3; ++i) {
      students.push(studentImgSrc[i]);
      students.push(studentImgSrc[i]);
    }

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 4; ++i) {
      const student = document.createElement("div");
      student.classList.add("level2-student");

      const img = document.createElement("img");
      const src = students[i - 1];
      img.src = src;
      img.setAttribute("id", `level2-student-${i}-img`);
      img.classList.add("level2-students-img");

      if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "79";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level2-energy-level");
        energyNumber.setAttribute("id", `level2-student-${i}-energy`);
        energyLevel.setAttribute("id", `level2-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "64";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level2-energy-level");
        energyNumber.setAttribute("id", `level2-student-${i}-energy`);
        energyLevel.setAttribute("id", `level2-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);

      studentsContainer.appendChild(student);
    }

    this.clickableStudents(this.level);
  }


  generateLevelThree() {
    const currentGame = document.querySelector("#game-frame");

    this.showLevelThreeBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level3-students");

    this.levelThree(currentLevelStudents);

    currentGame.appendChild(currentLevelStudents);  
  }

  showLevelThreeBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level3-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "function isBetter(Ruby)";
    firstLine.classList.add("level3-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "if (Ruby.syntax.isSimpler()) {";
    secondLine.setAttribute("id", "level3-bb-text-secLine");
    secondLine.classList.add("level3-bb-text");
    blackboardContent.appendChild(secondLine);

    const thirdLine = document.createElement("p");
    thirdLine.innerHTML = "return true;";
    thirdLine.setAttribute("id", "level3-bb-text-thirdLine");
    thirdLine.classList.add("level3-bb-text");
    blackboardContent.appendChild(thirdLine);

    const fourthLine = document.createElement("p");
    fourthLine.innerHTML = "}";
    fourthLine.setAttribute("id", "level3-bb-text-fourthLine");
    fourthLine.classList.add("level3-bb-text");
    blackboardContent.appendChild(fourthLine);

    const fifthLine = document.createElement("p");
    fifthLine.innerHTML = "}";
    fifthLine.setAttribute("id", "level3-bb-text-fifthLine");
    fifthLine.classList.add("level3-bb-text");
    blackboardContent.appendChild(fifthLine); 

    currentGame.appendChild(blackboardContent);
  }

  levelThree(studentsContainer) {
    let students = [];
    for (let i = 0; i < 3; ++i) {
      students.push(studentImgSrc[1]);
      students.push(studentImgSrc[2]);
    }

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 6; ++i) {
      const student = document.createElement("div");
      student.classList.add("level3-student");

      const img = document.createElement("img");
      const src = students[i - 1];
      img.src = src;
      img.setAttribute("id", `level3-student-${i}-img`);
      img.classList.add("level3-students-img");

      if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "79";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level3-energy-level");
        energyNumber.setAttribute("id", `level3-student-${i}-energy`);
        energyLevel.setAttribute("id", `level3-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "64";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level3-energy-level");
        energyNumber.setAttribute("id", `level3-student-${i}-energy`);
        energyLevel.setAttribute("id", `level3-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);

      studentsContainer.appendChild(student);
    }

    this.clickableStudents(this.level);
  }

  generateLevelFour() {
    const currentGame = document.querySelector("#game-frame");

    this.showLevelFourBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level4-students");

    this.levelFour(currentLevelStudents);

    currentGame.appendChild(currentLevelStudents);  
  }

  showLevelFourBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level4-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "puts 'Ruby Syntax'";
    firstLine.classList.add("level4-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "words = ['Ruby', 'on', 'Rails']";
    secondLine.setAttribute("id", "level4-bb-text-secLine");
    secondLine.classList.add("level4-bb-text");
    blackboardContent.appendChild(secondLine);

    const thirdLine = document.createElement("p");
    thirdLine.innerHTML = "words.each { |word| puts word }";
    thirdLine.setAttribute("id", "level4-bb-text-thirdLine");
    thirdLine.classList.add("level4-bb-text");
    blackboardContent.appendChild(thirdLine);

    currentGame.appendChild(blackboardContent);
  }

  levelFour(studentsContainer) {
    let students = [];
    students.push(studentImgSrc[0]);

    for (let i = 0; i < 3; ++i) {
      students.push(studentImgSrc[1]);
      students.push(studentImgSrc[2]);
    }

    students.push(studentImgSrc[3]);

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 8; ++i) {
      const student = document.createElement("div");
      student.classList.add("level4-student");

      const img = document.createElement("img");
      const src = students[i - 1];
      img.src = src;
      img.setAttribute("id", `level4-student-${i}-img`);
      img.classList.add("level4-students-img");

      if (src.slice(27) === "energyTop.png"){
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "100";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level4-energy-level");
        energyNumber.setAttribute("id", `level4-student-${i}-energy`);
        energyLevel.setAttribute("id", `level4-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "79";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level4-energy-level");
        energyNumber.setAttribute("id", `level4-student-${i}-energy`);
        energyLevel.setAttribute("id", `level4-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "64";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level4-energy-level");
        energyNumber.setAttribute("id", `level4-student-${i}-energy`);
        energyLevel.setAttribute("id", `level4-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      } else if (src.slice(27) === "sleepyTop.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "49";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level4-energy-level");
        energyNumber.setAttribute("id", `level4-student-${i}-energy`);
        energyLevel.setAttribute("id", `level4-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);        
      }

      student.appendChild(img);

      studentsContainer.appendChild(student);
    }

    this.clickableStudents(this.level);
  }

  generateLevelFive() {
    const currentGame = document.querySelector("#game-frame");

    this.showLevelFiveBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level5-students");

    this.levelFive(currentLevelStudents);

    currentGame.appendChild(currentLevelStudents);  
  }

  showLevelFiveBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level5-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "counter = Hash.new(0)";
    firstLine.classList.add("level5-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "str = 'Hello, Ruby!'";
    secondLine.setAttribute("id", "level5-bb-text-secLine");
    secondLine.classList.add("level5-bb-text");
    blackboardContent.appendChild(secondLine);

    const thirdLine = document.createElement("p");
    thirdLine.innerHTML = "str.each_char do |char|";
    thirdLine.setAttribute("id", "level5-bb-text-thirdLine");
    thirdLine.classList.add("level5-bb-text");
    blackboardContent.appendChild(thirdLine);

    const fourthLine = document.createElement("p");
    fourthLine.innerHTML = "counter[char] += 1";
    fourthLine.setAttribute("id", "level5-bb-text-fourthLine");
    fourthLine.classList.add("level5-bb-text");
    blackboardContent.appendChild(fourthLine);

    const fifthLine = document.createElement("p");
    fifthLine.innerHTML = "end";
    fifthLine.setAttribute("id", "level5-bb-text-fifthLine");
    fifthLine.classList.add("level5-bb-text");
    blackboardContent.appendChild(fifthLine);

    currentGame.appendChild(blackboardContent);
  }

  levelFive(studentsContainer) {
    let students = [];
    for (let i = 0; i < 2; ++i) {
      students.push(studentImgSrc[1]);
      students.push(studentImgSrc[4]);
    }

    for (let i = 0; i < 3; ++i) {
      students.push(studentImgSrc[2]);
      students.push(studentImgSrc[3]);
    }

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 10; ++i) {
      const student = document.createElement("div");
      student.classList.add("level5-student");

      const img = document.createElement("img");
      const src = students[i - 1];
      img.src = src;
      img.setAttribute("id", `level5-student-${i}-img`);
      img.classList.add("level5-students-img");

      if (src.slice(27) === "energyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "79";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level5-energy-level");
        energyNumber.setAttribute("id", `level5-student-${i}-energy`);
        energyLevel.setAttribute("id", `level5-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "energyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "64";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level5-energy-level");
        energyNumber.setAttribute("id", `level5-student-${i}-energy`);
        energyLevel.setAttribute("id", `level5-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "sleepyTop.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "49";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level5-energy-level");
        energyNumber.setAttribute("id", `level5-student-${i}-energy`);
        energyLevel.setAttribute("id", `level5-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      } else if (src.slice(27) === "sleepyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "34";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level5-energy-level");
        energyNumber.setAttribute("id", `level5-student-${i}-energy`);
        energyLevel.setAttribute("id", `level5-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);

      studentsContainer.appendChild(student);
    }

    this.clickableStudents(this.level);
  }

  generateLevelSix() {
    const currentGame = document.querySelector("#game-frame");

    this.showLevelSixBlackboard(currentGame);

    const currentLevelStudents = document.createElement("div");
    currentLevelStudents.setAttribute("id", "level6-students");

    this.levelSix(currentLevelStudents);

    currentGame.appendChild(currentLevelStudents);    
  }

  showLevelSixBlackboard(currentGame) {
    const blackboardContent = document.createElement("div");
    blackboardContent.setAttribute("id", "level6-bb-text-container");

    const firstLine = document.createElement("p");
    firstLine.innerHTML = "char *zExtra;";
    firstLine.classList.add("level6-bb-text");
    blackboardContent.appendChild(firstLine);

    const secondLine = document.createElement("p");
    secondLine.innerHTML = "int nByte;";
    secondLine.setAttribute("id", "level6-bb-text-secLine");
    secondLine.classList.add("level6-bb-text");
    blackboardContent.appendChild(secondLine);

    const thirdLine = document.createElement("p");
    thirdLine.innerHTML = "if (pIdx -> nColumn >= N)";
    thirdLine.setAttribute("id", "level6-bb-text-thirdLine");
    thirdLine.classList.add("level6-bb-text");
    blackboardContent.appendChild(thirdLine);

    const fourthLine = document.createElement("p");
    fourthLine.innerHTML = "return SQLITE_OK;";
    fourthLine.setAttribute("id", "level6-bb-text-fourthLine");
    fourthLine.classList.add("level6-bb-text");
    blackboardContent.appendChild(fourthLine);

    const fifthLine = document.createElement("p");
    fifthLine.innerHTML = "assert(pIdx -> isResized == 0);";
    fifthLine.setAttribute("id", "level6-bb-text-fifthLine");
    fifthLine.classList.add("level6-bb-text");
    blackboardContent.appendChild(fifthLine);

    currentGame.appendChild(blackboardContent);
  }

  levelSix(studentsContainer) {
    let students = [];
    for (let i = 0; i < 2; ++i) {
      students.push(studentImgSrc[3]);
      students.push(studentImgSrc[5]);
    }

    for (let i = 0; i < 3; ++i) {
      students.push(studentImgSrc[2]);
      students.push(studentImgSrc[4]);
    }

    students = students.sort(() => 0.5 - Math.random());

    for (let i = 1; i <= 10; ++i) {
      const student = document.createElement("div");
      student.classList.add("level6-student");

      const img = document.createElement("img");
      const src = students[i - 1];
      img.src = src;
      img.setAttribute("id", `level6-student-${i}-img`);
      img.classList.add("level6-students-img");

      if (src.slice(27) === "energyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "64";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level6-energy-level");
        energyNumber.setAttribute("id", `level6-student-${i}-energy`);
        energyLevel.setAttribute("id", `level6-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "sleepyTop.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "49";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level6-energy-level");
        energyNumber.setAttribute("id", `level6-student-${i}-energy`);
        energyLevel.setAttribute("id", `level6-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);

      } else if (src.slice(27) === "sleepyMiddle.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "34";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level6-energy-level");
        energyNumber.setAttribute("id", `level6-student-${i}-energy`);
        energyLevel.setAttribute("id", `level6-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      } else if (src.slice(27) === "sleepyBottom.png") {
        const energyLevel = document.createElement("div");
        const energyNumber = document.createElement("span");
        const percentage = document.createElement("span");

        energyNumber.innerHTML = "14";
        percentage.innerHTML = " %";
        energyNumber.classList.add("level6-energy-level");
        energyNumber.setAttribute("id", `level6-student-${i}-energy`);
        energyLevel.setAttribute("id", `level6-student-${i}-energy-level`);

        energyLevel.appendChild(energyNumber);
        energyLevel.appendChild(percentage);
        student.appendChild(energyLevel);
      }

      student.appendChild(img);

      studentsContainer.appendChild(student);
    }

    this.clickableStudents(this.level);
  }
  

  async clickableStudents(level) {
    await delayLoop5();

    let studentSize = 4;
    let clickablePoints = 4;

    if (level === 2) {
      clickablePoints = 5;
    } else if (level === 3) {
      studentSize = 6;
      clickablePoints = 5;
    } else if (level === 4) {
      studentSize = 8;
      clickablePoints = 5;
    } else if (level === 5 || level === 6) {
      studentSize = 10;
      clickablePoints = 6;
    }

    for (let i = 1; i <= studentSize; ++i) {
      const studentImg = document.querySelector(`#level${level}-student-${i}-img`);
      studentImg.addEventListener("click", () => {
        this.incrementEnergyPoints(level, i, clickablePoints);
      });
    }

  }

  incrementEnergyPoints(level, i, clickablePoints) {
    const id = `level${level}-student-` + `${i}` + "-energy";
    const energyLevel = document.getElementById(id);
    if (parseInt(energyLevel.innerHTML) + clickablePoints < 100) {
      const newEnergyLevel = parseInt(energyLevel.innerHTML) + clickablePoints;
      energyLevel.innerHTML = `${newEnergyLevel} `;
    } else {
      energyLevel.innerHTML = "100";
    }
  }

  decrementEnergyPoints(level) {
    let points = 4;
    if (level === 2 || level === 3 || level === 4) {
      points = 5;
    } else if (level === 5 || level === 6) {
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

  updateImg(level) {
    let studentSize = 4;
    if (level === 3) {
      studentSize = 6;
    } else if (level === 4) {
      studentSize = 8;
    } else if (level === 5) {
      studentSize = 10;
    } else if (level === 6) {
      studentSize = 10;
    }

    this._updateImg(level, studentSize);
  }

  async _updateImg(level, studentSize) {
    await delayLoop5();
    // const startTime = Date.now();
    const students = document.querySelectorAll(`.level${level}-energy-level`);
    const _imgSrc = setInterval(function () {
      for (let i = 1; i <= studentSize; ++i) {
        let energy = parseInt(students[i - 1].innerHTML);
        let studentImg = document.querySelector(`#level${level}-student-${i}-img`);
        if (energy >= 80) {
          studentImg.src = studentImgSrc[0];
        } else if (energy >= 65 && energy <= 79) {
          studentImg.src = studentImgSrc[1];
        } else if (energy >= 50 && energy <= 64) {
          studentImg.src = studentImgSrc[2];
        } else if (energy >= 35 && energy <= 49) {
          studentImg.src = studentImgSrc[3];
        } else if (energy >= 15 && energy <= 34) {
          studentImg.src = studentImgSrc[4];
        } else if (energy <= 14) {
          studentImg.src = studentImgSrc[5];
        }
      }
    }, 100);

    let time = 30000;

    if (level === 3 || level === 4) {
      time = 60000;
    } else if (level === 5) {
      time = 90000;
    } else if (level === 6) {
      time = 120000;
    }

    setTimeout(function () {
      clearInterval(_imgSrc);
    }, time);
    
  }

  updateColor(level) {
    this._updateColor(level);
  }

  async _updateColor(level) {
    await delayLoop5();

    const students = document.querySelectorAll(`.level${level}-energy-level`);
    const _energyColor = setInterval(function () {
      students.forEach(student => {
        let energy = parseInt(student.innerHTML);
        if (energy < 50) {
          student.style.color = "darkred";
        } else {
          student.style.color = "black";
        }
      })
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
      clearInterval(_energyColor)
    }, time);
  }

  endCurrentLevel(level) {
    this._endGame(level);
  }
  
  async _endGame(level) {
    const homePageButton = document.querySelector(".fa-home");
    homePageButton.style.visibility = "hidden";
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

    homePageButton.style.visibility = "visible";

    const unclickable = document.createElement("div");
    unclickable.setAttribute("id", "unclickable");

    const studentContainer = document.querySelector(`#level${level}-students`);
    if (studentContainer) {
      const studentContainerWidth = document.querySelector(`#level${level}-students`).offsetWidth;
      const studentContainerHeight = document.querySelector(`#level${level}-students`).offsetHeight;
      unclickable.style.width = `${studentContainerWidth}px`;
      unclickable.style.height = `${studentContainerHeight}px`;
  
      const game = document.querySelector("#game-frame");
      game.appendChild(unclickable);
    }

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
      popUpMsg.innerHTML = `Good Job! Every student is awake!!! You passed level ${level}!`;
      if (level < 6) {
        popUpBtn.innerHTML = "Next Level";
      } else if (level === 6) {
        popUpBtn.innerHTML = "coming soon...";  // more levels in future
      }
    } else {
      popUpMsg.innerHTML = `Sorry! You failed level ${level}, some students fell asleep. T^T`;
      popUpBtn.innerHTML = "Replay";
    }

    popUpMsg.setAttribute("id", "end-game-popup-msg");
    popUpBtn.setAttribute("id", "end-game-popup-btn");

    popUpContainer.appendChild(popUpMsg);
    popUpContainer.appendChild(popUpBtn);

    popUpContainer.setAttribute("id", "end-game-popup-container");

    const game = document.querySelector("#game-frame");
    game.appendChild(popUpContainer);

    if (level < 6 && success) {
      this._goToNextLevel(popUpBtn, level);
    } else if (!success) {
      this._replayCurrentLevel(popUpBtn, level);
    }
  }

  _goToNextLevel(popUpBtn, level) {
    popUpBtn.addEventListener("click", () => {
      this._removePreviousGameContent(level);
      new GameGenerator(level+1);
    });
  }

  _replayCurrentLevel(popUpBtn, level) {
    popUpBtn.addEventListener("click", () => {
      this._removePreviousGameContent(level);
      new GameGenerator(level);
    });
  }

  _removePreviousGameContent(level) {
    const previousTimer = document.querySelector("#current-level-timer");
    previousTimer.remove();

    const levelTitle = document.querySelector("#level-title");
    levelTitle.remove();

    const levelInfo = document.querySelector("#level-info");
    levelInfo.remove();

    const levelBBContent = document.querySelector(`#level${level}-bb-text-container`);
    levelBBContent.remove();

    const studentsContainer = document.querySelector(`#level${level}-students`);
    studentsContainer.remove();

    const endGamePopUp = document.querySelector("#end-game-popup-container");
    endGamePopUp.remove();
  }

}