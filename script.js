//Score keeping
let userScore = 0;
let computerScore = 0;

//Returns a Random Number Between 0 and almost 4
function autoMove() {
	let moveType = Math.random() * 4;
	return moveType;
}

//Uses random number to make a move and returns Rock, Paper or Scissors
function computerPlay() {
	let move = autoMove();
	if (move <= 1) {
		console.log('Computer Chose Rock');
		return 'rock';
	} else if (move <= 2) {
		console.log('Computer Chose Paper');
		return 'paper';
	} else {
		console.log('Computer Chose Scissors');
		return 'scissors';
	}
}

//Contains Game Logic
//Compares values and returns win or lose
//Choice 1 is user move
function compare(choice1, choice2) {
	if (choice1 === choice2) {
		return "It's a tie!";
	}
	if (choice1 === 'rock') {
		if (choice2 === 'scissors') {
			// rock wins
			userScore++;
			console.log('You win!');
		} else {
			// paper wins
			computerScore++;
			console.log('You lose! Try again.');
		}
	}
	if (choice1 === 'paper') {
		if (choice2 === 'rock') {
			// paper wins
			userScore++;
			console.log('You win!');
		} else {
			// scissors wins
			computerScore++;
			console.log('You lose! Try again.');
		}
	}
	if (choice1 === 'scissors') {
		if (choice2 === 'rock') {
			// rock wins
			computerScore++;
			console.log('You lose! Try again.');
		} else {
			// scissors wins
			userScore++;
			console.log('You win!');
		}
	}
}

//Detects Button Clicks
document.getElementById('rock').addEventListener('click', function() {
	playRound('rock');
});
document.getElementById('paper').addEventListener('click', function() {
	playRound('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
	playRound('scissors');
});

//Updates and displays scores
function updateScores() {
	document.getElementById('user_score').innerHTML = userScore;
	document.getElementById('computer_score').innerHTML = computerScore;
	console.log('Update Scores Called');
}

//Plays a round of the game
function playRound(userSelection) {
	console.log('You Chose ' + userSelection);
	compare(userSelection, computerPlay());
	updateScores();
}
