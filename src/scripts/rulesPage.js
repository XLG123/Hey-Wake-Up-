const rulesArray = [
  "Each level will display 1 teacher and 4 to 12 students. The number of students display will be depending on the level.", // rule 1

  "Each student will have an energy status bar showing their energy level with a matching Dog Image.", // rule 2

  "Each level will have a timer on the top left corner ranging from 30 to 120 seconds.", // rule 3

  "Players must ensure that all students have their energy above or equal to 50% when the timer ends.", // rule 4

  "Players will have to click on each student to ",

  "There will be 6 levels in total with Level 1 being the easiest one and <span class='impossible-level'>Level 6</span> being the <span class='impossible-level'>Impossible Level</span>!" // rule 5
];

const teacherImgSrc = [
  "src/assets/images/teacher/cool.png",
  "src/assets/images/teacher/angry.png"
];

const studentImgSrc = [
  "src/assets/images/students/energyTop.png",
  "src/assets/images/students/energyMiddle.png",
  "src/assets/images/students/energyBottom.png",
  "src/assets/images/students/sleepyTop.png",
  "src/assets/images/students/sleepyMiddle.png",
  "src/assets/images/students/sleepyBottom.png"
];

const showRules = function() {
  expandBlackboard();
  addRules();
  addHomePageButton();
}

const expandBlackboard = function() {
  const blackboard = document.querySelector("#blackboard");
  blackboard.style.width = "60vw";
  blackboard.style.height = "72vh";
}

const addRules = function() {
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

  for (let i = 1; i <= 6; ++i) {
    const rule = document.createElement("li");
    rule.setAttribute("id", `game-rule${i}`);
    rule.innerHTML = rulesArray[i-1];
    rule.classList.add("rule");
    gameRules.appendChild(rule);
  }

  rules.appendChild(gameRules);

  addTeacherImages(rules);
  addStudentImages(rules);
  addScrollDownSign(rules);

  const blackboard = document.querySelector("#blackboard");
  blackboard.appendChild(rules);
}

const addTeacherImages = function(element) {
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
    teacherImg.src = teacherImgSrc[i-1];
    const teacherText = document.createElement("div");
    const imgSrc = teacherImgSrc[i-1].slice(26);

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
}

const addStudentImages = function(element) {
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
    studentImg.src = studentImgSrc[i-1];
    const studentText = document.createElement("div");
    const imgSrc = studentImgSrc[i-1].slice(27);

    if (imgSrc === "energyTop.png") {
      studentText.innerHTML = "energy: 80% - 100%";
    } else if (imgSrc === "energyMiddle.png") {
      studentText.innerHTML = "energy: 65% - 79%";
    } else if (imgSrc === "energyBottom.png") {
      studentText.innerHTML = "energy: 50% - 64%";
    } else if (imgSrc === "sleepyTop.png") {
      studentText.innerHTML = "energy: 35% - 49%";
    } else if (imgSrc === "sleepyMiddle.png") {
      studentText.innerHTML = "energy: 15% - 34%";
    } else if (imgSrc === "sleepyBottom.png") {
      studentText.innerHTML = "energy: 0 - 14 %";
    }

    studentContainer.appendChild(studentImg);
    studentContainer.appendChild(studentText);

    studentImgs.appendChild(studentContainer);
  } 

  element.appendChild(studentImgs);
}

const addScrollDownSign = function(element) {
  const scrollDownSign = document.createElement("i");
  scrollDownSign.classList.add("fa");
  scrollDownSign.classList.add("fa-arrow-down");
  element.appendChild(scrollDownSign);

  const scrollable = document.querySelector("#blackboard");
  const oldPos = scrollable.scrollTop;
  scrollable.addEventListener("scroll", () => {
    const newPos = scrollable.scrollTop;
    const scrollDownSign = document.querySelector(".fa-arrow-down");
    if (newPos > oldPos) {
      scrollDownSign.style.color = "rgba(82, 57, 32, 0.5)";
      scrollDownSign.style.animationPlayState = "paused";
    } else {
      scrollDownSign.style.color = "rgb(82, 57, 32)";
      scrollDownSign.style.animationPlayState = "running";
    }
  })
}

const addGoBackButton = function(element) {
  const goBackButton = document.createElement("i");
  goBackButton.classList.add("fa");
  goBackButton.classList.add("fa-arrow-left");

  element.appendChild(goBackButton);

  goBackButton.addEventListener("click", () => {
    backToHomePage();
  })
}

const addHomePageButton = function() {
  const homePageButton = document.createElement("i");
  homePageButton.classList.add("fa");
  homePageButton.classList.add("fa-home");

  const gameFrame = document.getElementById("game-frame");
  gameFrame.appendChild(homePageButton);

  homePageButton.addEventListener("click", () => {
    backToHomePage();
  })
}

const backToHomePage = function() {
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
}

const shrinkBlackboard = function(blackboard) {
  blackboard.style.width = "40vw";
  blackboard.style.height = "35vh";

  const blackboardTextContentHP = blackboard.querySelector(".blackboard-textcontent-hp");
  blackboardTextContentHP.style.display = "";

  const blackboardButtons = blackboard.querySelectorAll(".blackboard-button");
  blackboardButtons.forEach(blackboardButton => {
    blackboardButton.style.display = "";
  });
}

export { showRules };