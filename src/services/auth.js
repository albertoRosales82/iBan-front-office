
export var state = {
  appUser: []
};
export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>  
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
  

const setState = state => 
  window.localStorage.setItem("state", JSON.stringify(state))

export const handleLogin = ({ username, password }) => {
  
  if (password === ``) {

    var myHeaders = new Headers({
      'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
    });

    
    fetch('http://localhost:5001/user/' + username,{
      method: 'get'
      
    })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }else{
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          //document.write(data.users.names + " " + data.users.fathersLastName + " " + data.users.mothersLastName + "|" + data.users.email+ "|"+data.countries.name + "|" + data.countries.badges.name);
          setUser(data.users)
        }); 
      }
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

    /*console.log("response=" + state.appUser);*/

return true
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.iduser
}

export const logout = callback => {
  setUser({})
  callback()
}