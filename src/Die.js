import React, { Component } from 'react';
import './Die.css';
import DiceOne from './images/Dice1';
import DiceTwo from './images/Dice2';
import DiceThree from './images/Dice3';
import DiceFour from './images/Dice4';
import DiceFive from './images/Dice5';
import DiceSix from './images/Dice6';

const diceMap = {
  "1": <DiceOne size="50px" />,
  "2": <DiceTwo size="50px" />,
  "3": <DiceThree size="50px" />,
  "4": <DiceFour size="50px" />,
  "5": <DiceFive size="50px" />,
  "6": <DiceSix size="50px" />
}

class Die extends Component {



  render() {
    return (
      <div
        className="Die"
        style={{ backgroundColor: this.props.locked ? "darkred" : "red" }}
        onClick={this.props.handleClick}>
        {diceMap[this.props.val.toString()]}
        {console.log(this.props.val.toString())}
      </div>
    )
  }
}

export default Die;