import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
        Built in SF <img className="footer_icon" src="http://i.imgur.com/RwtepDc.png"/> by {personalInfo.name}.
        </span>
      </footer>
    );
  }
}
