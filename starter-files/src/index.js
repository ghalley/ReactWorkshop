import React from 'react';
import { render } from 'react-dom'; //can import pieces of modules like this
import Header from './components/header'

import './style.css';

render(<Header />, document.querySelector('#root'));

