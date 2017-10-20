/*
 * Create a list that holds all of your cards
 */
// var card = require('data.js')

// var deck = [
//   card.diamond, card.paperPlane, card.anchor, card.bolt, card.cube, card.leaf, card.bicycle, card.bomb,
//   card.diamond, card.paperPlane, card.anchor, card.bolt, card.cube, card.leaf, card.bicycle, card.bomb
// ];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 // function gameInit(){
 //   var shuffled_deck=shuffle(deck);
 //
 // }


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(deck) {
    var currentIndex = deck.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Making game functioalityn here
clickOnce = []
clickTwice = []
$('li.card').click(function(){
  clickOnce.push($(this).children());
  $(this).addClass("show open");
});
$('li.card').click(function(){
  clickTwice.push($(this).children());
  $(this).addClass("show open");
})
if(clickOnce[0][0].className == clickTwice[0][0].className){
  clickOnce[0].parent().addClass("matched");
  clickTwice[0].parent().addClass("matched");
}else{
  clickOnce[0].parent().removeClass("show open");
  clickTwice[0].parent().removeClass("show open");
}

//restart button selector
$('div.restart').click(restart());
//restart button functionality
function restart(){


}
