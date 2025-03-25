/* créer un compte */
const createNewAccountButton = document.getElementById("create-new-account_submit");
const idText = document.getElementById("create-username");
const passwordText = document.getElementById("create-password");

createNewAccountButton.onclick = function () {
    let identidiant = idText.value;
    let pass = passwordText.value;
    if (identidiant.length >= 7 && pass.length >= 7) {
        localStorage.setItem("myIdentifiant", identidiant);
        localStorage.setItem("myPassword", pass);

    }
    else {
        console.log("error")
        localStorage.clear();
    }

}