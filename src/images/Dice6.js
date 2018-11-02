import React, { Component } from 'react';
import './Dice.css'

class DiceSix extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size}>
          <rect x="3.5" y="3.5" width="550" height="550" rx="70" fill="none" stroke="#000" strokeWidth="7" />
          <g className="DicePart3">
            <path d="M437,117H0M437,440H0" />
            <path d="M437,117H0M437,440H0" stroke="#FF724C" strokeWidth="109" />
          </g>
        </svg>
      </React.Fragment>
    );
  }
}

export default DiceSix;