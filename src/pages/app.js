import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import User from "../components/user"
import CrateLoan from "../components/createLoan"
import LoanData from "../components/loanData"
import LoanFees from "../components/getLoanFees"
import FeePayments from "../components/getFeePayments"

const App = () => (
  <Layout>

    {/* Definir las rutas aqui para direccionar a las paginas */}
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <User path="/app/user" />
      {/**Creacion de prestamo */}
      <CrateLoan path="/app/createLoan" />
      <LoanData path="/app/loanData" />
      {/**Creacion de prestamo */}

      {/**Consulta de cuotas */}
      <LoanFees path="/app/getLoanFees" />
      {/**Consulta de cuotas */}

      {/**Consulta de pagos */}
      <FeePayments path="/app/getFeePayments" />
      {/**Consulta de pagos */}
    </Router>
  </Layout>
)

export default App