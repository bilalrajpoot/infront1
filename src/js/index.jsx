
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import {BrowserRouter as Router} from  'react-router-dom';

ReactDOM.render(

  <Router>
    <App />
    </Router>
   ,
  document.querySelector('#app')
);