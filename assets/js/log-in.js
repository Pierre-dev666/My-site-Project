/* Se connecter */
const logInButton = document.getElementById("log-in_submit");
const idLogInText = document.getElementById("username");
const passLogInText = document.getElementById("pass");

logInButton.onclick = function () {
  let logInText = idLogInText.value;
  let passText = idLogInText.value;
  const identifiant = localStorage.getItem("myIdentifiant");
  const pass = localStorage.getItem("myPassword");

  if (logInText === identifiant && passText === pass){
    console.log("ça marche")
  }
  else{
    console.log("error")
  }
  
}