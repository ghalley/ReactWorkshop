import React from 'react';

const Loader = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },

  render() {
    return (
      <div className="loader">
        <img src="/images/ball.svg"/>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
});

export default Loader;
