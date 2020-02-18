
export var loan = {};

export const isBrowser = () => typeof window !== "undefined"

export const getLoan = () =>
    isBrowser() && window.localStorage.getItem("createLoanItem")
        ? JSON.parse(window.localStorage.getItem("createLoanItem"))
        : {}

export const setLoan = loan =>
    window.localStorage.setItem("createLoanItem", JSON.stringify(loan))

export const handleCreateLoan = (loan) => {

    if (loan !== null) {

        var myHeaders = new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain'
          });


        fetch('http://localhost:5002/loans', {   
            method: 'post',
            body: JSON.stringify(loan),
            headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST'}
        })
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    } else {
                        // Examine the text in the response
                        response.json().then(function (createdLoan) {
                            console.log(createdLoan);
                            //document.write(data.users.names + " " + data.users.fathersLastName + " " + data.users.mothersLastName + "|" + data.users.email+ "|"+data.countries.name + "|" + data.countries.badges.name);
                            setLoan(createdLoan)
                        });
                    }
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

        /*console.log("response=" + state.appUser);*/

        return true
    }

    return false
}