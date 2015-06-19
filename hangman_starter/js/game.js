var movieArray = ["Aladdin", "Gaslight"];
var movieTitle = "FARGO";
var totalGuesses = 8;

//Call on a random movie from array
function moviePicker() {
	var randomNumber = [Math.floor(Math.random()*moviePicker.length)];
	movieTitle = movieArray[randomNumber];
	return movieTitle;
}



//Collect and check the guessed letter from submission form
//Loop through movie title, if success call on letterRevealer function
//if not, reveal elsewhere and call on the strikeCounter function
function letterChecker() {
	var letterPress = ($('#letter').val()).toUpperCase();
	var letterIndex = movieTitle.indexOf(letterPress);
	wordDisplayer(letterIndex, letterPress);
	if (letterIndex != -1) {
		alert("Correct, way to get ahead of the game!");
	}
	else {
		alert("Nope, guess again.");
		totalGuesses -= 1;
		strikeCounter();
	}
}
	

//div generator for movie title
function wordDisplayer(letterIndex, letterPress) {
	var str = ($('#finalWord').text());
	var newLine = str.replace(str[letterIndex], letterPress)
	console.log(letterIndex);
	$('#finalWord').text(newLine);


}

// //Reveals letter on the line if correct
// function letterRevealer(movieTitle) {

//}

// 	//Called on whenever letterRevealer is sucessfully executed
// 	//Check to see if all letters have been revealed
// 	//if so, declare winner
// 	function winChecker() {

// 	}




//7 strikes per game, one strike expended per letter.
//Every time user is wrong in a guess, add a strike
function strikeCounter(totalGuesses) {
	if (totalGuesses === 0) {
		alert("You've been hung out to dry!");
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

