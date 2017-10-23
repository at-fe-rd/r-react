import React from 'react';
import './style.scss';

export default class Feature extends React.Component {
  render() {
    return (
      <div className="feature-page">
        <h2>Feature</h2>
        <ul>
          <li>- Bootstrap 4 Stylesheets</li>
          <li>- Router</li>
          <li>- Redux (coming soon)</li>
          <li>- Auth (coming soon)</li>
          <li>- Pop up (coming soon)</li>
          <li>- Modal (coming soon)</li>
        </ul>
      </div>
    );
  }
}
