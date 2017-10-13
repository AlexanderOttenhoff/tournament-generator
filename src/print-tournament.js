const printTournament = (numPlayers, numPerGame) => {
  const players = Array(numPlayers)
    .fill()
    .map((_, i) => `Player ${i + 1}`);
  let gameNumber = 1;

  while (players.length > 1) {
    const game = [];
    const numInThisGame = Math.min(numPerGame, players.length);
    for (let i = 0; i < numInThisGame; i++) {
      game.push(players.shift());
    }

    for (let i = 0; i < numInThisGame - 1; i++) {
      players.push(`Position ${i + 1} in game ${gameNumber}`);
    }
    console.log(`Game ${gameNumber++}:\n${game.join('\n')}`);
  }
};

export default printTournament;
