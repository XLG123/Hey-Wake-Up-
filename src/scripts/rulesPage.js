// const teacherCoolImg = document.createElement("img");
// teacherCoolImg.setAttribute("id", "teacher-cool-img");

// const studentsImg = document.createElement("img")

const rulesArray = [
  "Each level will display 1 teacher and 4 to 16 students. The number of students display will be depending on the level.", // rule 1

  "Each student will have an energy status bar showing their energy level with a matching Dog Image.", // rule 2

  "Each level will have a timer on the top left corner ranging from 30 to 120 seconds.", // rule 3

  "Players must ensure that all students have their energy above or equal to 50% when the timer ends.", // rule 4

  "If the player fails to complete this task, the player will lose one heart and will have to replay the current level.", // rule 5

  "Each player has 3 hearts. If a player loses all three hearts, the game is over." // rule 6
];

// const teacherImgSrc = [
  
// ];

const showRules = function() {
  expandBlackboard();
  addRules();
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
  rulesTitle.innerHTML = "*** Rules ***";
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

  const blackboard = document.querySelector("#blackboard");
  blackboard.appendChild(rules);
}

const addTeacherImages = function(element) {
  const teacherImgs = document.createElement("div");
  teacherImgs.setAttribute("id", "teacher-imgs");

  // Teacher Image Container 1

  const teacherContainer1 = document.createElement("div");
  teacherContainer1.setAttribute("id", "teacher-container1");

  const teacherImg1 = document.createElement("img");
  teacherImg1.setAttribute("id", "teacher-img1");
  teacherImg1.src = "src/assets/images/teacher/cool.png";
  
  const teacher1text = document.createElement("div");
  teacher1text.innerHTML = "Teacher mood: 100%";
  
  teacherContainer1.appendChild(teacherImg1);
  teacherContainer1.appendChild(teacher1text);
  
  teacherImgs.appendChild(teacherContainer1);
  teacherImgs.appendChild(teacherContainer1);
  
  // Teacher Image Container 2
  
  const teacherContainer2 = document.createElement("div");
  teacherContainer2.setAttribute("id", "teacher-container2");
  
  const teacherImg2 = document.createElement("img");
  teacherImg2.setAttribute("id", "teacher-img2");
  teacherImg2.src = "src/assets/images/teacher/angry.png";

  const teacher2text = document.createElement("div");
  teacher2text.innerHTML = "Teacher mood: 15%";

  teacherContainer2.appendChild(teacherImg2);
  teacherContainer2.appendChild(teacher2text);
  
  teacherImgs.appendChild(teacherContainer2);
  teacherImgs.appendChild(teacherContainer2);

  element.appendChild(teacherImgs);

}

const addStudentImages = function(element) {
  const studentImgs = document.createElement("div");
  studentImgs.setAttribute("id", "student-imgs");
  
}

export { showRules };