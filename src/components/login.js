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
            
          <div className="divContainer">
            <img src={administrator} alt="Logo" className="imgAdmon" />
            <div className="divLogIn">
              <h1 className="textLogIn">Inicio de sesion</h1>
            </div>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event)
                navigate(`/app/login/profile`)
              }}
            >
            <div>
            
              <label>
              <h6 className="textName">Usuario</h6>
                <Input className="inputName"  type="text" name="username" onChange={this.handleUpdate}  placeholder="Nombre de usuario"/>
              </label>
            </div>
            <div>
            
              <label>
              <h6 className="textPassword">Contraseña</h6>
                <Input className="inputPassword my-5"
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                />
              </label>
              
            </div>
                <Input className="buttonLogIn p-0 m-0 mx-auto"  type="submit" value="Entrar" />
            </form>
          </div>
    )
  }
}

export default Login