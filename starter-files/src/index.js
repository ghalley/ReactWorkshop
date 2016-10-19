import React from 'react';
import { render } from 'react-dom'; //can import pieces of modules like this
import Main from './components/main'

import './style.css';

render(<Main />, document.querySelector('#root'));

