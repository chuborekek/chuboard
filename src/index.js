//copy the package.json and to install the needed dependancies
//npm install ---legacy-peer-deps

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import  App from './App';

import {ContextProvider} from './contexts/ContextProvider';

ReactDOM.render(<ContextProvider><App /></ContextProvider>,document.getElementById('root'));