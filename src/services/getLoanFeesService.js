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

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { navigate } from "gatsby"


export const setIdLoan = idLoan =>
    window.localStorage.setItem("idLoanItem", idLoan)
export const getIdLoan = () =>
    isBrowser() && window.localStorage.getItem("idLoanItem")
        ? JSON.parse(window.localStorage.getItem("idLoanItem"))
        : {}

export var fees = {};

export const isBrowser = () => typeof window !== "undefined"

export const getFees = () =>
    isBrowser() && window.localStorage.getItem("loanFeesItem")
        ? JSON.parse(window.localStorage.getItem("loanFeesItem"))
        : {}

export const setFees = fees =>
    window.localStorage.setItem("loanFeesItem", JSON.stringify(fees))

export const handleGetLoanFees = () => {

    if (fees !== null) {

        var clientHeaders = new Headers({
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET'
        });

        setRows([])
        fetch('http://172.10.0.133:5002/loans/' + window.localStorage.getItem("idLoanItem") + '/fees', {
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
                        response.json().then(function (feesList) {
                            setFees(feesList)
                            
                            feesList.forEach(fee => {
                                rows.push(createData(fee.idFee, fee.expectedDate, fee.pendingAmount, fee.interest, fee.feeAmount, fee.insuranceFee, fee.lifeInsuranceFee, fee.managementExpensesFee, fee.periodTaxes, fee.feeWithoutTaxes, fee.feeWithTaxes, fee.contractValue))
                            });

                            const table = (
                                <TableContainer component={Paper}>
                                    <Table style={{'width': '650px'}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="right">#</TableCell>
                                                <TableCell align="right">Fecha</TableCell>
                                                <TableCell align="right">Monto Pendiente</TableCell>
                                                <TableCell align="right">Interes</TableCell>
                                                <TableCell align="right">Monto pagado</TableCell>
                                                <TableCell align="right">Seguro de daños</TableCell>
                                                <TableCell align="right">Seguro de vida</TableCell>
                                                <TableCell align="right">Gastos de administraci&oacute;n</TableCell>
                                                <TableCell align="right">IVA</TableCell>
                                                <TableCell align="right">Cuota S/IVA</TableCell>
                                                <TableCell align="right">Cuota C/IVA</TableCell>
                                                <TableCell align="right">Valor del contrato</TableCell>
                                                <TableCell align="right">Acci&oacute;n</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody id="tableBodyId">
                                            {rows.map(row => (
                                                <TableRow key={row.idFee}>
                                                    <TableCell align="right" component="th" scope="row">
                                                        {row.idFee}
                                                    </TableCell>
                                                    <TableCell align="right">{row.expectedDate}</TableCell>
                                                    <TableCell align="right">{row.pendingAmount}</TableCell>
                                                    <TableCell align="right">{row.interest}</TableCell>
                                                    <TableCell align="right">{row.feeAmount}</TableCell>
                                                    <TableCell align="right">{row.insuranceFee}</TableCell>
                                                    <TableCell align="right">{row.lifeInsuranceFee}</TableCell>
                                                    <TableCell align="right">{row.managementExpensesFee}</TableCell>
                                                    <TableCell align="right">{row.periodTaxes}</TableCell>
                                                    <TableCell align="right">{row.feeWithoutTaxes}</TableCell>
                                                    <TableCell align="right">{row.feeWithTaxes}</TableCell>
                                                    <TableCell align="right">{row.contractValue}</TableCell>
                                                    <TableCell align="right"> 
                                                    <FormControl>
                                                            <InputLabel id="demo-simple-select-label">Quiero</InputLabel>
                                                            <Select
                                                            labelId="demo-simple-select-label"
                                                            id="id"
                                                            onChange={handleSelectChange}>
                                                            <MenuItem value={0}>Seleccionar</MenuItem>
                                                            <MenuItem value={1}>Detalle</MenuItem>
                                                            <MenuItem value={2}>Pagar</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            );
                            ReactDOM.render(
                                table,
                                document.getElementById('tableContainerId')
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

function createData(idFee, expectedDate,  pendingAmount,  interest, feeAmount, insuranceFee, lifeInsuranceFee, managementExpensesFee, periodTaxes, feeWithoutTaxes, feeWithTaxes, contractValue) {
    return {idFee, expectedDate,  pendingAmount,  interest,  feeAmount,  insuranceFee, lifeInsuranceFee, managementExpensesFee, periodTaxes, feeWithoutTaxes, feeWithTaxes, contractValue};
}

export const rows = [];

const setRows = rows => rows = rows;

export const handleSelectChange = event => {

    navigate(`/app/getFeePayments`)
    event.preventDefault();
} 