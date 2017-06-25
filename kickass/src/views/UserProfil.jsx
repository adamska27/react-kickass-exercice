import React from 'react';
import API from './../variables.js';
import '../CSS/Profile.css';
import FormUser from '../components/Forms/FormUser.jsx';
import Button from '../components/Button.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      id: this.props.match.params.id,
      name: '',
      age: '',
      type: '',
      showUpdateForm: false,
      // redirect: false
    }
  }

  componentDidMount = () => {
      fetch(`${API}/user/${this.state.id}`)
      .then( res => res.json())
      .then( (json) => {
        this.setState({user: json})
      })
  }

  showForm = () => {
    this.setState({showUpdateForm: this.showUpdateForm =! this.showUpdateForm})
  }

  render() {
    let classShowUpdateForm = this.state.showUpdateForm === true ? 'show-form' : '';
    let { name, age, type } = this.state.user;

    // const { from } = this.props.location.state || '/'
    // const { redirect, id } = this.state

    return(
      <section>
        <h2 className="main-title">Profil</h2>
        <div className="profile-container">
          <div className="profile-content">
            <div>
              <img className="profile-img" src={'https://s-media-cache-ak0.pinimg.com/736x/28/da/d0/28dad0354b0fe720de843f9acf9c8710.jpg'} alt="#"/>
            </div>
            <div className="profile-data">
              <p>Nom: {name}</p>
              <p>Age: {age}</p>
              <p>Type: {type}</p>
              <div>
                <Button value="Modif Info" onClick={this.showForm}
                />
              </div>
            </div>
          </div>
        </div>

          <FormUser method="update"
            classContainerForm="update-info"
            classForm={classShowUpdateForm}
            userId={this.state.id}
            showForm={this.showForm}
          />
      </section>
    )
  }
}

export default UserProfile;