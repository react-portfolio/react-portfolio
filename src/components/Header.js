import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand">
                <a href="#" > {personalInfo.name} </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href={personalInfo.resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.email} className="nav-link">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.github} className="nav-link" target="_blank">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.linkedIn} className="nav-link" target="_blank">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.angelList} className="nav-link" target="_blank">
                    <i className="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
    );
  }
}
