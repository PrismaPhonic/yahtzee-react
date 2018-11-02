import React, { Component } from 'react';

class DiceFour extends Component {
  render() {
    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size}>
          <rect x="4" y="4" width="549" height="549" rx="68" fill="none" stroke="#000" strokeWidth="7" />
          <g strokeDasharray="0,323" strokeLinecap="round">
            <path stroke="#740000" strokeWidth="120" d="M117,117v325m323-2V115" />
            <path stroke="#FF724C" strokeWidth="110" d="M117,117v325m323-2V115" />
          </g>
        </svg>
      </React.Fragment>
    );
  }
}

export default DiceFour;