import React from 'react';
import Beer from './beer';

const Results = React.createClass({
  render() {
    return (
      <div className="beers">
        {this.props.beers.map((details, i) => <Beer key={i} details={details} />)}
      </div>
    )
  }
});

export default Results;
