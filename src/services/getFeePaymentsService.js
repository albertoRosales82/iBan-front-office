import ReactDOM from 'react-dom'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { navigate } from "gatsby"

export const getFeePayments = (idLoan, idFee) => {

    if (idLoan !== null && idFee !== null) {

        var clientHeaders = new Headers({
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET'
        });

        setRows([])
        fetch('http://172.10.0.113:5002/loans/'+idLoan+'/fees/'+idFee, {
            method: 'get',
            headers: clientHeaders
        })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        alert('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    } else {
                        // Examine the text in the response
                        response.json().then(function (paymentsList) {
                            
                            paymentsList.forEach(payment => {
                                rows.push(createData(payment.idPayment, payment.paymentdate, payment.typePayment, payment.paymentAmount, payment.status.idStatus))
                            });

                            const table = (
                                <TableContainer component={Paper}>
                                    <Table style={{'width': '650px'}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="right">#</TableCell>
                                                <TableCell align="right">Fecha</TableCell>
                                                <TableCell align="right">Tipo</TableCell>
                                                <TableCell align="right">Monto</TableCell>
                                                <TableCell align="right">Estatus</TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id="tableBodyId">
                                            {rows.map(row => (
                                                <TableRow key={row.idPayment}>
                                                    <TableCell align="right" component="th" scope="row">
                                                        {row.idPayment}
                                                    </TableCell>
                                                    <TableCell align="right">{row.paymentdate}</TableCell>
                                                    <TableCell align="right">{row.typePayment===0?'Abono':'Cargo'}</TableCell>
                                                    <TableCell align="right">{row.paymentAmount}</TableCell>
                                                    <TableCell align="right">{row.idStatus}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            );
                            ReactDOM.render(
                                table,
                                document.getElementById('paymentsTable')
                            );
                            console.log(rows)
                        });
                    }
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

        return true
    }

    return false
}

function createData(idPayment, paymentdate, typePayment, paymentAmount, idStatus) {
    return {idPayment, paymentdate, typePayment, paymentAmount, idStatus};
}

export const rows = [];

const setRows = rows => rows = rows;