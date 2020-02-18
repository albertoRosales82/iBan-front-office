import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import './nav-bar.css';
export default () => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().names}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    <div 
    className="navBar"
    >
      <span className="navLinks">{content.message}</span>
      <nav >
        < Link to="/"className="navLinks">Home</Link>
        {` `}
        {/*<Link to="/app/createLoan"className="navLinks">CreateLoan</Link>*/}
        {` `}
        <Link to="/app/profile"className="navLinks">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}>
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  )
}