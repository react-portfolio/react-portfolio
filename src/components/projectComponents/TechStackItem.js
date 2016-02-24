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
        <div>
          {tech}
          <img className="tech-icon" src={iconsData[tech]} />
        </div>
      );
    } else {
      return (
        <div>
          {tech}
          <img className="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png" />
        </div>
      );
    }
  }
}

TechStackItem.propTypes = {
  tech: PropTypes.string.isRequired
};
