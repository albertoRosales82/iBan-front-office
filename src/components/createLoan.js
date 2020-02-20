import React from 'react'
import { navigate } from "gatsby"
import { getLoan, setLoan, handleCreateLoan } from "../services/createLoanService"
import "./createLoan.css"
import createLoan from '../images/createLoan.png'
import { Form, FormGroup, Input, FormFeedback,Label,Col,Row } from "reactstrap"

class CrateLoan extends React.Component {
    loan = {
        'annualInterest': '0.30',
        'bank': 'BBVA Bancomer',
        'chargeAccount': '123456789',
        'cvlCrm': 'CVL0000001',
        'formalzationDate': '2020-01-31',
        'originationScore': 'AAA',
        'propertyLocation': 'MX',
        'customers':
        {
            'idCustomer': 'C000000001'
        },
        'loanConditions': [{
            'loanAmount': '200000.00',
            'guaranteeValue': '1500000.00',
            'notarialCharges': '10000.00',
            'appraisalExpenses': '10000.00',
            'disbursedAmount': '10000.00'
        }],
        'contractTypes': {
            'idContractType': '1'
        },
        'loanOriginators': {
            'idLoanOriginator': '1'
        },
        'loanTypes': {
            'idLoanType': '1'
        },
        'terms': {
            'idTerm': '1',
            'paymentsNumber': '72'
        }
    }

    state = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        calle: "",
        numExt: "",
        colonia: "",
        cp: "",
        validator: false,
        errors: {
            nombre: {
                value: false,
                text: "",
            },
            apellido: {
                value: false,
                text: "",
            },
            telefono: {
                value: false,
                text: "",
            },
            email: {
                value: false,
                text: "",
            },
            calle: {
                value: false,
                text: "",
            },
            numExt: {
                value: false,
                text: "",
            },
            colonia: {
                value: false,
                text: "",
            },
            cp: {
                value: false,
                text: "",
            },
        },
    }

    handleUpdate = event => {
        setLoan({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleCreateLoan(this.loan)
    }

    render() {

        return (
            <>
                <Row className="p-0 m-0 mx-auto" >
                    <Col  className=" d-flex justify-content-center flex-column">
                <div className="formTitle" >
                    
                    <h3>Crear Prestamo</h3>
                </div>
                    <Form 
                        method="post"
                        onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/loanData`)
                    }}>
                    <FormGroup  className="backgroundform" >
                        <Row className=" d-flex justify-content-center">
                            <Col md="6" >
                        <div>
                        <p className="textInteres">
                                Interes anual
                        </p>
                            {/**annualInterest*/}
                            <Input className="inputInt" type="text" name="annualInterest" onChange={this.handleUpdate}
                                id="annualInterest"
                                placeholder="Interes anual"
                                value="0.30" />
                            <FormFeedback>{this.state.errors.nombre.text}</FormFeedback>
                        </div>
                        </Col>
                        <Col md={6}>
                        <div>
                            {/**bank */}
                            <p className="textInteres" >
                                Banco
                            </p>
                                <Input className="inputInt"
                                type="text" 
                                name="bank" 
                                onChange={this.handleUpdate} 
                                value="BBVA Bancomer" />
                        </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**chargeAccount */}
                            <p className="textInteres">
                                Cuenta Cargo
                            </p>
                                <Input className="inputInt" type="text" 
                                name="chargeAccount" 
                                onChange={this.handleUpdate} 
                                value="123456789" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**cvlCrm */}
                            <p className="textInteres">
                                CVL de CRM
                            </p>
                                <Input className="inputInt" type="text"
                                name="cvlCrm" 
                                onChange={this.handleUpdate} 
                                value="CVL0000001" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**formalzationDate */}
                            <p className="textInteres">
                                Fecha de formalizacion
                            </p>
                            <Input className="inputInt" type="text" 
                            name="formalzationDate" 
                            onChange={this.handleUpdate} 
                            value="2020-01-31" />
                            </div>
                        </Col>
                        <Col>
                    <div ms="6">
                        {/**originationScore */}
                        <p className="textInteres">
                            Score
                        </p>
                            <Input className="inputInt" 
                            type="text" 
                            name="originationScore" 
                            onChange={this.handleUpdate} 
                            value="AAA" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**propertyLocation */}
                        <p className="textInteres">
                            Ubicacion de la propiedad
                        </p>
                            <Input className="inputInt" 
                            type="text" 
                            name="propertyLocation" 
                            onChange={this.handleUpdate} 
                            value="MX" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**idCustomer */}
                        <p className="textInteres">
                            Numero de cliente
                        </p>
                            <Input className="inputInt" type="text" 
                            name="idCustomer" 
                            onChange={this.handleUpdate} 
                            value="C000000001" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**loanAmount */}
                        <p className="textInteres">
                            Monto del prestamo
                        </p>
                            <Input className="inputInt" type="text" 
                            name="loanAmount" 
                            onChange={this.handleUpdate} 
                            value="200000.00" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**guaranteeValue */}
                        <p className="textInteres">
                            Valor de la garantia
                            </p>
                        <Input className="inputInt" type="text" 
                        name="guaranteeValue" 
                        onChange={this.handleUpdate} 
                        value="1500000.00" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**notarialCharges*/}
                        <p className="textInteres">
                            Gastos notariales
                            </p>
                            <Input className="inputInt" type="text" 
                            name="notarialCharges" 
                            onChange={this.handleUpdate} 
                            value="10000.00" />
                        </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**appraisalExpenses */}
                    <p className="textInteres">
                        Gastos de avaluo
                    </p>
                        <Input className="inputInt" type="text" 
                        name="appraisalExpenses" 
                        onChange={this.handleUpdate} 
                        value="10000.00" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**disbursedAmount */}
                    <p className="textInteres">
                    monto a desembolsar
                    </p>
                    <Input className="inputInt" type="text" 
                    name="disbursedAmount" 
                    onChange={this.handleUpdate} 
                    value="180000.00" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idContractType */}
                    <p className="textInteres">
                        Tipo contrato
                    </p>
                        <Input className="inputInt" type="text" 
                        name="idContractType" 
                        onChange={this.handleUpdate} 
                        value='1' />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idLoanOriginator */}
                    <p className="textInteres">
                        Loan Originator
                    </p>
                    <Input className="inputInt" type="text" 
                    name="idLoanOriginator" 
                    onChange={this.handleUpdate} 
                    value='1' />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idLoanType */}
                    <p className="textInteres">
                        Tipo Prestamo
                    </p>
                    <Input className="inputInt" type="text" 
                    name="idLoanType" 
                    onChange={this.handleUpdate}
                    value='1' />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idTerm */}
                    <p className="textInteres">
                        Plazo Id
                    </p>
                    <Input className="inputInt" type="text"
                    name="idTerm" 
                    onChange={this.handleUpdate} 
                    value="1" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**paymentsNumber */}
                    <p className="textInteres">
                        Plazo
                    </p>
                    <Input className="inputInt" type="text" 
                    name="paymentsNumber" 
                    onChange={this.handleUpdate} 
                    value='72' />
                    </div>
                    </Col>
                            <div className="btnCrearPrestamo">
                                <Input  type="submit" value="Crear Prestamo" />
                            </div>
                    </Row>
                    </FormGroup>
                </Form>
                </Col>
                </Row>
            </>
        )
    }
}


export default CrateLoan