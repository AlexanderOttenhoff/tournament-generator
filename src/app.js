import React from 'react';
import Immutable from 'immutable';

import PlayersEntry from './players-entry';
import Round from './round';
import Ranking from './ranking';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Immutable.List(),
      playing: false,
      playersPerGame: 4,
      round: 1,
      ranking: new Immutable.List(),
    };
  }

  render() {
    if (this.state.playing) {
      if (this.state.players.size > 1) {
        return (
          <Round
            number={this.state.round}
            players={this.state.players.take(this.state.playersPerGame)}
            onClick={index =>
              this.setState(({ players, playersPerGame, round, ranking }) => ({
                players: players
                  .skip(playersPerGame)
                  .concat(players.take(playersPerGame).remove(index)),
                round: round + 1,
                ranking: ranking.unshift(players.get(index)),
              }))}
          />
        );
      }
      return <Ranking players={this.state.ranking.toArray()} />;
    }
    return (
      <PlayersEntry
        onStart={({ players, playersPerGame }) =>
          this.setState({
            players,
            playersPerGame,
            playing: true,
          })}
      />
    );
  }
}

export default App;
