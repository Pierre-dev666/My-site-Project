/* créer un compte */
const createNewAccountButton = document.getElementById("create-new-account_submit");
const idText = document.getElementById("create-username");
const passwordText = document.getElementById("create-password");
const formulaires = document.getElementById("bloc-1_log-in");

createNewAccountButton.onclick = function () {
    let identifiant = idText.value;
    let pass = passwordText.value;
    let LogInadress = ("./log-in.html");
    if (identifiant.length >= 7 && pass.length >= 7 && identifiant !== pass) {

            localStorage.setItem("myIdentifiant", identifiant);
            localStorage.setItem("myPassword", pass);
            console.log("ça marche")
            formulaires.action = LogInadress;
        }
    
    else {
        console.log("error")
        localStorage.clear();
    }

}