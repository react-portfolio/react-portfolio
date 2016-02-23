import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand pull-left">
                <a href="#" > John Brogrammer </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href="#" className="nav-link">
                    <span className="hide-when-small">Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    <i className="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
    );
  }
}
