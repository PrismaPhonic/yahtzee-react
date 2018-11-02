import React, { Component } from 'react';

class DiceFive extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size}>
          <rect x="4" y="4" width="549" height="549" rx="68" fill="none" stroke="#000" strokeWidth="7" />
          <g strokeDasharray="0,228.4" strokeLinecap="round">
            <path stroke="#740000" strokeWidth="120" d="m440,440-325-325m2,325 325-325" />
            <path stroke="#FF724C" strokeWidth="110" d="m440,440-325-325m2,325 325-325" />
          </g>
        </svg>
      </React.Fragment>
    );
  }
}

export default DiceFive;