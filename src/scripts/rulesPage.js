const rulesArray = [
  "Each level will display 1 teacher and 4 to 10 students. The number of students display will be depending on the level.", // rule 1

  "Each student will have an energy status bar showing their energy level with a matching Dog Image.", // rule 2

  "Each level will have a timer on the top left corner ranging from 30 to 60 seconds.", // rule 3

  "Players must ensure that all students have their energy above or equal to 50% when the timer ends.", // rule 4

  "Players must click on each student to add energy points. Otherwise, they will lose energy every second it passes on the timer.", // rule 5

  "<span class='levels'>Level 1 and 2</span>: <span>+5</span>% each click, student energy level -5% each second", // rule 6

  "<span class='levels'>Levels 3</span>: <span>+5</span>% each click, student energy level -4% each second", // rule 7

  "<span class='levels'>Levels 4</span>: <span>+7</span>% each click, student energy level -4% each second", // rule 8

  "<span class='levels'>Levels 5 and 6</span>: <span>+7</span>% each click, student energy level -3% each second", // rule 9

  "There will be 6 levels in total with Level 1 being the easiest one and <span class='impossible-level'>Level 6</span> being the <span class='impossible-level'>Impossible Level</span>!", // rule 10
];

const teacherImgSrc = [
  "src/assets/images/teacher/cool.png",
  "src/assets/images/teacher/angry.png",
];

const studentImgSrc = [
  "src/assets/images/students/energyTop.png",
  "src/assets/images/students/energyMiddle.png",
  "src/assets/images/students/energyBottom.png",
  "src/assets/images/students/sleepyTop.png",
  "src/assets/images/students/sleepyMiddle.png",
  "src/assets/images/students/sleepyBottom.png",
];

const showRules = function () {
  expandBlackboard();
  addRules();
  addHomePageButton();
};

const expandBlackboard = function () {
  const blackboard = document.querySelector("#blackboard");
  blackboard.style.width = "60vw";
  blackboard.style.height = "72vh";
};

const addRules = function () {
  const rules = document.createElement("div");
  rules.setAttribute("id", "game-rules-container");

  const rulesTitle = document.createElement("div");
  rulesTitle.setAttribute("id", "rules-title");
  addGoBackButton(rulesTitle);

  const rulesTitleText = document.createElement("span");
  rulesTitleText.setAttribute("id", "rules-title-text");
  rulesTitleText.innerHTML = "*** Rules ***";
  rulesTitle.appendChild(rulesTitleText);
  rules.appendChild(rulesTitle);

  const gameRules = document.createElement("ul");
  gameRules.setAttribute("id", "game-rules");

  for (let i = 1; i <= 9; ++i) {
    const rule = document.createElement("li");
    rule.setAttribute("id", `game-rule${i}`);
    rule.innerHTML = rulesArray[i - 1];
    rule.classList.add("rule");
    gameRules.appendChild(rule);
  }

  rules.appendChild(gameRules);

  addTeacherImages(rules);
  addStudentImages(rules);
  addScrollDownSign(rules);

  const blackboard = document.querySelector("#blackboard");
  blackboard.appendChild(rules);
};

const addTeacherImages = function (element) {
  const teacherImgsTitle = document.createElement("div");
  teacherImgsTitle.setAttribute("id", "teacher-images-title");
  teacherImgsTitle.innerHTML = "Teacher's Mood:";
  element.appendChild(teacherImgsTitle);

  const teacherImgs = document.createElement("div");
  teacherImgs.setAttribute("id", "teacher-imgs");

  for (let i = 1; i <= 2; ++i) {
    const teacherContainer = document.createElement("div");
    teacherContainer.setAttribute("id", `teacher-container${i}`);

    const teacherImg = document.createElement("img");
    teacherImg.setAttribute("id", `teacher-img${i}`);
    teacherImg.src = teacherImgSrc[i - 1];
    const teacherText = document.createElement("div");
    const imgSrc = teacherImgSrc[i - 1].slice(26);

    if (imgSrc === "cool.png") {
      teacherText.innerHTML = "mood: 100%";
    } else if (imgSrc === "angry.png") {
      teacherText.innerHTML = "mood: 15%";
    }

    teacherContainer.appendChild(teacherImg);
    teacherContainer.appendChild(teacherText);

    teacherImgs.appendChild(teacherContainer);
  }

  element.appendChild(teacherImgs);
};

