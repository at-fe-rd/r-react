import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar float-left border-right">
        <ul className="list-group">
          <NavLink to="/detail" className="list-group-item list-group-item-action list-group-item-light border-0 rounded-0">Detail</NavLink>
          <NavLink to="/feature" className="list-group-item list-group-item-action list-group-item-light border-0 rounded-0">Feature</NavLink>
          <NavLink to="/document" className="list-group-item list-group-item-action list-group-item-light border-0 rounded-0">Document</NavLink>
          <NavLink to="#" className="list-group-item list-group-item-action list-group-item-light border-0 rounded-0">Page 4</NavLink>
        </ul>
      </div>
    );
  }
}
