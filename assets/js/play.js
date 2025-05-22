

if (connectionShape == 1) {

  notConnected.style.display = "none";
  connected.style.display = "grid";

}
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

const menuFight = document.querySelector(".menu-fight");
const menuItemsFight = document.querySelectorAll(".menuItemFight");
const hamburgerFight = document.querySelector(".hamburger-fight");


function toggleMenu2() {
  if (menuFight.classList.contains("showMenu")) {
    menuFight.classList.remove("showMenu");
  }
  else {
    menuFight.classList.add("showMenu");
    menuFight.classList.remove("hideMenu");
  }
}

hamburgerFight.addEventListener("click", toggleMenu2);

menuItemsFight.forEach(
  function (menuItemFight) {
    menuItemFight.addEventListener("click", toggleMenu2);
  }
)

const buttonPageBaseJouer = document.getElementById("button_base-menu-play");
const mainMenuPlay = document.getElementById("button_main-menu-play");
const mainScreenPlay = document.getElementById("button_lets-fight");
const mainMenuSettings = document.getElementById("button_main-menu-setting");
const alternanceBase = document.getElementById("with-grid_play-base");
const alternance = document.getElementById("with-grid_play-introducing-video");
const alternance1 = document.getElementById("with-grid_play-menu");
const alternance2 = document.getElementById("with-grid_play-main-screen-menu");
const alternanceBattle = document.getElementById("with-grid_play-battle");
const exit = document.getElementById("exit");
const exitFight = document.getElementById("exit-fight");
const exitGameInFight = document.getElementById("exit-game-in-fight");
const audioIntro = document.getElementById("audio-intro");
const audioMainMenu = document.getElementById("audio-main-menu");
const audioBattle = document.getElementById("audio-battle");
const audioBlizzard = document.getElementById("audio-blizzard");

buttonPageBaseJouer.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    audioIntro.play();
    alternanceBase.style.display = "none";
    alternance.style.display = "grid";
    if (timePassed > 224500) {
      alternance.style.display = "none";
      alternance1.style.display = "grid";
      audioIntro.pause();
      audioIntro.currentTime = 0;
      audioMainMenu.play();
      clearInterval(timer);
    }
    else alternance.addEventListener("click", (event) => {

      alternance.style.display = "none";
      alternance1.style.display = "grid";
      audioIntro.pause();
      audioIntro.currentTime = 0;
      audioMainMenu.play();
      clearInterval(timer);
    });
  }, 20);
}

mainMenuPlay.addEventListener("click", (event) => {

  alternance1.style.display = "none";
  alternance2.style.display = "grid";
  audioMainMenu.pause();
  audioMainMenu.currentTime = 0;
  audioBlizzard.play();

});
mainScreenPlay.addEventListener("click", (event) => {

  alternance2.style.display = "none";
  alternanceBattle.style.display = "grid";
  audioBlizzard.pause();
  audioBlizzard.currentTime = 0;
  audioBattle.play();
  run();

});
exit.addEventListener("click", (event) => {

  alternance1.style.display = "grid";
  alternance2.style.display = "none";
  audioBlizzard.pause();
  audioBlizzard.currentTime = 0;
  audioMainMenu.play();

});
exitFight.addEventListener("click", (event) => {

  alternance2.style.display = "grid";
  alternanceBattle.style.display = "none";
  audioBattle.pause();
  audioBattle.currentTime = 0;
  audioBlizzard.play();

});

exitGameInFight.addEventListener("click", (event) => {

  alternance1.style.display = "grid";
  alternanceBattle.style.display = "none";
  audioBattle.pause();
  audioBattle.currentTime = 0;
  audioMainMenu.play();

});

/* COMBAT */
const blocCharacter1 = document.getElementById("bloc-play_charact-1");
const character1Normal = document.getElementById("normal_charact-1");
const character1Attack = document.getElementById("attack_charact-1");
const character1Capacity = document.getElementById("capacity_charact-1");

const blocCharacter2 = document.getElementById("bloc-play_charact-2");
const character2Normal = document.getElementById("normal_charact-2");
const character2Attack = document.getElementById("attack_charact-2");
const character2Capacity = document.getElementById("capacity_charact-2");

const blocCharacter3 = document.getElementById("bloc-play_charact-3");
const character3Normal = document.getElementById("normal_charact-3");
const character3Attack = document.getElementById("attack_charact-3");
const character3Capacity = document.getElementById("capacity_charact-3");

const blocCharacter4 = document.getElementById("bloc-play_charact-4");
const character4Normal = document.getElementById("normal_charact-4");
const character4Attack = document.getElementById("attack_charact-4");
const character4Capacity = document.getElementById("capacity_charact-4");

const blocCharacter5 = document.getElementById("bloc-play_charact-5");
const character5Normal = document.getElementById("normal_charact-5");
const character5Attack = document.getElementById("attack_charact-5");
const character5Capacity = document.getElementById("capacity_charact-5");

