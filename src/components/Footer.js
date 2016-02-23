import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <span id="footer-text-wrap">
        Architected in SF <img className="icon" src="http://i.imgur.com/RwtepDc.png"/> by <a href="http://www.davidtsai.codes">Rachel RoseFigura</a>.
        </span>
      </footer>
    );
  }
}
