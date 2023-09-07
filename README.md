# Hey! Wake Up! 

## Background  
[Hey! Wake Up!](https://xlg123.github.io/Hey-Wake-Up-/) is a game that builds up on the concept of students taking a nap when the teachers have their backs against them. The game will have approximately 3 to 6 levels and the player will have 30 to 60 seconds to help the students wake up depending on the level they are playing. Each level will display 4 to 10 students and 1 teacher on the web page. Each student will have a energy level status showing how sleepy they are.

The game will require the player to keep clicking on the students that are falling asleep to give them more energy. After the timer is up, the teacher will turn his/her face around and looking for students that are sleeping. If a student's energy level status is below 50%, the player fails. To pass each level, the players must ensure all students have their energy above or equal to 50% when the timer ends.

## Functionality & MVPs  
With Hey! Wake Up!, players will have fun while:  
- Helping students to wake up in the classroom when the teacher turn his/her back against the students
- Competing with the timer to help as much students as possible
- Watching the students' images change from energetic to sleepy
- Challenging themselves with the impossible level 6

## Instructions
1. Players will be given a timer for each level ranging from 30 seconds on level 1 to 60 seconds on level 6.
2. Players will be required to click on each student to increase their energy percentage to make sure they don't fall below 50% when the timer finishes counting.
3. A player only passes the current level if  all students have their energy percentage above or equal to 50%. Otherwise, a player fails the current level.

## Wireframes
![Hide and Sleep Wireframe](src/assets/images/wireframe.png)
[Figma Wireframe](https://www.figma.com/proto/2qE9LmP9WiDT8S0dl0k2zp/JSP-Game-Wireframe?page-id=0%3A1&type=design&node-id=120-205&viewport=-1512%2C-175%2C0.5&t=8VkJ8Yarj4JbQxU7-1&scaling=scale-down&starting-point-node-id=120%3A205&mode=design)(Actual game looks similar to the this wireframe)

## Home Page
![Game Home Page](src/assets/images/readmePictures/xlg123.github.io_Hey-Wake-Up-_%20(1).png)

## Rules Page
![Rules Page](src/assets/images/readmePictures/xlg123.github.io_Hey-Wake-Up-_%20(2).png)

## Levels Page
![Levels Page](src/assets/images/readmePictures/xlg123.github.io_Hey-Wake-Up-_%20(3).png)

## Level Three Page
![Level Three Page](src/assets/images/readmePictures/xlg123.github.io_Hey-Wake-Up-_%20(5).png)

## Technologies, Libraries, and APIs
The game does not involve any third party libaries and currently no APIs are used to fetch data while implementing the game.

## Code Snippets
### Timer
Set up a timer for each level based on the level. Timer starts after giving the players five second to get ready.
```javascript
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
```

### Increment Energy Percentage Each Click
Add an event listener to each student image allows their energy percentage to increase when the player clicks on them. Once the player clicks on the student image, it will update the energy percentage with clickablePoints that is corresponding to each level.
```javascript
async clickableStudents(level) {
  await delayLoop5();

  let studentSize = 4;
  let clickablePoints = 5;

  if (level === 3) {
    studentSize = 6;
    clickablePoints = 5;
  } else if (level === 4) {
    studentSize = 8;
    clickablePoints = 7;
  } else if (level === 5 || level === 6) {
    studentSize = 10;
    clickablePoints = 7;
  }

  for (let i = 1; i <= studentSize; ++i) {
    const studentImg = document.querySelector(
      `#level${level}-student-${i}-img`
    );
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
```

### Decrement Energy Percentage Each Second
Decrease all students energy percentage once the timer starts counting until the timer stops. Each second the students will lose a certain amount of energy percentage corresponding to each level.
```javascript
decrementEnergyPoints(level) {
  let points = 5;
  if (level === 3 || level === 4) {
    points = 4;
  } else if (level === 5 || level === 6) {
    points = 3;
  }

  this._decrement(level, points);
}

async _decrement(level, points) {
  await delayLoop5();
  const students = document.querySelectorAll(`.level${level}-energy-level`);

  const fcn = function () {
    students.forEach((student) => {
      let energy = parseInt(student.innerHTML);

      if (energy - points < 0) {
        student.innerHTML = "0";
      } else {
        energy -= points;
        student.innerHTML = `${energy}`;
      }
    });
  };

  const decreasePoints = setInterval(fcn, 1000);

  let stopTime = 30000;

  if (level === 3 || level === 4) {
    stopTime = 45000;
  } else if (level === 5 || level === 6) {
    stopTime = 60000;
  }

  setTimeout(function () {
    clearInterval(decreasePoints);
  }, stopTime);
}
```

## Implementation Timeline
- __Friday Afternoon & Weekend__: Hosted project on GitHub Pages, finished implementing the Home Page and working on the Rules Page and Levels Page, applying CSS styling while implementation was in progress.
- __Tuesday__: Finished setting up the Rules Page and Levels Page, started building the first level and worked on the styling at the same time.
- __Wednesday__: Finished implementation of all six levels of the game and finished styling. Hunt for potential rendering errors across Windows, Mac, and Touch Screen devices. 
- __Thursday Morning__: Hunt for any bugs in the game, and if time allows, fix the bugs and updated README.

## Current Progress: 
- [x] General game layout in wireframe
- [x] General game layout on GitHub Pages
- [x] Set up game home page
- [x] Set up game rules page
- [x] Set up first level
- [x] Set up the remaining five levels
- [x] Set up credits page for outside resources used in the game

### Core features Implemented:
- [x] Players can to go from home page to rules page
- [x] Players can to start the game from level 1 or choose any levels they want
- [x] Players can to click on the students to help them wake up within the time frame that is set by the timer for each level
- [x] Players can mute and unmute the background music of the game

### Bonus features:
- [x] Adding sound effects to every buttons in the game
- [x] Players will be able to mute and unmute the sound effects of the buttons
- [x] Players will be able to go from one level to another directly on the same page without going back to the home page
- [ ] Giving players the freedom to change the theme of the game
- [ ] More levels will be added.
