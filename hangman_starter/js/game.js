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
	
	for (var i = 0; i < movieTitle.length; i++) {
		hiddenWord.push("_");
	}
	$('#finalWord').text(hiddenWord.join(""));
	console.log(movieTitle);
	return movieTitle;
}



//Collect and check the guessed letter from submission form
//Loop through movie title, if success call on letterRevealer function
//if not, reveal elsewhere and call on the strikeCounter function
function letterChecker(movieTitle) {
	var letterPress = ($('#letter').val()).toUpperCase();
	var letterIndex = movieTitle.indexOf(letterPress);
	
	if (letterIndex != -1) {
		wordDisplayer(letterIndex, letterPress);
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
function wordDisplayer(letterIndex, letterPress) {
	var str = ($('#finalWord').text());
	//var strArray = str.split("");
	var strChar = str[letterIndex];
	var newLine = str.replace(str[letterIndex], letterPress);
	$('#finalWord').text(newLine);
	console.log(str);
	console.log(newLine);
	console.log(strChar);




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

// 	//Called on whenever strikeCounter is successfully executed
// 	//Check to see how many strikes left out of seven
// 	//if >= 7, execute function loserChecker
// 	function loserChecker() {

// 	}






// //Regardless if it is correct or not, 
// //show all letters that have been guessed
// //in the form provided
// function displayLetter() {

// }

