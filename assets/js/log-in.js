/* Se connecter */
const logInButton = document.getElementById("log-in_submit");
const idLogInText = document.getElementById("username");

logInButton.onclick = function () {
  let logInText = idLogInText.value;
  if (logInText === "pierre"){
    console.log("ça marche")
  }
  else{
    console.log("error")
  }
  
}