import React, { Component } from 'react';
import './PlayerScore.css'

class PlayerScore extends Component {
  render() {
    return (
      <tr className="PlayerScore">
        <td className="PlayerScore-name">{this.props.name}</td>
        <td className="PlayerScore-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default PlayerScore;