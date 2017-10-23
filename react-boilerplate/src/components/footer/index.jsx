import React from 'react';
import './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light fixed-bottom border-top p-3 footer">
        <div className="float-left">React Boilerplate</div>
        <div className="float-right">
          Please raise feedback or questions on
          <a href="https://github.com/at-fe-rd/r-react/issues" target="_blank"> Github</a>
        </div>
      </footer>
    );
  }
}
