
export const handleCreateFeePayment = (idLoan, idFee, amount) => {

    if (idLoan !== null && idFee !== null) {

        var clientHeaders = new Headers({
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST'
        });

        var payload = {
            "idFee": idFee,
            "loan_idLoan":idLoan,
            "paymentAmount":amount
        }

        fetch('http://172.10.0.133:5002/loans/fees/payments', {
            method: 'post',
            body: JSON.stringify(payload),
            headers: clientHeaders
        })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    } else {
                        response.json().then(function (createdFeePayment) {
                            console.log(createdFeePayment);
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