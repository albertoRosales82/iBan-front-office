import React from 'react'
import { getUser } from "../services/auth"
import Sidebar from "../components/sideBar"

const User  = () => {
  return (
    <div>
  <div>
    <Sidebar/>
  </div>
    <div>
      <center><h1>User detail</h1></center>
      
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{getUser().names}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{getUser().email}</h6>
            <p className="card-text">{getUser().password}</p>
          </div>
        </div>
    </div>
    </div>
  )
};

export default User