const buttonCapacityCharact1 = document.getElementById("button_battle-capacity_charact-1");
const buttonCapacityCharact2 = document.getElementById("button_battle-capacity_charact-2");


function run() {

  let start = Date.now();

  let timer0 = setInterval(function run() {
    let timePassed = Date.now() - start;
    let test0 = -35 + timePassed / 69;
    let test1 = -32 + timePassed / 69;
    let test2 = -29 + timePassed / 69;
    let test3 = -50 + timePassed / 48.05;
    let test4 = -46 + timePassed / 48.05;

    blocCharacter1.style.marginLeft = test0 + "%";
    blocCharacter2.style.marginLeft = test1 + "%";
    blocCharacter3.style.marginLeft = test2 + "%";
    blocCharacter4.style.marginLeft = test3 + "%";
    blocCharacter5.style.marginLeft = test4 + "%";
    console.log("debut course");

    console.log(test1);
    if (timePassed > 2400) {
      blocCharacter1.style.marginLeft = "0%";
      blocCharacter2.style.marginLeft = "3%";
      blocCharacter3.style.marginLeft = "6%";
      blocCharacter4.style.marginLeft = "0%";
      blocCharacter5.style.marginLeft = "4%";

      console.log("fin course");
      autoEmplacement1();
      autoEmplacement2();
      clearInterval(timer0);


    }


  }, 20);
}

function autoEmplacement1() {

  let start1 = Date.now();

  let timer1 = setInterval(function autoEmplacement1() {
    let timePassed1 = Date.now() - start1;
    let attackslownessCharacter1 = 2000;
    let attackSpeedCharacter1 = 1200;

    if (timePassed1 > 1000) {
      character1Attack.style.display = "flex";
      character1Normal.style.display = "none";

    }
    if (timePassed1 > 2000) {
      character1Attack.style.display = "none";
      character1Normal.style.display = "flex";

    }
    if (timePassed1 > attackSpeedCharacter1 + attackslownessCharacter1) {

      pauseEmplacement1()
      clearInterval(timer1);

    }
    buttonCapacityCharact1.addEventListener("click", (event) => {
      clearInterval(timer1);
    });


  }, 20);
}
function autoEmplacement2() {

  let start2 = Date.now();

  let timer2 = setInterval(function autoEmplacement2() {

    let timePassed2 = Date.now() - start2;
    let attackslownessCharacter2 = 1800;
    let attackSpeedCharacter2 = 900;

    if (timePassed2 > attackSpeedCharacter2) {
      character2Attack.style.display = "flex";
      character2Normal.style.display = "none";

    }
    if (timePassed2 > attackSpeedCharacter2 + attackslownessCharacter2) {
      character2Attack.style.display = "none";
      character2Normal.style.display = "flex";

    }


    if (timePassed2 > attackSpeedCharacter2 + attackslownessCharacter2) {

      pauseEmplacement2()
      clearInterval(timer2);

    }

    buttonCapacityCharact2.addEventListener("click", (event) => {
      clearInterval(timer2);
    });



  }, 20);
}
function pauseEmplacement1() {

  let start3 = Date.now();
  let timer3 = setInterval(function pauseEmplacement1() {
    let timePausePassed1 = Date.now() - start3;

    if (timePausePassed1 > 1000) {
      autoEmplacement1();
      clearInterval(timer3);
    }
    buttonCapacityCharact1.addEventListener("click", (event) => {
      clearInterval(timer3);
    });

  }, 20);
}
function pauseEmplacement2() {

  let start3 = Date.now();
  let timer4 = setInterval(function pauseEmplacement2() {
    let timePausePassed2 = Date.now() - start3;

    if (timePausePassed2 > 1000) {
      autoEmplacement2();
      clearInterval(timer4);
    }
    buttonCapacityCharact2.addEventListener("click", (event) => {
      clearInterval(timer4);
    });

  }, 20);
}


buttonCapacityCharact1.onclick = function capacityCharact1() {
  let start6 = Date.now();

  let timer6 = setInterval(function () {
    let timePassed6 = Date.now() - start6;

    character1Normal.style.display = "none";
    character1Attack.style.display = "none";
    character1Capacity.style.display = "flex";

    if (timePassed6 > 200) {
      character1Capacity.style.display = "none";
      character1Normal.style.display = "flex";
      clearInterval(timer6);
      pauseEmplacement1();
    }
  }, 20);
}

buttonCapacityCharact2.onclick = function capacityCharact2() {

  let start7 = Date.now();
  let timer7 = setInterval(function () {
    let timePassed7 = Date.now() - start7;
    character2Normal.style.display = "none";
    character2Attack.style.display = "none";
    character2Capacity.style.display = "flex";

    if (timePassed7 > 500) {
      character2Capacity.style.display = "none";
      character2Normal.style.display = "flex";
      clearInterval(timer7);
      pauseEmplacement2();
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