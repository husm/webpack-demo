// var greeting = require('./Greeter.js');
// import { greeting } from './Greeter';
// import './main.css';

// document.getElementById('root').appendChild(greeting());

import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';
// import './main.css';

render(<Greeter />, document.getElementById('root'));
