import React from 'react';
import './style.scss';

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo d-inline-block align-center">
        <img src="./assets/images/logo.png" height="50"/>
      </div>
    );
  }
}
