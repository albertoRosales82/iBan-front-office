import React, {useState} from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Modal,DropdownMenu,DropdownItem,Dropdown,DropdownToggle} from 'reactstrap'
import './nav-bar.css';


export default () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);


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
      <Navbar  color="transparent" light  className="navBar">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">logo</NavbarBrand>
        <span className="navLinks">{content.message}</span>
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar >
          <NavItem>
              <NavLink href="/" className="navLinks">Dashboard</NavLink>
            </NavItem>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Prestamos
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/app/createLoan" className="navLinks">Alta de prestamos</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/app/getLoanFees" className="navLinks">Consulta de cuotas</DropdownItem>
          </DropdownMenu>
        </Dropdown>
            <NavItem>
              <NavLink disabled href="/app/createLoan" className="navLinks">Alta de pr&eacute;stamo</NavLink>
            </NavItem>

            <NavItem>
              <NavLink disabled href="/app/getLoanFees" className="navLinks">Consulta de cuotas</NavLink>
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