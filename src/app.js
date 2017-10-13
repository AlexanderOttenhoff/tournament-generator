import React from 'react';
import Immutable from 'immutable';
import { shuffle } from 'lodash-es';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersInput: '',
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
          <div>
            <ul>
              {this.state.players.map((player, i) => (
                <li key={player}>
                  {player}
                  <button
                    onClick={() =>
                      this.setState(({ players }) => ({
                        players: players.delete(i),
                      }))}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <label htmlFor="playersInput">
                Enter player names
                <textarea
                  id="playersInput"
                  rows={10}
                  value={this.state.playersInput}
                  onChange={e =>
                    this.setState({ playersInput: e.target.value })}
                />
              </label>
            </div>
            <div>
              <label htmlFor="playersPerGame">
                Players per game
                <input
                  id="playersPerGame"
                  type="number"
                  value={this.state.playersPerGame}
                  onChange={e =>
                    this.setState({ playersPerGame: e.target.value })}
                />
              </label>
            </div>
            <button
              onClick={() =>
                this.setState(({ playersInput }) => ({
                  players: new Immutable.List(
                    shuffle(playersInput.split('\n'))
                  ),
                  playing: true,
                }))}
            >
              Go
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
