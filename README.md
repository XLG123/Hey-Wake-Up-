# Hide and Sleep  

## Background  
Hide and Sleep is a game that builds up on the concept of students taking a nap when the teachers have their backs against them. The game will have approximately 3 to 6 levels and the player will have 30 to 120 seconds to help the students nap depending on the level they are playing. Each level will display 4 to 30 students and 1 teacher on the web page. Each student will have a "sleepy status bar" showing how sleepy they are. The bar will have a linear gradident background between red and green with red being the most sleepy and green being energized. Each bar will have its own upside down triangular indicator that points at the current sleepy level of a student.  

The game will require the player to keep pressing on the students that are falling asleep and hold onto it as long as possible within the time frame. After the timer is up, the teacher will turn his/her face around and looking for students that are sleeping. If a student's sleepy status bar has the indicator pointing at the red side, the student will fall asleep in front of the teacher and the player will get one fail and required to repeat the level. A player is allowed to fail three attempts before the game is over. In order to win the game, the player must pass all the levels within three failed attempts.

----
## Functionality & MVPs  
With Hide and Sleep, players will have fun while:  
- Helping students to take a nap in the classroom when the teacher turn his/her back against the students
- Competing with the timer to help as much students as possible
- Challenging themselves with the impossible level 6
- more details will be updated...

----
## Wireframes
![Hide and Sleep Wireframe](src/assets/images/wireframe.png)
[Figma Wireframe](https://www.figma.com/proto/2qE9LmP9WiDT8S0dl0k2zp/JSP-Game-Wireframe?page-id=0%3A1&type=design&node-id=120-205&viewport=-1512%2C-175%2C0.5&t=8VkJ8Yarj4JbQxU7-1&scaling=scale-down&starting-point-node-id=120%3A205&mode=design)(updating it every day with features being added or removed)

----
## Technologies, Libraries, and APIs
This project will be implemented with the following technologies:  
`Canvas API`: render the game graphics (Might not need Canvas API to render game graphics, to be updated)  
<!-- `Anime.css`: apply animation effects when players click on the screen -->
`font-awesome`: Used font-awesome api to render icons  
`google-fonts`: Used google font api for creative fonts  

----
## Implementation Timeline
- __Friday Afternoon & Weekend__: Finish building the UI for one level, set up most of the css styling for the students and the rest of the game page. Ready to render the game home page by the end of Friday Night and have the first three levels ready on Monday morning.
- __Monday__: Continue working on the game view, and allow players to modify some settings of the game such as muting the background music and sound effects.
- __Tuesday__: Continue working on the game view until everything is ready for hosting on GitHub Pages. If time allows, adding more levels to the game.
- __Wednesday__: Deploy to GitHub pages and make sure the game renders correctly on both Windows and Mac, and on different browsers.
- __Thursday Morning__: Check if there is any bugs in the game, and if time allows, fix the bugs and rewrite README with the most updated information.

----
## Bonus features
There are some exciting features that will be implemented in the future:
- Storing a player's highest score and show it at the top right corner
- Giving players the freedom to change the theme of the game and uploading images to represent the students and the teacher
- More levels will be added.  

----
## Current Progress: 
- [ ] General game layout in wireframe
- [x] General game layout on GitHub Pages
- [x] Setting up game home page
- [x] Setting up game rules page
- [ ] Setting up first level
- [ ] Setting up the remaining five levels

Core features Implemented:
- [x] Players will be able to go from home page to rules page
- [ ] Players will be able to start the game from level 1 or choose any levels they want
- [ ] Players will be able to click on the Tutorial button to watch a clip on YouTube on how to play the game
- [ ] Players will be able to press on the students to help them sleep within the time frame that is set by the timer for each level
- [ ] Players will be able to mute the soundtrack and sound effects of the game
- [ ] Players will be able to see how many fail attempts they have left for the game

To be updated daily