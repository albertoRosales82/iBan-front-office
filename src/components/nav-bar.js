import React, {useState} from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import './nav-bar.css';


export default () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().names}`
  } else {
    content.message = "You are not logged in"
  }
  return (
    
    
    /*<div 
    
    className="navBar"
    >
      <span className="navLinks">{content.message}</span>
      <nav >
        < Link to="/"className="navLinks">Home</Link>
        {` `}
        {<Link to="/app/createLoan"className="navLinks">CreateLoan</Link>}
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
      <div>*/
      <Navbar color="faded" light>
      <span className="navLinks">{content.message}</span>
        <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/createLoan">CreateLoan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/profile">Profile</NavLink>
            </NavItem>
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
          </Nav>
        </Collapse>
      </Navbar>
    
    
  )
}