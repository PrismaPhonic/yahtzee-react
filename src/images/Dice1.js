import React, { Component } from 'react';

class DiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size}>
          <rect x="4" y="4" width="549" height="549" rx="68" fill="none" stroke="#000" strokeWidth="7" />
          <circle fill="#FF724C" stroke="#700" strokeWidth="5" cx="278" cy="278" r="57" />
        </svg>
      </React.Fragment>
    );
  }
}

export default DiceOne;
