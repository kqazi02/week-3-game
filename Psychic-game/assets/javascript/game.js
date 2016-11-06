//initialize the variables and assign values to them.

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDone = [];
var randNum = Math.floor(Math.random()*alphabet.length);
//push the display onto HTML.
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

//add event listener for key up.
document.addEventListener("keyup", function(){
	
	// convert the key stroke to letter
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	//
	guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		guessesDone.push(userInput);
		// console.log(guessesDone);

		if (userInput === alphabet[randNum]){
			wins++;
			// console.log(wins);
			var dispWins = "Wins: " + wins; 
			document.getElementById("wins").innerHTML = dispWins;
			reset();
		}
		else{

			if (guessesLeft < 1){
		 		losses++;
		 		var dispLosses = "Losses: " + losses;
		 		// console.log(losses);
		 		document.getElementById("losses").innerHTML = dispLosses;
		 		reset();
			}

		}
//reset the guesses, guesses left, and letter to be guesses
function reset(){

	guessesDone = [];
	guessesLeft = 11;
	randNum = Math.floor(Math.random()*alphabet.length); 
};

});
	

