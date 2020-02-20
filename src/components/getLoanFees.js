import React from 'react'

import { Form, FormGroup, Input, FormFeedback } from "reactstrap"

import { handleGetLoanFees,  setIdLoan, rows} from "../services/getLoanFeesService"

import styles from "./form.module.scss"
import StylesForm from "./form.scss"

const handleUpdate = event => {
    setIdLoan(event.target.value)
}

const handleSubmit = event => {
    event.preventDefault()
    handleGetLoanFees()
}


export default function LoanFees(){

        return (
            <>
        <h1>Consulta de cuotas de un pr&eacute;stamo</h1>

            <Form method="post"
                onSubmit={event => {
                    handleSubmit(event)
                    //navigate(`/app/getLoanFees`)//<----------------------------------------------
                }}>
                <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}>
                    <div className={styles.halfInput + " mr-lg-2"}>
                        {/**Loan Number*/}
                        <Input type="text" name="loanNumber" onChange={handleUpdate}
                            cssModule={StylesForm}
                            required
                            id="loanNumber"
                            placeholder="N&uacute;mero de prestamo"/>
                        <FormFeedback></FormFeedback>
                    </div>
                </FormGroup>
                
                    <br></br>
                    <Input type="submit" value="Consultar Cuotas" />
                    <br></br>
            </Form>
{/**--------------------------TABLE------------------------- */}

<div id="tableContainerId">

</div>
{/**--------------------------TABLE------------------------- */}
            </>
        )
          }