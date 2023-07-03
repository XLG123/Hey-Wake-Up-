class GameFrame {
  constructor(element) {
    this.element = element;
    this.buildPage(this.element);
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

    const runButton = document.createElement("button");
    runButton.setAttribute("id", "run-button");
    runButton.innerHTML = "Run";

    blackboard.appendChild(runButton);

    element.appendChild(blackboard);
  }

  addTeacher(element) {
    const teacher = document.createElement("div");
    teacher.setAttribute("id", "teacher");

    const teacherImg = document.createElement("img");
    teacherImg.src = "../src/assets/images/teacher/cool.png";
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
      this.placeRandomStudentImage(studentImg);
      studentImg.setAttribute("id", `student${i}-image`);
      student.appendChild(studentImg);
      student.setAttribute("id", `student${i}`);
      students.appendChild(student);
    }

    element.appendChild(students);
  }

  placeRandomStudentImage(studentImg) {
    const allStudents = [
      "../src/assets/images/students/energyTop.png",
      "../src/assets/images/students/energyMiddle.png",
      "../src/assets/images/students/energyBottom.png",
      "../src/assets/images/students/sleepyTop.png",
      "../src/assets/images/students/sleepyMiddle.png",
      "../src/assets/images/students/sleepyBottom.png"
    ]

    const randomImgNum =  Math.floor(Math.random() * allStudents.length);
    studentImg.src = allStudents[randomImgNum];
  }
  
  addSoundButtons(element) {
    const soundButtons = document.createElement("ul");
    soundButtons.setAttribute("id", "sound-buttons");

    const bgmButton = document.createElement("li");
    const bgmBtnIcon = document.createElement("i");
    bgmBtnIcon.classList.add("fa");
    bgmBtnIcon.classList.add("fa-music");
    const bgm = document.createElement("audio");
    bgm.src = "../src/assets/audios/gameBGM1.mp3";
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