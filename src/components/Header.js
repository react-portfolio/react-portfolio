import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
		<div className="navbar navbar-fixed-top" role="navigation" >
          <nav className="navbar-inner header">
            
            <div className="container">
              <div className="navbar-brand">
                <a href="#" > YOUR NAME HERE </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href="#" className="navbar-brand">
                    Resume 
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-brand">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-brand">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-brand">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="navbar-brand">
                    <i className="fa fa-angellist"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
		</div>
    );
  }
}
