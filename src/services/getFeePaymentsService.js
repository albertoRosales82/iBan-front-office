import ReactDOM from 'react-dom'
import React from 'react'
import {Table} from 'reactstrap'
import './getFeePaymentsService.css';
import { makeStyles } from '@material-ui/core/styles';
{/*import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';*/}



export const getFeePayments = (idLoan, idFee) => {

    if (idLoan !== null && idFee !== null) {

        var clientHeaders = new Headers({
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET'
        });

        setRows([])
        fetch('http://172.10.0.133:5002/loans/'+idLoan+'/fees/'+idFee, {
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
                                <Table size="md" hover bordered responsive>
                                    
                                    <thead>
                                            <tr>
                                                <th className="titlesCuo" align="right">#</th>
                                                <th className="titlesCuo" align="right">Fecha</th>
                                                <th className="titlesCuo" align="right">Tipo</th>
                                                <th className="titlesCuo" align="right">Monto</th>
                                                <th className="titlesCuo" align="right">Estatus</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map(row => (
                                                <tr key={row.idPayment}>
                                                    <th className="titlesCuo" align="right" component="th" scope="row">
                                                        {row.idPayment}
                                                    </th>
                                                    <th className="subtitleCuo" align="right">{row.paymentdate}</th>
                                                    <th className="subtitleCuo" align="right">{row.typePayment===0?'Abono':'Cargo'}</th>
                                                    <th className="subtitleCuo" align="right">{row.paymentAmount}</th>
                                                    <th className="subtitleCuo" align="right">{row.idStatus}</th>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                
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