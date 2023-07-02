class GameFrame {
  constructor(element) {
    this.element = element;
    this.buildPage(this.element);
    this.bgmToggle();
  }

  buildPage(element) {
  
    this.addBlackboard(element);
    this.addSoundButtons(element);
  }

  addBlackboard(element) {
    const blackboard = document.createElement("div");
    blackboard.setAttribute("id", "blackboard");

    const homepageText = document.createElement("div");
    homepageText.innerHTML = "<p>class Student{ constructor() {this.sleep() = true;}}</p>";
    blackboard.appendChild(homepageText);

    const runButton = document.createElement("button");
    runButton.setAttribute("id", "run-button");
    runButton.innerHTML = "Run";

    blackboard.appendChild(runButton);

    element.appendChild(blackboard);
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