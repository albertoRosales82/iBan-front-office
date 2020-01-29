import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button } from 'reactstrap';
import administrator from '../images/administrator.png'
import '../components/login.css'
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
          <div class="modal-content">
            <div>
            <div class="col-12 user-img">
                    <img src={administrator} />
                </div>
            <form class="col-12"
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/app/login/profile`)
              }}
            >
             <div class="form-group" id="user-group">
              <label >
                
                <input  class="form-control" type="text" name="username" onChange={this.handleUpdate}  placeholder="nombre de usuario"/>
              </label>
              </div>
              
              <div class="form-group" id="contrasena-group">
              <label>
                
                <input
                  class="form-control"
                  placeholder="contraseña"
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              </label>
              </div>
              <input  className="btn" type="submit" value="Log In" />
            </form>
            
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default Login