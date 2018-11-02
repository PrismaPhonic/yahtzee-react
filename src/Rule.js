import React, { Component } from 'react';
import './Rule.css'

class Rule extends Component {
  render() {
    return (
      <tr className={this.props.score !== undefined ? "Rule" : "Rule Rule-active"} onClick={this.props.doScore} >
        <td className="Rule-name">{this.props.name}</td>
        <td className="Rule-score">{this.props.score}</td>
      </tr >
    )
  }
}

export default Rule;