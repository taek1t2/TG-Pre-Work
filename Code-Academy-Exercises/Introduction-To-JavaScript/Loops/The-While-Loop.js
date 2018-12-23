const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


//using the while loop if the loop needs to execute an undertermined number of times.
//for loops are ideal if I know how many times the loop should run.
