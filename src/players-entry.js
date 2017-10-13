import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { shuffle } from 'lodash-es';

class PlayersEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPlayers: '',
      playersPerGame: 4,
    };
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="inputPlayers">
            Enter player names
            <textarea
              id="inputPlayers"
              rows={10}
              value={this.state.inputPlayers}
              onChange={e => this.setState({ inputPlayers: e.target.value })}
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
              onChange={e => this.setState({ playersPerGame: e.target.value })}
            />
          </label>
        </div>
        <button
          onClick={() =>
            this.props.onStart({
              players: new Immutable.List(
                shuffle(this.state.inputPlayers.split('\n'))
              ),
              playersPerGame: this.state.playersPerGame,
            })}
        >
          Start
        </button>
      </div>
    );
  }
}

PlayersEntry.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default PlayersEntry;
