let connectionShape = localStorage.getItem("connection");
const notConnected = document.getElementById("not-connected");
const connected = document.getElementById("connected");
let connectedToPlay = document.getElementById("bloc-9_all-pages");
let deconnectedButton = document.getElementById("deconnexion");
let avatar = document.getElementById("avatar");
let avatarSave = localStorage.getItem("avatarsource");
avatar.src = avatarSave;

if (connectionShape == 1) {

  notConnected.style.display = "none";
  connected.style.display = "grid";
  deconnectedButton.style.display = "block";
  connectedToPlay.style.display = "flex";

}
else {
  notConnected.style.display = "grid";
  connected.style.display = "none";
  deconnectedButton.style.display = "none";
  connectedToPlay.style.display = "none";
}
const deconnexion = document.getElementById("deco")

deconnexion.onclick = function () {
  localStorage.setItem("connection", 0);
  notConnected.style.display = "grid";
  connected.style.display = "none";
  deconnectedButton.style.display = "none";
  connectedToPlay.style.display = "none";
} 