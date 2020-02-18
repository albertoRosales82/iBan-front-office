import React from 'react'
import { navigate } from "gatsby"
import { getLoan, setLoan, handleCreateLoan } from "../services/createLoanService"
import Sidebar from "../components/sideBar"
import Container from '@material-ui/core/Container'

import styles from "./form.module.scss"
import StylesForm from "./form.scss"

import { Form, FormGroup, Input, FormFeedback } from "reactstrap"

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


{/*                 <Container>
                    <Sidebar />
                </Container> */}

                <h1>Crear Prestamo</h1>
                {/* <form
                            method="post"
                            onSubmit={event => {
                                this.handleSubmit(event)
                                navigate(`/app/loanData`)
                            }}> */}

                <Form method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/loanData`)
                    }}>

                    <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}>
                        <div className={styles.halfInput + " mr-lg-2"}>
                            {/**annualInterest*/}
                            <Input type="text" name="annualInterest" onChange={this.handleUpdate}
                                cssModule={StylesForm}
                                className={this.props.field && "blue"} required
                                id="annualInterest"
                                placeholder="Interes anual"
                                value="0.30" />
                            <FormFeedback>{this.state.errors.nombre.text}</FormFeedback>

                        </div>

                        <div className={styles.halfInput + " ml-lg-2"}>
                            {/**bank */}
                            <label>
                                Banco
              <Input type="text" name="bank" onChange={this.handleUpdate} value="BBVA Bancomer" />
                            </label>
                            <label></label>
                        </div>
                    </FormGroup>
                    {/**chargeAccount */}
                    <label>
                        Cuenta Cargo
              <Input type="text" name="chargeAccount" onChange={this.handleUpdate} value="123456789" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**cvlCrm */}
                    <label>
                        CVL de CRM
              <Input type="text" name="cvlCrm" onChange={this.handleUpdate} value="CVL0000001" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**formalzationDate */}
                    <label>
                        Fecha de formalizacion
              <Input type="text" name="formalzationDate" onChange={this.handleUpdate} value="2020-01-31" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**originationScore */}
                    <label>
                        Score
              <Input type="text" name="originationScore" onChange={this.handleUpdate} value="AAA" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**propertyLocation */}
                    <label>
                        Ubicacion de la propiedad
              <Input type="text" name="propertyLocation" onChange={this.handleUpdate} value="MX" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**idCustomer */}
                    <label>
                        Numero de cliente
              <Input type="text" name="idCustomer" onChange={this.handleUpdate} value="C000000001" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**loanAmount */}
                    <label>
                        Monto del prestamo
              <Input type="text" name="loanAmount" onChange={this.handleUpdate} value="200000.00" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**guaranteeValue */}
                    <label>
                        Valor de la garantia
              <Input type="text" name="guaranteeValue" onChange={this.handleUpdate} value="1500000.00" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**notarialCharges*/}
                    <label>
                        Gastos notariales
              <Input type="text" name="notarialCharges" onChange={this.handleUpdate} value="10000.00" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**appraisalExpenses */}
                    <label>
                        Gastos de avaluo
              <Input type="text" name="appraisalExpenses" onChange={this.handleUpdate} value="10000.00" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**disbursedAmount */}
                    <label>
                        monto a desembolsar
              <Input type="text" name="disbursedAmount" onChange={this.handleUpdate} value="180000.00" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**idContractType */}
                    <label>
                        Tipo contrato
              <Input type="text" name="idContractType" onChange={this.handleUpdate} value='1' />
                    </label>
                    <label></label>
                    <br></br>
                    {/**idLoanOriginator */}
                    <label>
                        Loan Originator
              <Input type="text" name="idLoanOriginator" onChange={this.handleUpdate} value='1' />
                    </label>
                    <label></label>
                    <br></br>
                    {/**idLoanType */}
                    <label>
                        Tipo Prestamo
              <Input type="text" name="idLoanType" onChange={this.handleUpdate} value='1' />
                    </label>
                    <label></label>
                    <br></br>
                    {/**idTerm */}
                    <label>
                        Plazo Id
              <Input type="text" name="idTerm" onChange={this.handleUpdate} value="1" />
                    </label>
                    <label></label>
                    <br></br>
                    {/**paymentsNumber */}
                    <label>
                        Plazo
              <Input type="text" name="paymentsNumber" onChange={this.handleUpdate} value='72' />
                    </label>
                    <label></label>
                    <br></br>
                    <Input type="submit" value="Crear Prestamo" />
                    <br></br>

                </Form>

            </>
        )
    }
}


export default CrateLoan