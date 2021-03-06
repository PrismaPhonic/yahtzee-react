import React, { Component } from 'react';
import './Dice.css'

class DiceThree extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size}>
          <circle className="DicePart1" cx="439.9746094" cy="439.9736328" r="57.1152344"/> 
          <circle className="DicePart1" cx="117.0258789" cy="117.0263672" r="57.1147461"/> 
          <path className="DicePart2" d="M553.5,485.5400391
            C553.5,522.9189453,522.9179688,553.5,485.5390625,553.5H71.4589844C34.0820312,553.5,3.5,522.9199219,3.5,485.5410156
            V71.4599609C3.5,34.0820312,34.0820312,3.5,71.4589844,3.5h414.0800781C522.9179688,3.5,553.5,34.0820312,553.5,71.4599609
            V485.5400391z"/>
          <circle className="DicePart1" cx="278.5" cy="278.5" r="57.1152344"/> 
      	</svg>
      </React.Fragment>
    );
  }
}

export default DiceThree;