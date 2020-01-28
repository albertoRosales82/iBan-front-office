import React from 'react'

const User = ({ appUser }) => {
  return (
    <div>
      <center><h1>User detail</h1></center>
      {appUser.map((appUser) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{appUser.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{appUser.email}</h6>
            <p className="card-text">{appUser.password}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default User