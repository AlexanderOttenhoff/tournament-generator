import React from 'react';
import Immutable from 'immutable';

import PlayersEntry from './players-entry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: new Immutable.List(),
      playing: false,
      playersPerGame: 4,
    };
  }

  render() {
    return (
      <div>
        {this.state.playing ? (
          <div>
            {this.state.players.size > 1 ? (
              <div>
                Click losing player
                {this.state.players
                  .take(this.state.playersPerGame)
                  .map((player, i) => (
                    <div>
                      <button
                        onClick={() =>
                          this.setState(({ players, playersPerGame }) => ({
                            players: players
                              .skip(playersPerGame)
                              .concat(players.take(playersPerGame).remove(i)),
                          }))}
                      >
                        {player} - {i}
                      </button>
                    </div>
                  ))}
              </div>
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
