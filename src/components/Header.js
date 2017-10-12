import React from 'react';
import {BrowserRouter, Match, Miss } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <nav>
        <div className="brand"></div>
        <div className="nav-menu">
          <ul>
          Match exactly pattern="/" component={ App }
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Contact</li>
          </ul>
        </div>
      </nav>
      </BrowserRouter>
    )
  }
}

export default Header;
