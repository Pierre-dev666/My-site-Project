/* créer un compte */
const createNewAccountButton = document.getElementById("create-new-account_submit");
const idText = document.getElementById("create-username");

createNewAccountButton.onclick = function () {
  let text = idText.value;
  if (text === "pierre"){
    console.log("créer ça marche")
  }
  else{
    console.log("error")
  }
  
}