import DifficultyGenerator from "./difficultyGenerator";

export default class Game {
  constructor() {
    // this.gameLevel = DifficultyGenerator.
    this.removeHomePage();
    this.openGamePage();
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

  openGamePage() {
    
  }
}