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
    homepageText.classList.add("blackboard-textcontent-hp");

    const firstLine = document.createElement("p");
    // firstLine.innerText = "class Student {";
    firstLine.setAttribute("id", "first-line");

    const secondLine = document.createElement("p");
    // secondLine.innerText = "constructor() {";
    secondLine.setAttribute("id", "second-line");

    const thirdLine = document.createElement("p");
    // thirdLine.innerText = "this.sleepy = true;";
    thirdLine.setAttribute("id", "third-line");

    const fourthLine = document.createElement("p");
    // fourthLine.innerText = "this.goToSleep(sleepy);";
    fourthLine.setAttribute("id", "fourth-line");

    const fifthLine = document.createElement("p");
    // fifthLine.innerText = "}";
    fifthLine.setAttribute("id", "fifth-line");

    const sixthLine = document.createElement("p");
    // sixthLine.innerText = "}";
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