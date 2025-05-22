let browseFile = document.getElementById("browse");
let buttonChangeImage = document.getElementById("to-change-profile-image");
let nextProfileImage = document.getElementById("next-profile-image");
let buttonDeleteAccount = document.getElementById("delete-account");
let returnManageAccount = document.getElementById("return-manage-account");
let validateDeleteAccount = document.getElementById("validate-delete-account");
let identifiant = localStorage.getItem("myIdentifiant");
const sectionModifyAccount = document.getElementById("section_modify-account");
const modaleDeleteAccount = document.getElementById("modale_delete-account");

document.getElementById('actual-id').innerText = identifiant

browseFile.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
        nextProfileImage.src = e.target.result;
    };

    buttonChangeImage.addEventListener("click", function profileImage(event) {
        reader.onload = function profileImage(e) {
            avatar.src = e.target.result;
            localStorage.setItem("avatarsource", avatar.src);

        };
        reader.readAsDataURL(file);

    });
};
buttonDeleteAccount.addEventListener("click", (event) => {
    sectionModifyAccount.style.display = "none";
    modaleDeleteAccount.style.display = "block";
});

returnManageAccount.addEventListener("click", (event) => {
    modaleDeleteAccount.style.display = "none";
    sectionModifyAccount.style.display = "block";
});

validateDeleteAccount.addEventListener("click", (event) => {
        alert("compte supprimé")
    window.location.href = '../../index.html';
    localStorage.clear("myIdentifiant", identifiant);
    localStorage.clear("myPassword", pass);
    localStorage.clear("avatarsource", avatar.src);

});