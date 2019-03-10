var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

cards[0] = 'cardOne';
cardsInPlay.push('cardOne');
console.log('User flipped Queen');

cards[2] = 'cardTwo';
cardsInPlay.push('cardTwo');
console.log('User flipped King')

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
console.log("You found a match!");
} else {
    console.log("Sorry, try again.");
}