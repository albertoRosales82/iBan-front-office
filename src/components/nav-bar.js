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
      <Navbar  color="faded" light  className="navBar">
      <span className="navLinks">{content.message}</span>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">logo</NavbarBrand>
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar>
          <NavItem>
              <NavLink href="/" className="navLinks">Dashboard</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/app/createLoan" className="navLinks">Alta de pr&eacute;stamo</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/app/getLoanFees" className="navLinks">Consulta de cuotas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/app/profile" className="navLinks">Profile</NavLink>
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