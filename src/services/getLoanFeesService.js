import ReactDOM from 'react-dom'
import React from 'react'
import {Table,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,dropdownOpen,toggle} from 'reactstrap';
import { navigate } from "gatsby"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './getLoanFeesService.css';

{/*import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';*/}





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
                                
                                <Table hover bordered responsive>
                                        <thead>
                                            <tr >
                                                <th className="titlesConsul" align="right">#</th>
                                                <th className="titlesConsul" align="right">Fecha</th>
                                                <th className="titlesConsul" align="right">Monto Pendiente</th>
                                                <th className="titlesConsul" align="right">Interes</th>
                                                <th className="titlesConsul" align="right">Monto pagado</th>
                                                <th className="titlesConsul" align="right">Seguro de daños</th>
                                                <th className="titlesConsul" align="right">Seguro de vida</th>
                                                <th className="titlesConsul" align="right">Gastos de administraci&oacute;n</th>
                                                <th className="titlesConsul" align="right">IVA</th>
                                                <th className="titlesConsul" align="right">Cuota S/IVA</th>
                                                <th className="titlesConsul" align="right">Cuota C/IVA</th>
                                                <th className="titlesConsul" align="right">Valor del contrato</th>
                                                <th className="titlesConsul" align="right">Acci&oacute;n</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rows.map(row => (
                                                <tr key={row.idFee}>
                                                    <td align="right" component="th" scope="row">
                                                        {row.idFee}
                                                    </td>
                                                    <td align="right">{row.expectedDate}</td>
                                                    <td align="right">{row.pendingAmount}</td>
                                                    <td align="right">{row.interest}</td>
                                                    <td align="right">{row.feeAmount}</td>
                                                    <td align="right">{row.insuranceFee}</td>
                                                    <td align="right">{row.lifeInsuranceFee}</td>
                                                    <td align="right">{row.managementExpensesFee}</td>
                                                    <td align="right">{row.periodTaxes}</td>
                                                    <td align="right">{row.feeWithoutTaxes}</td>
                                                    <td align="right">{row.feeWithTaxes}</td>
                                                    <td align="right">{row.contractValue}</td>
                                                    <td align="right">
                                                    
                                                    <FormControl>
                                                            <InputLabel id="demo-simple-select-label"></InputLabel>
                                                            <Select
                                                            labelId="demo-simple-select-label"
                                                            name={row.idFee}
                                                            onChange={handleSelectChange}>
                                                            <MenuItem value={0}>Seleccionar</MenuItem>
                                                            <MenuItem value={1}>Detalle</MenuItem>
                                                            <MenuItem value={2}>Pagar</MenuItem>
                                                            </Select>
                                                    </FormControl>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                
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

    {/**El prestamo en cuestion YA ESTA GUARDADO DESDE LA PANTALLA DE CONSUULTA DE LA CUOTA getLoanFeesService.js linea 25*/}
    //window.localStorage.setItem()
    {/**La cuota en cuestion */}
    window.localStorage.setItem('idFeeItem', event.target.name)
    navigate(`/app/getFeePayments`)
    event.preventDefault();
} 