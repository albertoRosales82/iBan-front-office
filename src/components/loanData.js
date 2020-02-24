import React from 'react'
import { getLoan } from "../services/createLoanService"
import { FormGroup, Label, Col, Row } from "reactstrap"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./createLoan.css"


const LoanData = () => {
  return (
    <>
      <Row className="p-0 m-0 mx-auto" >
        <Col className=" d-flex justify-content-center flex-column">
          <div className="formTitle" >
            <h3>Detalle del prestamo {getLoan().idLoan}</h3>
          </div>
          <FormGroup className="backgroundform" >
            <Row className=" d-flex justify-content-center">
              <Col md="6" >
                <div>
                  <p className="textInteres">
                    Interes anual
                        </p>
                  {/**annualInterest*/}
                  <Label
                    className="inputInt"
                    type="text"
                    name="annualInterest"
                    id="annualInterest"
                    placeholder="Interes anual"
                    value={getLoan().annualInterest}

                  />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  {/**bank */}
                  <p className="textInteres" >
                    Banco
                            </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="bank"
                    id="bank"
                    placeholder="Banco"
                    value={getLoan().bank}

                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**chargeAccount */}
                  <p className="textInteres">
                    Cuenta Cargo
                            </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="chargeAccount"
                    id="chargeAccount"
                    placeholder="Cuenta cargo"
                    value={getLoan().chargeAccount}

                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**cvlCrm */}
                  <p className="textInteres">
                    CVL de CRM
                            </p>
                  <label
                    className="inputInt"
                    type="text"
                    name="cvlCrm"
                    id="cvlCrm"
                    placeholder="CVL del CRM"
                    value={getLoan().cvlCrm}
                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**formalzationDate */}
                  <p className="textInteres">
                    Fecha de formalizacion
                            </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="formalzationDate"
                    id="formalzationDate"
                    value={getLoan().formalzationDate}

                    placeholder="dd-mm-yyyy" />
                </div>
              </Col>
              <Col>
                <div ms="6">
                  {/**originationScore */}
                  <p className="textInteres">
                    Score
                        </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="originationScore"
                    id="originationScore"
                    value={getLoan().originationScore}

                    placeholder="Score"
                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**propertyLocation */}
                  <p className="textInteres">
                    Ubicacion de la propiedad
                        </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="propertyLocation"
                    id="propertyLocation"
                    value={getLoan().propertyLocation}

                    placeholder="Ubicacion de la propiedad"
                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**idCustomer */}
                  <p className="textInteres">
                    Numero de cliente
                        </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="idCustomer"
                    id="idCustomer"
                    value={getLoan().idCustomer}

                    placeholder="Numero de cliente"
                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**loanAmount */}
                  <p className="textInteres">
                    Monto del prestamo
                        </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="loanAmount"
                    id="loanAmount"
                    value={getLoan().loanAmount}

                    placeholder="Monto del prestamo" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**guaranteeValue */}
                  <p className="textInteres">
                    Valor de la garantia
                            </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="guaranteeValue"
                    id="guaranteeValue"
                    value={getLoan().guaranteeValue}

                    placeholder="Valor de la garantia" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**notarialCharges*/}
                  <p className="textInteres">
                    Gastos notariales
                            </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="notarialCharges"
                    id="notarialCharges"
                    value={getLoan().notarialCharges}

                    placeholder="Gastos notariales" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**appraisalExpenses */}
                  <p className="textInteres">
                    Gastos de avaluo
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="appraisalExpenses"
                    id="appraisalExpenses"
                    value={getLoan().appraisalExpenses}

                    placeholder="Gastos de avaluo" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**disbursedAmount */}
                  <p className="textInteres">
                    Monto a desembolsar
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="disbursedAmount"
                    id="disbursedAmount"
                    value={getLoan().disbursedAmount}

                    placeholder="Monto a Desembolsar" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**idContractType */}
                  <p className="textInteres">
                    Tipo contrato
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="idContractType"
                    id="idContractType"
                    value={getLoan().idContractType}

                    placeholder='Tipo de contrato' />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**idLoanOriginator */}
                  <p className="textInteres">
                    Loan Originator
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="idLoanOriginator"
                    id="idLoanOriginator"
                    value={getLoan().idLoanOriginator}

                    placeholder='Loan Originator'
                  />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**idLoanType */}
                  <p className="textInteres">
                    Tipo Prestamo
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="idLoanType"
                    id="idLoanType"
                    value={getLoan().idLoanType}

                    placeholder='Tipo de Prestamo' />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**idTerm */}
                  <p className="textInteres">
                    Plazo Id
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="idTerm"
                    id="idTerm"
                    value={getLoan().idTerm}

                    placeholder="Plazo Id" />
                </div>
              </Col>
              <Col md="6">
                <div>
                  {/**paymentsNumber */}
                  <p className="textInteres">
                    Plazo
                    </p>
                  <Label
                    className="inputInt"
                    type="text"
                    name="paymentsNumber"
                    id="paymentsNumber"
                    value={getLoan().paymentsNumber}

                    placeholder='Plazo' />
                </div>
              </Col>
              <Col md="6">

<a href="https://iban-loans-amortizationplans.s3.us-east-2.amazonaws.com/LOAN0000117_AmortizationPlan.pdf" target="_blank">
Tabla de amortización
</a>

              </Col>
              {/* <div className="divBtnCrearPrestamo">
              <Label className="btnInputCrearPrest" type="submit" value="Crear Prestamo" />
            </div> */}
            </Row>
          </FormGroup>
        </Col>
      </Row>

    </>
  )
};

export default LoanData