import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StyleRoot from 'radium';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App></App>, document.getElementById('root'));
registerServiceWorker();
