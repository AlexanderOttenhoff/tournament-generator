import React from 'react';
import PropTypes from 'prop-types';

const Round = ({ players, number, onClick }) => (
  <div>
    <div>Round {number}</div>
    <div>Click on the losing player</div>
    {players.map((player, i) => (
      <div>
        <button key={player} onClick={() => onClick(i)}>
          {player}
        </button>
      </div>
    ))}
  </div>
);

Round.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string),
  number: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Round.defaultProps = {
  players: [],
  number: 0,
};

export default Round;
