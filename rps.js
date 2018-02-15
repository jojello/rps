//  GIVEN, WHEN, THEN

//

//Given player 1 chose rock
const computer = getRandomResult();
let player;
//  When player 2 chooses paper

document.querySelector('.paper').addEventListener('click', () => {
  player = 'paper'

  if(computer === 'rock') {
    playerWins()
  } else if (computer ==='scissors') {
    computerWins()
  } else {
    tie()
  }
})

document.querySelector('.rock').addEventListener('click', () => {
  player = 'rock'

  if(computer === 'scissors') {
    playerWins()
  } else if (computer ==='paper') {
    computerWins()
  } else {
    tie()
  }
})

document.querySelector('.scissors').addEventListener('click', () => {
  player = 'scissors'

  if(computer === 'paper') {
    playerWins()
  } else if (computer ==='rock') {
    computerWins()
  } else {
    tie()
  }
})
//  Then player 2 wins.


//Given player 1 chose paper
//  When player 2 chooses scissors
//  Then player 2 wins.

//Given player 1 chose scissors
//  When player 2 chooses rock
//  Then player 2 wins.

//Given player 1 chooses a move
//  When player 2 chooses the same move
//  Then player 1 and player 2 tie
