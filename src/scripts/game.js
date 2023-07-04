import DifficultyGenerator from "./difficultyGenerator";

export default class Game {
  constructor(level) {
    // this.gameLevel = DifficultyGenerator.
    this.level = level;
    this.removeHomePage();
    this.openGamePage(this.level);
  }

  removeHomePage() {
    const blackboardContent = document.querySelector(".blackboard-textcontent-hp");
    blackboardContent.remove();

    const teacher = document.querySelector("#teacher");
    teacher.remove();

    const students = document.querySelector(".students");
    students.remove();

    const blackboardButtons = document.querySelector(".blackboard-buttons");
    blackboardButtons.remove();
  }

  openGamePage(level) {
    // if (level === 1) {
    //   // DifficultyGenerator.
    // }
  }
}