import React from 'react';
import './style.scss';

export default class Detail extends React.Component {
  render() {
    return (
      <div className="detail-page">
        <h2>Detail</h2>
        <p>Name: react-boilerplate</p>
        <p>Github: <a href="https://github.com/at-fe-rd/r-react">https://github.com/at-fe-rd/r-react</a></p>
        <p>Version: 0.1.0</p>
      </div>
    );
  }
}
