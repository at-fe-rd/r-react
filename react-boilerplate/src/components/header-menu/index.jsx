import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto d-inline-lg">
          <li className="nav-item">
            <a href="#" className="nav-link">Register</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Log in</a>
          </li>
        </ul>
      </div>
    );
  }
}
