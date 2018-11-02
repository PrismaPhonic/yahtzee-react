import React, { Component } from 'react';
import PlayerScore from './PlayerScore';
import './PlayerScores.css';


class PlayerScores extends Component {

  render() {
    return (
      <div className="PlayerScores">
        <section className="Scoring-section">
          <h2>Player Scores</h2>
          <table cellSpacing="0">
            <tbody>
              {this.props.playerScores.map(score => {
                return <PlayerScore score={score.score} name={score.name} />
              })}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default PlayerScores;