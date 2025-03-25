
/* JEU */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  }
  else {
    menu.classList.add("showMenu");
    menu.classList.remove("hideMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

const buttonPageBaseJouer = document.getElementById("button_base-menu-play")
const mainMenuPlay = document.getElementById("button_main-menu-play");
const mainMenuSettings = document.getElementById("button_main-menu-setting");
const alternanceBase = document.getElementById("with-grid_play-base");
const alternance = document.getElementById("with-grid_play-introducing-video");
const alternance1 = document.getElementById("with-grid_play-menu");
const alternance2 = document.getElementById("with-grid_play-battle");
const exit = document.getElementById("exit");
const audioIntro = document.getElementById("audio-intro");
const audioBattle = document.getElementById("audio-battle");
const audioBlizzard = document.getElementById("audio-blizzard");

buttonPageBaseJouer.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    audioIntro.play();
    alternanceBase.style.display = "none";
    alternance.style.display = "grid";
    if (timePassed > 20000) {
      alternance.style.display = "none";
      alternance1.style.display = "grid";
      audioIntro.pause();
      audioIntro.currentTime = 0;
      audioBlizzard.play();
      clearInterval(timer);
    }
    else alternance.addEventListener("click", (event) => {

      alternance.style.display = "none";
      alternance1.style.display = "grid";
      audioIntro.pause();
      audioIntro.currentTime = 0;
      audioBlizzard.play();
      clearInterval(timer);
    });
  }, 20);
}

mainMenuPlay.addEventListener("click", (event) => {

  alternance1.style.display = "none";
  alternance2.style.display = "grid";
  audioBlizzard.pause();
  audioBlizzard.currentTime = 0;
  audioBattle.play();

});
exit.addEventListener("click", (event) => {

  alternance1.style.display = "grid";
  alternance2.style.display = "none";
  audioBattle.pause();
  audioBattle.currentTime = 0;
  audioBlizzard.play();

});

/* COMBAT */

const warriorNormal = document.getElementById("warrior-normal");
const warriorAttack = document.getElementById("warrior-attack");
const warriorHealing = document.getElementById("warrior-healing");
const attackButton = document.getElementById("button_battle_attack");
const healingButton = document.getElementById("button_battle_healing-potion");

attackButton.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    warriorAttack.style.display = "flex";
    warriorNormal.style.display = "none";

    if (timePassed > 200) {
      warriorAttack.style.display = "none";
      warriorNormal.style.display = "flex";
      clearInterval(timer);
    }
  }, 20);
}

healingButton.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    warriorHealing.style.display = "flex";
    warriorNormal.style.display = "none";

    if (timePassed > 500) {
      warriorHealing.style.display = "none";
      warriorNormal.style.display = "flex";
      clearInterval(timer);
    }
  }, 20);
}



/* TEST */


let notes = [4, 9, 7, 8, 12, 2];
notes.sort();

/*compare les chiffres caractère par caractère et donc '1'2 plus petit que '0'2*/

let fruits = ["fraise", "abricot", "pomme"];
fruits.sort();

/*compare les mots (lettres) caractère par caractère*/

function compare(a, b) {
  if (a > b) { return 1; }
  if (a < b) { return -1; }
  return 0;
}
/*compare les caractères pour les afficher par ordre croissant*/

notes.sort(compare);


fruits.sort(compare);


function comparedecroissant(a, b) {
  if (a > b) { return -1; }
  if (a < b) { return 1; }
  return 0;
}
/*compare les caractères pour les afficher en décroissant*/
notes.sort(comparedecroissant);


fruits.sort(comparedecroissant);


let prenom = "pierre";
console.log("bienvenue " + prenom);

/*créé un nombre aléatoire entre 0 et 20 (inférieur à 21*/
function getRandomInt(max) {
  return Math.floor(Math.random() * 21);
}
console.log(getRandomInt());