import React from 'react'
import {getLoan} from "../services/createLoanService"


const LoanData = () => {
    return (
      <div>
        <center><h1>Detalle del prestamo</h1></center>
        
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{getLoan().cvlCrm}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{getLoan().formalzationDate}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{getLoan().idLoan}</h6>
              {/* <p className="card-text">{getLoan().customers.idCustomer}</p> */}
            </div>
          </div>
      </div>
    )
  };

export default LoanData