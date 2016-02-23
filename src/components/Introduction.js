import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction">
        <h1>I'm a software engineer who's just as excited about algorithms, data structures, and databases as I am about the latest technologies in modern web development.</h1>
      </div>
    );
  }
}

Introduction.propTypes = {
  // personalInfo: PropTypes.personalInfo.isRequired
};
