import { showRules } from "./rulesPage";
import Game from "./game";

class GameFrame {
  constructor(element) {
    this.element = element;
    this.buildPage(this.element);
    this.startButtonPressed();
    this.rulesButtonPressed();
    this.bgmToggle();
  }

  buildPage(element) {
  
    this.addBlackboard(element);
    this.addTeacher(element);
    this.addStudents(element);
    this.addSoundButtons(element);
  }

  addBlackboard(element) {
    const blackboard = document.createElement("div");
    blackboard.setAttribute("id", "blackboard");

    const homepageText = document.createElement("div");
    homepageText.classList.add("blackboard-textcontent-hp");

    const firstLine = document.createElement("p");
    firstLine.setAttribute("id", "first-line");

    const secondLine = document.createElement("p");
    secondLine.setAttribute("id", "second-line");

    const thirdLine = document.createElement("p");
    thirdLine.setAttribute("id", "third-line");

    const fourthLine = document.createElement("p");
    fourthLine.setAttribute("id", "fourth-line");

    const fifthLine = document.createElement("p");
    fifthLine.setAttribute("id", "fifth-line");

    const sixthLine = document.createElement("p");
    sixthLine.setAttribute("id", "sixth-line");

    homepageText.appendChild(firstLine);
    homepageText.appendChild(secondLine);
    homepageText.appendChild(thirdLine);
    homepageText.appendChild(fourthLine);
    homepageText.appendChild(fifthLine);
    homepageText.appendChild(sixthLine);

    blackboard.appendChild(homepageText);

    const blackboardButtons = document.createElement("div");
    blackboardButtons.classList.add("blackboard-buttons");

    const levelsButton = document.createElement("button");
    levelsButton.setAttribute("id", "levels-button");
    levelsButton.classList.add("blackboard-button");
    levelsButton.innerHTML = "Levels";

    const startButton = document.createElement("button");
    startButton.setAttribute("id", "start-button");
    startButton.classList.add("blackboard-button");
    startButton.innerHTML = "Start";

    const rulesButton = document.createElement("button");
    rulesButton.setAttribute("id", "rules-button");
    rulesButton.classList.add("blackboard-button");
    rulesButton.innerHTML = "Rules";

    blackboardButtons.appendChild(levelsButton);
    blackboardButtons.appendChild(startButton);
    blackboardButtons.appendChild(rulesButton);

    blackboard.appendChild(blackboardButtons);

    element.appendChild(blackboard);
  }

  addTeacher(element) {
    const teacher = document.createElement("div");
    teacher.setAttribute("id", "teacher");

    const teacherImg = document.createElement("img");
    teacherImg.src = "src/assets/images/teacher/cool.png";
    teacherImg.setAttribute("id", "teacher-image");

    teacher.appendChild(teacherImg);

    const teacherTooltipText = document.createElement("span");
    teacherTooltipText.innerHTML = "Teacher";
    teacherTooltipText.setAttribute("id", "teacher-tooltip-text");
    teacher.appendChild(teacherTooltipText);

    element.appendChild(teacher);
  } 
  
  addStudents(element) {
    const students = document.createElement("div");
    students.classList.add("students");

    for (let i = 1; i <= 10; ++i) {
      const student = document.createElement("div");
      const studentImg = document.createElement("img");
      const studentTooltipText = document.createElement("span");
      
      this.placeRandomStudentImage(studentImg);
      studentImg.setAttribute("id", `student${i}-image`);
      studentImg.classList.add("student-image");

      const tooltipText = this.placeStudentTooltipText(studentImg);
      studentTooltipText.setAttribute("id", `student${i}-tooltip-text`);
      studentTooltipText.classList.add("student-tooltip-text");
      studentTooltipText.innerHTML = tooltipText;
      
      student.appendChild(studentImg);
      student.appendChild(studentTooltipText);

      student.setAttribute("id", `student${i}`);
      students.appendChild(student);
    }

    element.appendChild(students);
  }

  placeRandomStudentImage(studentImg) {
    const allStudents = [
      "src/assets/images/students/energyTop.png",
      "src/assets/images/students/energyMiddle.png",
      "src/assets/images/students/energyBottom.png",
      "src/assets/images/students/sleepyTop.png",
      "src/assets/images/students/sleepyMiddle.png",
      "src/assets/images/students/sleepyBottom.png"
    ]

    const randomImgNum =  Math.floor(Math.random() * allStudents.length);
    studentImg.src = allStudents[randomImgNum];
  }

