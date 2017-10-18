import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { shuffle } from 'lodash-es';
import './assets/css/style.css';

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
      <div className="players-entry">
        <header>
          <h1>Players entry</h1>
        </header>
        <div className="title-section">
          <h2>100cc SPECIAL CUP FINAL</h2>
        </div>
        <section>
          <label htmlFor="inputPlayers">
            Enter player names
            <textarea
              id="inputPlayers"
              placeholder="copy paste your list here"
              rows={10}
              value={this.state.inputPlayers}
              onChange={e => this.setState({ inputPlayers: e.target.value })}
            />
          </label>
          <label htmlFor="playersPerGame">
            Players per game
            <input
              id="playersPerGame"
              type="number"
              value={this.state.playersPerGame}
              onChange={e => this.setState({ playersPerGame: e.target.value })}
            />
          </label>
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
        </section>
      </div>
    );
  }
}

PlayersEntry.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default PlayersEntry;
