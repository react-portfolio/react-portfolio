import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="project-container">
        <div className="screenshot-container">
          Screenshot
        </div>
        <Mobile />
        <div className="project-info">
          Info
        </div>

        <div className="github-info">
          Github
        </div>

      </div>
    );
  }
}

Project.propTypes = {
  actions: PropTypes.object.isRequired
};
