// always have to re-import react, b/c there's no global scope
import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  // Link tag uses push state to change url of browser without reloading whole page.
  // React responds to the change in the url alone
  render() {
    return (
      <h1>
        <Link to="/">Beer Me!</Link>
      </h1>
    )
  }
});

export default Header;