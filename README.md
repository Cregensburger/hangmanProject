# Hangman

**Pair Programming Exercise**

## Overview

Today we're going to use JavaScript to develop an all time classic - Hangman. This lab is broken up into two pieces. See if you're able to complete both by the time class is over.

### Demo

To see how the game should function by the time you finish writing the code, you should check out the ```example``` folder and run the code within.

### Front-end

Use the ```hangman_starter``` code as a starting point for your code. Focus on the JavaScript, leave out styling unless you have extra time at the end of the lab.

* Think through the rules of the game before you actually start coding
* Think about what event handlers you'll need to wire the neccessary functionality up 
* Where will the words used for the game come from?
* Think back to the lesson on prototypes and the Todo sample app. How might we structure a ```Game``` object? 
  - What kind of properties and methods would be useful in our ```Game``` object? 
  - How will we check if the player has won the game? 
  - How many guesses do they get? How will we check if they exceeded the maximum number of guesses?  
  - How will we check if they can still continue playing? 

### BONUS: Back-end

Let's spruce up the game with some Ajax. In the folder ```hangman_withajax``` you'll see a rails application ready for you to use as the server. 

1. Clone the repo and navigate to the directory in terminal
2. Create the database and neccessary tables
  * Run ```gem install```
  * Run ```rake db:create```
  * Run ```rake db:migrate```
3. Move the JavaScript from your game.js file to the appropriate place in the Rails application
4. Modify your JavaScript to use Ajax to start a game and retrieve the next word to play
5. After the game is finished, submit another request to the server and save whether the game was won or lost 
