import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./nav-bar"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default Layout