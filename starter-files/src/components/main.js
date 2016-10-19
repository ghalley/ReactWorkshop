import React from 'react';
import Header from './header'
import Results from './results'
import Single from './single'

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
