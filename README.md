# Hide and Sleep  

## Background  
Hide and Sleep is a game that builds up on the concept of students taking a nap when the teachers have their backs against them. The game will have approximately 3 to 6 levels and the player will have 30 to 120 seconds to help the students nap depending on the level they are playing. Each level will display 4 to 30 students and 1 teacher on the web page. Each student will have a "sleepy status bar" showing how sleepy they are. The bar will have a linear gradident background between red and green with red being the most sleepy and green being energized. Each bar will have its own upside down triangular indicator that points at the current sleepy level of a student.  

The game will require the player to keep pressing on the students that are falling asleep and hold onto it as long as possible within the time frame. After the timer is up, the teacher will turn his/her face around and looking for students that are sleeping. If a student's sleepy status bar has the indicator pointing at the red side, the student will fall asleep in front of the teacher and the player will get one fail and required to repeat the level. A player is allowed to fail three attempts before the game is over. In order to win the game, the player must pass all the levels within three failed attempts.

----
## Functionality & MVPs  
With Hide and Sleep, players will have fun while:  
- Start and pausing the game
- Press on the students that are falling asleep
- to be updated...

----
## Wireframes
![Hide and Sleep Wireframe](src/assets/images/wireframe.png)  

----
## Technologies, Libraries, and APIs
This project will be implemented with the following technologies:  
`Canvas API`: render the game graphics  
`Anime.css`: apply animation effects when players click on the screen

----
## Implementation Timeline
- __Friday Afternoon & Weekend__: Finish building the UI for one level, set up most of the css styling for the students and the rest of the game page. Have the Canvas API ready for rendering the game view.
- __Monday__: Continue working on the game view, and add a home page to allow players to modify some settings of the game such as muting the background music.
- __Tuesday__: Continue working on the game view until everything is ready for hosting on GitHub Pages. If time allows, adding five more levels to the game.
- __Wednesday__: Deploy to GitHub pages and make sure the game renders correctly on both Windows and Mac.
- __Thursday Morning__: Check if there is any bugs in the game, and if time allows, fix the bugs and rewrite README with the most updated information.

----
## Bonus features
There are some exciting features that will be implemented in the future:  
- Store a player's highest score and show it at the top right corner
- Giving players the freedom to change the theme of the game