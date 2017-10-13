import React from 'react';
import PropTypes from 'prop-types';

const Ranking = ({ players }) => (
  <div>
    <h1>Ranking</h1>
    <ul>
      {players.map((player, i) => (
        <li>
          <span>{i + 1}</span>
          <span>{player}</span>
        </li>
      ))}
    </ul>
  </div>
);

Ranking.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string),
};

Ranking.defaultProps = {
  players: [],
};

export default Ranking;