const addStudentImages = function (element) {
  const studentImgsTitle = document.createElement("div");
  studentImgsTitle.setAttribute("id", "student-images-title");
  studentImgsTitle.innerHTML = "Student Energy Status:";
  element.appendChild(studentImgsTitle);

  const studentImgs = document.createElement("div");
  studentImgs.setAttribute("id", "student-imgs");

  for (let i = 1; i <= 6; ++i) {
    const studentContainer = document.createElement("div");
    studentContainer.setAttribute("id", `student-container${i}`);

    const studentImg = document.createElement("img");
    studentImg.setAttribute("id", `student-img${i}`);
    studentImg.classList.add("student-images");
    studentImg.src = studentImgSrc[i - 1];
    const studentText = document.createElement("div");
    const imgSrc = studentImgSrc[i - 1].slice(27);

    if (imgSrc === "energyTop.png") {
      studentText.innerHTML = "energy: 100% - 80%";
    } else if (imgSrc === "energyMiddle.png") {
      studentText.innerHTML = "energy: 79% - 65%";
    } else if (imgSrc === "energyBottom.png") {
      studentText.innerHTML = "energy: 64% - 50%";
    } else if (imgSrc === "sleepyTop.png") {
      studentText.innerHTML = "energy: 49% - 34%";
    } else if (imgSrc === "sleepyMiddle.png") {
      studentText.innerHTML = "energy: 34% - 15%";
    } else if (imgSrc === "sleepyBottom.png") {
      studentText.innerHTML = "energy: 14% - 0%";
    }

    studentContainer.appendChild(studentImg);
    studentContainer.appendChild(studentText);

    studentImgs.appendChild(studentContainer);
  }

  element.appendChild(studentImgs);
};

const addScrollDownSign = function (element) {
  const scrollDownSign = document.createElement("i");
  scrollDownSign.classList.add("fa");
  scrollDownSign.classList.add("fa-arrow-down");
  element.appendChild(scrollDownSign);

  const scrollable = document.querySelector("#blackboard");
  const oldPos = scrollable.scrollTop;
  scrollable.addEventListener("scroll", () => {
    const newPos = scrollable.scrollTop;
    const scrollDownSign = document.querySelector(".fa-arrow-down");
    if (newPos > oldPos && scrollDownSign) {
      scrollDownSign.style.color = "rgba(82, 57, 32, 0.5)";
      scrollDownSign.style.animationPlayState = "paused";
    } else if (newPos <= oldPos && scrollDownSign) {
      scrollDownSign.style.color = "rgb(82, 57, 32)";
      scrollDownSign.style.animationPlayState = "running";
    }
  });
};

const addGoBackButton = function (element) {
  const goBackButton = document.createElement("i");
  goBackButton.classList.add("fa");
  goBackButton.classList.add("fa-arrow-left");
  goBackButton.classList.add("back-to-hp");

  const goBackHPSoundEffect = document.createElement("audio");
  goBackHPSoundEffect.src = "src/assets/audios/blackboardButton.MP3";
  goBackHPSoundEffect.preload = "auto";
  goBackHPSoundEffect.load();
  goBackHPSoundEffect.classList.add("back-to-hp-sound-effect");

  element.appendChild(goBackButton);
  element.appendChild(goBackHPSoundEffect);

  goBackButton.addEventListener("click", () => {
    const soundEffectBtn = document.querySelector("#sound-effect-button");
    if (soundEffectBtn.getAttribute("soundEffectOn") === "true") {
      goBackHPSoundEffect.play();
      goBackHPSoundEffect.addEventListener("ended", function () {
        backToHomePage();
      });
    } else if (soundEffectBtn.getAttribute("soundEffectOn") === "false") {
      backToHomePage();
    }
  });
};

const addHomePageButton = function () {
  const homePageButton = document.createElement("i");
  homePageButton.classList.add("fa");
  homePageButton.classList.add("fa-home");
  homePageButton.classList.add("back-to-hp");

  const gameFrame = document.getElementById("game-frame");
  gameFrame.appendChild(homePageButton);

  homePageButton.addEventListener("click", () => {
    const soundEffectBtn = document.querySelector("#sound-effect-button");
    if (soundEffectBtn.getAttribute("soundEffectOn") === "true") {
      const goBackHPSoundEffect = document.querySelector(
        ".back-to-hp-sound-effect"
      );
      goBackHPSoundEffect?.play();
      goBackHPSoundEffect?.addEventListener("ended", function () {
        backToHomePage();
      });
    } else if (soundEffectBtn.getAttribute("soundEffectOn") === "false") {
      backToHomePage();
    }
  });
};

const backToHomePage = function () {
  const gameRules = document.getElementById("game-rules-container");
  gameRules.remove();

  const blackboard = document.querySelector("#blackboard");
  shrinkBlackboard(blackboard);

  const teacher = document.getElementById("teacher");
  teacher.style.display = "";

  const students = document.querySelector(".students");
  students.style.display = "";

  const homePageButton = document.querySelector(".fa-home");
  homePageButton.remove();
};

const shrinkBlackboard = function (blackboard) {
  blackboard.style.width = "40vw";
  blackboard.style.height = "35vh";

  const blackboardTextContentHP = blackboard.querySelector(
    ".blackboard-textcontent-hp"
  );
  blackboardTextContentHP.style.display = "";

  const blackboardButtons = blackboard.querySelectorAll(".blackboard-button");
  blackboardButtons.forEach((blackboardButton) => {
    blackboardButton.style.display = "";
  });
};

export { showRules, shrinkBlackboard, studentImgSrc };
