import React from 'react'
import { getFeePayments } from "../services/getFeePaymentsService"
import { Input, Col, Row } from "reactstrap"
import { ApplyPaymentModalForm } from "../components/applyPaymentModalForm"

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
        //handleApplyPaymen(this.state)
        ApplyPaymentModalForm
    }

    render() {

        return (
            <>
                <h1>Pagos de una cuota</h1>
                <form method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                    }}>
                    <div style={{ width: '70%', alignContent: 'center' }}>
                        <h2>Detalle de la cuota</h2>
                        <div>
                            <Row className=" d-flex justify-content-center">
                                <Col md="2" >
                                    <label>N&uacute;mero</label>
                                    <Input width="10"></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Fecha</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Monto Pendiente</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Interes</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Monto pagado</label>
                                    <Input></Input>
                                </Col>
                            </Row>
                            <Row className=" d-flex justify-content-center">
                                <Col md="2" >
                                    <label>Seguro de daños</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Seguro de vida</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Administraci&oacute;n</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>IVA</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Cuota S/IVA</label>
                                    <Input></Input>
                                </Col>
                            </Row>
                            <Row className=" d-flex justify-content-center">
                                <Col md="2" >
                                    <label>Cuota C/IVA</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                    <label>Valor del contrato</label>
                                    <Input></Input>
                                </Col>
                                <Col md="2" >
                                </Col>
                                <Col md="2" >
                                </Col>
                                <Col md="2" >
                                </Col>
                            </Row>
                            <Row className=" d-flex justify-content-center">
                                <Col md="2" >
                                </Col>
                                <Col md="2" >
                                </Col>
                                <Col md="2" >
                                </Col>
                                <Col md="8" >
                                    <Input className="btnInputConsult mx-auto" type="submit" value="Aplicar Pago" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </form>


                <div>
                    <h2>Pagos</h2>
                    <div id="paymentsTable">
                    </div>
                </div>
                
            </>
        )
    }

    componentDidMount() {
        //Se debe realizar el llamado al servicio de consulta de pagos de una cuota

        getFeePayments('LOAN0000034', '1')
    }

}
export default FeePayments