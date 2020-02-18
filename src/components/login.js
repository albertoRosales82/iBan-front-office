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
      <div className="modal-dialog text-center ">
        <div className="col-sm-8 main-section">
          <div className="modal-content">
            <div>
            <div className="col-12 user-img">
                    <img src={administrator}  style={{marginLeft:"50%"}}/>
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
                
                <input   style={{marginLeft:"45%"}} class="form-control" type="text" name="username" onChange={this.handleUpdate}  placeholder="nombre de usuario"/>
              </label>
              </div>
              
              <div class="form-group" id="contrasena-group">
              <label>
                
                <input
                style={{marginLeft:"45%"}}
                  class="form-control"
                  placeholder="contraseña"
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              </label>
              </div>
              <input style={{marginLeft:"50%"}} className="btn " type="submit" value="Log In" />
            </form>
            
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default Login