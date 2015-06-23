var movieArray = ["FARGO", "CHUCKY", "SHREK", "PSYCHO", "WISHCRAFT", "CARS", "RAY", "ALIENS", "ARGO", "CLUE", "LABYRINTH", "SCREAM", "MISERY", "DAVE"];
var movieTitle = "CHUCKY";
var totalGuesses = 8;
var hiddenWord = [];

function newGame()  {
	hiddenWord = [];
	totalGuesses = 8;
	moviePicker(movieArray, hiddenWord);
	listenForNewGame();
	listenForGiveUp();
	listenForEnterPress();

}

//Call on a random movie from array
function moviePicker(movieArray, hiddenWord) {
	var randomNumber = [Math.floor(Math.random()*movieArray.length)];
	movieTitle = movieArray[randomNumber];
	// movieTitle = "FARGO";
	// var testWord = "LLLLL";
	
	for (var i = 0; i < movieTitle.length; i++) {
		hiddenWord.push("_");
	}
	// $('#finalWord').text(testWord);
	$('#finalWord').text(hiddenWord.join(""));
	return movieTitle;
}

// function setCharAt(str, letterIndex, letterPress, newLine)  {
// 	// if (letterIndex > str.length-1) {
// 	// 	return str;
// 	// }
// 	newLine = str.slice(0, letterIndex) + letterPress + str.slice(letterIndex+1);
// 	console.log(newLine);
// 	return newLine;
	
// }

//Collect and check the guessed letter from submission form
//Loop through movie title, if success call on letterRevealer function
//if not, reveal elsewhere and call on the strikeCounter function
function letterChecker(movieTitle) {
	var letterPress = ($('#letter').val()).toUpperCase();
	var letterIndex = movieTitle.indexOf(letterPress);
	var str = ($('#finalWord').text());
	if (letterIndex != -1) {
		//setCharAt(str, letterIndex, letterPress, newLine);
		wordDisplayer(letterIndex, letterPress, str);
	}
	else {
		alert("Nope, guess again.");
		totalGuesses -= 1;
		$('.guesses-left').text(String(totalGuesses));
		strikeCounter(totalGuesses);
	}
	$("#letter").val("");
}
	

//div generator for movie title
function wordDisplayer(letterIndex, letterPress, str) {
	var newLine = str.slice(0, letterIndex) + letterPress + str.slice(letterIndex+1);	
	$('#finalWord').text(newLine);
}

// 	//Called on whenever letterRevealer is sucessfully executed
// 	//Check to see if all letters have been revealed
// 	//if so, declare winner
// 	function winChecker() {

// 	}




//7 strikes per game, one strike expended per wrong letter.
//Every time user is wrong in a guess, subtract 1 from remaining guesses
function strikeCounter(totalGuesses) {
	if (totalGuesses === 0) {
		alert("You've been hung out to dry!");
		newGame();
	}
}






//Regardless if it is correct or not, 
//show all letters that have been guessed
//in the form provided
function displayLetter() {

}

