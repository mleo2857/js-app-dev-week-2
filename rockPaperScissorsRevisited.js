const hands = ['rock','paper','scissors'];

function getHand(){
  return hands[parseInt((Math.random()*10)%3)];
}

var playerOne = {
  name: 'Mike',
  hand: getHand,
}

var playerTwo = {
  name: 'Joe',
  hand: getHand,
}

function playRound (playerOne, playerTwo){
  var playerOneRoundHand = playerOne.hand();
  var playerTwoRoundHand = playerTwo.hand();
  console.log('Player one throws ' + playerOneRoundHand);
  console.log('Player two throws ' + playerTwoRoundHand);
  if (playerOneRoundHand === playerTwoRoundHand){
    console.log('draw');
  } else if (playerOneRoundHand === 'rock' && playerTwoRoundHand === 'scissors' ||
              playerOneRoundHand === 'scissors' && playerTwoRoundHand === 'paper' ||
              playerOneRoundHand === 'paper' && playerTwoRoundHand === 'rock'){
                console.log(playerOneRoundHand + ' wins');
                return playerOne;
              }else {
                console.log(playerTwoRoundHand + ' wins');
                return playerTwo;
              }
}

function playGame(playerOne, playerTwo, playUntil){
  let playerOneWins = 0;
  let playerTwoWins = 0;
  while(playerOneWins < playUntil && playerTwoWins < playUntil){
    var round = playRound(playerOne,playerTwo);

    if (round === playerOne){
      playerOneWins += 1;
    } else if (round === playerTwo){
      playerTwoWins += 1;
    }
  }
  if (playerOneWins > playerTwoWins){
    return playerOne.name + ' wins';
  } else{
    return playerTwo.name + ' wins';
  }
}

console.log(playGame(playerOne, playerTwo, 5));