  placeStudentTooltipText(studentImg) {
    let tooltipText = "";
    const srcIdentifier = studentImg.getAttribute("src").slice(27);
    if (srcIdentifier === "energyTop.png") {
      tooltipText = "Energy: 100%";
    } else if (srcIdentifier === "energyMiddle.png") {
      tooltipText = "Energy: 70%";
    } else if (srcIdentifier === "energyBottom.png") {
      tooltipText = "Energy: 55%";
    } else if (srcIdentifier === "sleepyTop.png") {
      tooltipText = "Energy: 40%";
    } else if (srcIdentifier === "sleepyMiddle.png") {
      tooltipText = "Energy: 25%";
    } else if (srcIdentifier === "sleepyBottom.png") {
      tooltipText = "Energy: 5%";
    }
    return tooltipText;
  }
  
  addSoundButtons(element) {
    const soundButtons = document.createElement("ul");
    soundButtons.setAttribute("id", "sound-buttons");

    const bgmButton = document.createElement("li");
    const bgmBtnIcon = document.createElement("i");
    bgmBtnIcon.classList.add("fa");
    bgmBtnIcon.classList.add("fa-music");
    const bgm = document.createElement("audio");
    bgm.src = "src/assets/audios/gameBGM1.MP3";
    bgm.type = "audio/mpeg";
    bgm.loop = true;
    bgmBtnIcon.appendChild(bgm);
    bgmButton.appendChild(bgmBtnIcon);
    bgmButton.setAttribute("id", "bgm-button");
    
    const soundEffectButton = document.createElement("li");
    const soundBtnIcon = document.createElement("i");
    soundBtnIcon.classList.add("fa");
    soundBtnIcon.classList.add("fa-volume-up");
    soundEffectButton.appendChild(soundBtnIcon);
    soundEffectButton.setAttribute("id", "sound-effect-button");
    
    soundButtons.appendChild(bgmButton);
    soundButtons.appendChild(soundEffectButton);
    
    element.appendChild(soundButtons);
  }

  bgmToggle() {
    const bgmButton = document.querySelector("#bgm-button");
    const bgmIcon = document.querySelector(".fa-music");
    const bgm = document.querySelector("audio");

    bgmButton.addEventListener("click", () => {
      if (bgm.paused) {
        bgm.volumn = 0.5;
        bgm.play();
      } else {
        bgm.pause();
      }
    })

    bgmIcon.addEventListener("mouseover", () => {
      bgmIcon.style.color = "#2c1b17";
    })

    bgmIcon.addEventListener("mouseout", () => {
      if (bgm.paused) {
        bgmIcon.style.color = "rgba(110, 68, 59, 0.75)";
      }
    })

    bgmIcon.addEventListener("click", () => {
      if (bgm.paused) {
        bgmIcon.style.color = "#2c1b17";
      } else {
        bgmIcon.style.color = "rgba(110, 68, 59, 0.75)";
      }
    })
  }

  startButtonPressed() {
    const startButton = document.querySelector("#start-button");

    startButton.addEventListener("click", () => {
      const game = new Game();
    })
  }

  rulesButtonPressed() {
    const rulesButton = document.querySelector("#rules-button");

    rulesButton.addEventListener("click", () => {
      const teacher = document.querySelector("#teacher");
      teacher.style.display = "none";

      const students = document.querySelector(".students");
      students.style.display = "none";

      const levelsButton = document.querySelector("#levels-button");
      levelsButton.style.display = "none";

      const startButton = document.querySelector("#start-button");
      startButton.style.display = "none";

      const rulesButton = document.querySelector("#rules-button");
      rulesButton.style.display = "none";

      const blackboardTextContent = document.querySelector(".blackboard-textcontent-hp");
      blackboardTextContent.style.display = "none";
      
      showRules();
    })
  }

  // soundEffectToggle() {
  //   const soundEffectIcon = document.querySelector(".fa-volumn-up");
  //   soundEffectIcon.addEventListener("click", ()=> {
  //     if (soundEffectIcon.style.color == "#6e443b") {
  //       soundEffectIcon.style.color = "#2c1b17";
  //     } else {
  //       soundEffectIcon.style.color = "#6e443b";
  //     }
  //   })
  // }
   
}

export default GameFrame;