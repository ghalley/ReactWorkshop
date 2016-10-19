import React from 'react';
import Header from './header'

const Main = React.createClass({
  render () {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me, please" />
      </div>
    )
  }
});

export default Main;
