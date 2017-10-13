import React from 'react';
import Immutable from 'immutable';

import PlayersEntry from './players-entry';
import Round from './round';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Immutable.List(),
      playing: false,
      playersPerGame: 4,
      round: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.playing ? (
          <div>
            {this.state.players.size > 1 ? (
              <Round
                number={this.state.round}
                players={this.state.players.take(this.state.playersPerGame)}
                onClick={index =>
                  this.setState(({ players, playersPerGame, round }) => ({
                    players: players
                      .skip(playersPerGame)
                      .concat(players.take(playersPerGame).remove(index)),
                    round: round + 1,
                  }))}
              />
            ) : (
              <div>A winner is {this.state.players.get(0)}</div>
            )}
          </div>
        ) : (
          <PlayersEntry
            onStart={({ players, playersPerGame }) =>
              this.setState({
                players,
                playersPerGame,
                playing: true,
              })}
          />
        )}
      </div>
    );
  }
}

export default App;
