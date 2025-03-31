let browseFile = document.getElementById("browse")
let buttonChangeImage = document.getElementById("to-change-profile-image")
let nextProfileImage = document.getElementById("next-profile-image")
let identifiant = localStorage.getItem("myIdentifiant");

document.getElementById('actual-id').innerText = identifiant

browseFile.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
        nextProfileImage.src = e.target.result;
    };

    buttonChangeImage.addEventListener("click", function (event) {
        reader.onload = function (e) {
            avatar.src = e.target.result;
            localStorage.setItem("avatarsource", avatar.src);

        };
        reader.readAsDataURL(file);

    });

};