import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// lib
import 'bootstrap';

// Stylesheets
import 'styles/style.scss';

// App Router
import AppConfig from './config/app-config';

class ReactBoilerplate extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppConfig />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<ReactBoilerplate />, document.getElementById('root'));
