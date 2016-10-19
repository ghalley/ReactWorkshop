import React from 'react';
import Beer from './beer';
import Loader from './loader'

const Results = React.createClass({
  render() {
    if (this.props.loading) {
      return <Loader message="Hang on, don't get frothy"/>
    }
    return (
      <div className="beers">
        {this.props.beers.map((details, i) => <Beer key={i} details={details} />)}
      </div>
    )
  }
});

export default Results;
