import React from 'react';
import { Link } from 'react-router-dom';
import API from './../variables.js';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch(`${API}/projects`)
    .then( res => res.json())
    .then( json => {
      this.setState({projects: json});
    });
  }

  renderProjects = () => {
    return this.state.projects.map( (project) => {
      return (
        <Link to={`projects/${project._id}`}>
          <li className="list-element">
              <h3>{project.title}</h3>
              <div className="container-img">
                <img className="img-project" src={'http://www.game-experience.it/wp-content/uploads/2017/06/dragon-ball-fighter-z-299x150.jpg'} alt="illustration-projet"/>
              </div>
              {/*<p className="project-description">{project.description}</p>
                <p>De : {project.creator}</p>*/}
          </li>
        </Link>
      )
    })
  }

  render() {

    return (
      <section>
        <h2 className="main-title">Voici la liste des projets : </h2>
        <ul className="list">
          {this.renderProjects()}
        </ul>
      </section>
    )
  }
}

export default Projects;