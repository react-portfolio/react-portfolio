import React, { Component, PropTypes } from 'react';
import { iconsData } from '../../data/techStackIcons';

export default class TechStackItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { tech } = this.props;

    if (iconsData[tech]) {
      return (
        <span>
          {tech}
          <img className="tech_icon" src={iconsData[tech]} />
        </span>
      );
    } else {
      return (
        <span>
          {tech}
        </span>
      );
    }
  }
}

TechStackItem.propTypes = {
};
