import React from 'react'
import { navigate } from "gatsby"
import { getLoan, setLoan, handleCreateLoan } from "../services/createLoanService"
import "./createLoan.css"
import createLoan from '../images/createLoan.png'
import { Form, FormGroup, Input, FormFeedback,Label,Col,Row } from "reactstrap"

class CrateLoan extends React.Component {
    constructor(props){
        super(props)
        this.state={value:''};

        this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*loan = {
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
    }*/

    state = {
        loan:{
        interesAnual: "",
        bank:"",
        chargeAccount:"",
        cvlCrm:"",
        formalzationDate:"",
        originationScore:"",
        propertyLocation:"",
        customers:{
            idCustomer: ''
        },
        loanConditions:[{
            loanAmount: '',
            guaranteeValue: '',
            notarialCharges: '',
            appraisalExpenses: '',
            disbursedAmount: ''
        }],
        contractTypes:{
            idContractType: ''
        },
        loanOriginators: {
            idLoanOriginator: ''
        },
        loanTypes: {
            idLoanType: ''
        },
        terms: {
            idTerm: '',
            paymentsNumber: ''
        },
    }
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
                            <Input 
                                className="inputInt" 
                                type="text" 
                                name="annualInterest"
                                id="annualInterest"
                                placeholder="Interes anual"
                                value={this.state.interesAnual} 
                                onChange={this.handleUpdate}
                                />
                        </div>
                        </Col>
                        <Col md={6}>
                        <div>
                            {/**bank */}
                            <p className="textInteres" >
                                Banco
                            </p>
                                <Input
                                className="inputInt"
                                type="text" 
                                name="bank"
                                id="bank"
                                placeholder="Banco"
                                value={this.state.bank}
                                onChange={this.handleUpdate}
                                />
                        </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**chargeAccount */}
                            <p className="textInteres">
                                Cuenta Cargo
                            </p>
                                <Input 
                                className="inputInt" 
                                type="text" 
                                name="chargeAccount"
                                id="chargeAccount"
                                placeholder="Cuenta cargo"
                                value={this.state.chargeAccount}
                                onChange={this.handleUpdate}
                                />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**cvlCrm */}
                            <p className="textInteres">
                                CVL de CRM
                            </p>
                                <Input 
                                className="inputInt" 
                                type="text"
                                name="cvlCrm" 
                                id="cvlCrm"
                                placeholder="CVL del CRM"
                                value={this.state.cvlCrm}
                                onChange={this.handleUpdate}/>
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                            {/**formalzationDate */}
                            <p className="textInteres">
                                Fecha de formalizacion
                            </p>
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="formalzationDate"
                            id="formalzationDate"
                            value={this.state.formalzationDate}
                            onChange={this.handleUpdate} 
                            placeholder="dd-mm-yyyy"/>
                            </div>
                        </Col>
                        <Col>
                    <div ms="6">
                        {/**originationScore */}
                        <p className="textInteres">
                            Score
                        </p>
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="originationScore"
                            id="originationScore"
                            value={this.state.originationScore}
                            onChange={this.handleUpdate}
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
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="propertyLocation" 
                            id="propertyLocation"
                            value={this.state.propertyLocation}
                            onChange={this.handleUpdate} 
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
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="idCustomer"
                            id="idCustomer" 
                            value={this.state.idCustomer}
                            onChange={this.handleUpdate}
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
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="loanAmount"
                            id="loanAmount"
                            value={this.state.loanAmount}
                            onChange={this.handleUpdate} 
                            placeholder="Monto del prestamo" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**guaranteeValue */}
                        <p className="textInteres">
                            Valor de la garantia
                            </p>
                        <Input 
                        className="inputInt" 
                        type="text" 
                        name="guaranteeValue"
                        id="guaranteeValue"
                        value={this.state.guaranteeValue}
                        onChange={this.handleUpdate} 
                        placeholder="Valor de la garantia" />
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                        {/**notarialCharges*/}
                        <p className="textInteres">
                            Gastos notariales
                            </p>
                            <Input 
                            className="inputInt" 
                            type="text" 
                            name="notarialCharges"
                            id="notarialCharges"
                            value={this.state.notarialCharges}
                            onChange={this.handleUpdate} 
                            placeholder="Gastos notariales" />
                        </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**appraisalExpenses */}
                    <p className="textInteres">
                        Gastos de avaluo
                    </p>
                        <Input 
                        className="inputInt" 
                        type="text" 
                        name="appraisalExpenses"
                        id="appraisalExpenses"
                        value={this.state.appraisalExpenses}
                        onChange={this.handleUpdate} 
                        placeholder="Gastos de avaluo" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**disbursedAmount */}
                    <p className="textInteres">
                    Monto a desembolsar
                    </p>
                    <Input 
                    className="inputInt" 
                    type="text" 
                    name="disbursedAmount"
                    id="disbursedAmount"
                    value={this.state.disbursedAmount}
                    onChange={this.handleUpdate} 
                    placeholder="Monto a Desembolsar" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idContractType */}
                    <p className="textInteres">
                        Tipo contrato
                    </p>
                        <Input 
                        className="inputInt" 
                        type="text" 
                        name="idContractType"
                        id="idContractType"
                        value={this.state.idContractType}
                        onChange={this.handleUpdate} 
                        placeholder='Tipo de contrato' />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idLoanOriginator */}
                    <p className="textInteres">
                        Loan Originator
                    </p>
                    <Input 
                    className="inputInt" 
                    type="text" 
                    name="idLoanOriginator"
                    id="idLoanOriginator"
                    value={this.state.idLoanOriginator} 
                    onChange={this.handleUpdate} 
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
                    <Input 
                    className="inputInt" 
                    type="text" 
                    name="idLoanType"
                    id="idLoanType" 
                    value={this.state.idLoanType}
                    onChange={this.handleUpdate}
                    placeholder='Tipo de Prestamo' />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**idTerm */}
                    <p className="textInteres">
                        Plazo Id
                    </p>
                    <Input 
                    className="inputInt" 
                    type="text"
                    name="idTerm"
                    id="idTerm"
                    value={this.state.idTerm}
                    onChange={this.handleUpdate} 
                    placeholder="Plazo Id" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div>
                    {/**paymentsNumber */}
                    <p className="textInteres">
                        Plazo
                    </p>
                    <Input 
                    className="inputInt" 
                    type="text" 
                    name="paymentsNumber"
                    id="paymentsNumber"
                    value={this.state.paymentsNumber} 
                    onChange={this.handleUpdate} 
                    placeholder='Plazo' />
                    </div>
                    </Col>
                            <div className="divBtnCrearPrestamo">
                                <Input className="btnInputCrearPrest" type="submit" value="Crear Prestamo" />
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