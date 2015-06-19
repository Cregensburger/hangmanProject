var movieArray = ["Aladdin", "Gaslight"];
var movieTitle = "FARGO";


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

}

//div generator for movie title
function wordDisplayer(movieTitle) {
	$('.game-word').append('daisy');
}

// //Reveals letter on the line if correct
// function letterRevealer(movieTitle) {

// 	//Called on whenever letterRevealer is sucessfully executed
// 	//Check to see if all letters have been revealed
// 	//if so, declare winner
// 	function winChecker() {

// 	}




// //7 strikes per game, one strike expended per letter.
// //In the case where there are repeat letters...
// //all are revealed, no need for repeat guessing.
// function strikeCounter() {

// }

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