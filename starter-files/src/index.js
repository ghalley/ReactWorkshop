import React from 'react';
import { render } from 'react-dom'; //can import pieces of modules like this
import Main from './components/main'
import Single from './components/single';
import Results from './components/results';
import { BrowserRouter, Match } from 'react-router';

import './style.css';

const Root = function() {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Main} />
        <Match pattern="/search/:searchTerm" component={Results} />
        <Match pattern="/beer/:beerId/:beerSlug" component={Single} />
      </div>
    </BrowserRouter>
  )
}
render(<Root />, document.querySelector('#root'));

