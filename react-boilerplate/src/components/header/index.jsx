import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/logo/index';
import HeaderMenu from 'components/header-menu/index';
import './style.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="border-bottom">
        <nav className="navbar navbar-expand-sm navbar-primary bg-light">
          <Link to="/" className="navbar-brand">
            <Logo />
          </Link>
          AT - FrontEnd Team
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <HeaderMenu />
        </nav>
      </header>
    );
  }
}
