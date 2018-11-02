import React, { Component } from 'react';
import Dice from './Dice';
import Scoring from './Scoring';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: this.rollDiceAtStart(Array.from({ length: NUM_DICE })),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      playerScores: [],
      upperScore: 0,
      lowerScore: 0,
      currentPlayer: prompt("Player Name")
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  sumUpper() {
    let upper = [this.state.scores.ones, this.state.scores.twos, this.state.scores.threes, this.state.scores.fours, this.state.scores.fives, this.state.scores.sixes]
    return upper.map(score => this.convertIfUndefined(score)).reduce((a, b) => a + b, 0);
  }

  sumLower() {
    let lower = [this.state.scores.threeOfKind, this.state.scores.fourOfKind, this.state.scores.fullHouse, this.state.scores.smallStraight, this.state.scores.largeStraight, this.state.scores.yahtzee, this.state.scores.chance]
    return lower.map(score => this.convertIfUndefined(score)).reduce((a, b) => a + b, 0);
  }

  convertIfUndefined(score) {
    return (score === undefined) ? 0 : score;
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map(
        (d, i) => st.locked[i] ? d : Math.ceil(Math.random() * 6)),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
    }));
  }

  endMatch() {
    let playerScoresUpdate = this.state.playerScores.slice();
    playerScoresUpdate.push({
      name: this.state.currentPlayer,
      score: this.state.upperScore + this.state.lowerScore,
    })

    this.setState(st => ({
      playerScores: playerScoresUpdate,
      dice: this.rollDiceAtStart(Array.from({ length: NUM_DICE })),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      upperScore: 0,
      lowerScore: 0,
      currentPlayer: prompt("Match Over! Next Player Name")
    }))
  }

  isMatchOver() {
    return Object.values(this.state.scores).every(cat => cat !== undefined);
  }

  rollDiceAtStart(diceArray) {
    return diceArray.map((d) => Math.ceil(Math.random() * 6));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ],
    }))
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    if (this.state.scores[rulename] === undefined) {
      this.setState(st => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        upperScore: this.sumUpper(),
        lowerScore: this.sumLower(),
        rollsLeft: NUM_ROLLS,
        locked: Array(NUM_DICE).fill(false),
      }), () => {
        if (this.isMatchOver()) {
          this.endMatch();
        } else {
          this.roll();
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <Dice dice={this.state.dice} locked={this.state.locked} handleClick={this.toggleLocked} />
          <button
            className="Game-reroll"
            disabled={this.state.locked.every(x => x)}
            onClick={this.roll}>
            {this.state.rollsLeft} Rerolls Left
        </button>
          <Scoring doScore={this.doScore} scores={this.state.scores} upperScore={this.state.upperScore} lowerScore={this.state.lowerScore} playerScores={this.state.playerScores} />
        </section>
      </React.Fragment>
    );
  }
}

export default Game;