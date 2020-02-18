import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import './index.css';


import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1 className="title"> ¡Bienvenido{isLoggedIn() ? getUser().names : ""}!</h1>
    <p>
      {isLoggedIn() ? (
        <h1>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </h1>
      ) : (
        <h1 className="subtitle">
          You should <Link to="/app/login" className="link">log in</Link> to see restricted
          content
        </h1>
      )}
    </p>
  </Layout>
)