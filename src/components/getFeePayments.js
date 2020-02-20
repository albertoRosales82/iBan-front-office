import React from 'react'
import { Form, FormGroup, Input, FormFeedback } from "reactstrap"

import { getFeePayments } from "../services/getFeePaymentsService"
import "./getFeePayments.css"
class FeePayments extends React.Component {
    state = {
      idFee: ``,
      idLoan: ``,
    }
  
    handleUpdate = event => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  
    handleSubmit = event => {
      event.preventDefault()
      //handleSubmit2(this.state)
    }
  
    render() {
      
      return (
              <>
              <h1 className="titlesPagosCuo">Pagos de una cuota</h1>
            <div id="paymentsTable">
            </div>
            </>
      )
    }
  
    componentDidMount(){
        //Se debe realizar el llamado al servicio de consulta de pagos de una cuota

        getFeePayments('LOAN0000034', '1')
    }

}
  
  

  export default FeePayments