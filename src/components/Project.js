import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';
import githubIcon from '../data/logos/github-logo.png';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { project } = this.props;    
    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
      <div className="project-container">

        <div className="image-container" >
          <div className="screenshot-container">
            <img src={project.desktop_image}/>
          </div>

          <Mobile image={project.mobile_image}/>

        </div>

        <div className="project-info">

          <a href={project.project_url}><h2>{project.title}</h2></a>
          <div>{project.date}</div>
          <h4>Background</h4>
          <div>{project.background}</div>
          <h4>Role</h4>
          <div>{project.role}</div>
          <h4>Tech Stack</h4>
          <div>{techStackItems}</div>

        </div>

        <div className="github-info">
          <div> <img src={githubIcon}/> {project.github_url} </div>
        </div>

      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
