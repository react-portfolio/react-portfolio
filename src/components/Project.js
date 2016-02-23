import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { projects } = this.props;

    let project;
    let prevProject;
    let nextProject;

    projects.forEach((item, idx, items) => {
      if (item.url === this.props.params.name) {
        project = item;
        const prevIdx = idx - 1 < 0 ? items.length - 1 : idx - 1;
        const nextIdx = (idx + 1) % items.length;
        prevProject = items[prevIdx];
        nextProject = items[nextIdx];
      }
    });

    const projectJson = JSON.stringify(project);

    return (
      <div className="projectWrapper">
        <Link to={`/projects/${prevProject.url}`}>&lt; Previous</Link>
        <Link style={{float: "right"}} to={`/projects/${nextProject.url}`}>Next &gt;</Link>
        <div className="project-container">

          <div className="image-container" >
            <div className="screenshot-container" style={{backgroundImage: `url(${project.desktop_image})`}}>
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
            <div>{project.tech_stack}</div>

          </div>

          <div className="github-info">
            <div> <img src="../data/logos/github-logo.png"/> {project.github_url} </div>
          </div>

        </div>
      </div>
    );
  }
}

Project.propTypes = {
  projects: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps
)(Project);
