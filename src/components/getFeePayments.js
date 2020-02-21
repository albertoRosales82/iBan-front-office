import React, { useState } from 'react'
import { getFeePayments } from "../services/getFeePaymentsService"
import { handleCreateFeePayment } from "../services/createFeePaymentService"
import { Input, Col, Row } from "reactstrap"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./getFeePayments.css"

class FeePayments extends React.Component {

    state = { open: false, amount:''};

    render() {

        const { state } = this;
        const setState = state => this.setState(state);

        const handleClickOpen = () => {
            setState({ open: true })
        };

        const handleClose = () => {
            setState({ open: false })
        };

        const handleUpdateAmount = event =>{
            setState({amount:event.target.value})
        }

        const handleSubmitPayment = () =>{
            handleCreateFeePayment(window.localStorage.getItem('idLoanItem'), window.localStorage.getItem('idFeeItem'),this.state.amount)
            setState({ open: false })
        }

        return (
            <>
                <h1>Pagos de una cuota</h1>

                <div style={{ width: '70%', alignContent: 'center' }}>
                    <h2>Detalle de la cuota</h2>
                    <div>
                        <Row className=" d-flex justify-content-center">
                            <Col md="2" >
                                <label>N&uacute;mero</label>
                                <Input width="10" value={window.localStorage.getItem('idFeeItem')}></Input>
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
                            <Col md="2" >
                                <Button onClick={() => setState({ open: true })}>Aplicar pago</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
               {/**En este div se hace el render de la tabla */}
                <div>
                    <h2>Pagos</h2>
                    <div id="paymentsTable">
                    </div>
                </div>
                {/**Contiene la ventana modal para la aplicación de un pago */}
                <div>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        Open form dialog
                    </Button>
                    <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Aplicar Pago</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Esta apunto de aplicar un pago para el prestamo: {window.localStorage.getItem("idLoanItem")}
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Monto del pago"
                                fullWidth
                                onChange={handleUpdateAmount}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancelar
                            </Button>
                            <Button onClick={handleSubmitPayment} color="primary">
                                Registrar Pago
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>


            </>
        )
    }

    componentDidMount() {
        //Se debe realizar el llamado al servicio de consulta de pagos de una cuota
        this.setState({ open: false })
        getFeePayments(window.localStorage.getItem('idLoanItem'), window.localStorage.getItem('idFeeItem'))
    }

}
export default FeePayments