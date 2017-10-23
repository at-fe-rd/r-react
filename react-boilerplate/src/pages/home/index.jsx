import React from 'react';
import './style.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1 className="mb-5">React Boilerplate</h1>
        <img src="https://react-etc.net/files/2016-07/logo-578x270.png" alt="react" />
      </div>
    );
  }
}
