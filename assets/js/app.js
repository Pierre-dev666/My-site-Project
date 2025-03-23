/* JEU */
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menu.classList.remove("hideMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

    const mainMenuPlay = document.getElementById("button_main-menu-play");
    const mainMenuSettings = document.getElementById("button_main-menu-setting");
    const alternance = document.getElementById("with-grid_play-menu");
    const alternance2 = document.getElementById("with-grid_play-battle");
    const exit = document.getElementById("exit");


    mainMenuPlay.addEventListener("click", (event) => {
        console.log("click marche");
        alternance.style.display = "none";
        alternance2.style.display = "grid";

});
exit.addEventListener("click", (event) => {
    console.log("click marche");
    alternance.style.display = "grid";
    alternance2.style.display = "none";

});


    
/* TEST */


let notes = [4, 9, 7, 8, 12, 2];
notes.sort();
console.log(notes);
/*compare les chiffres caractère par caractère et donc '1'2 plus petit que '0'2*/

let fruits = ["fraise", "abricot", "pomme"];
fruits.sort();
console.log(fruits);
/*compare les mots (lettres) caractère par caractère*/

function compare(a, b) {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
}
/*compare les caractères pour les afficher par ordre croissant*/

notes.sort(compare);
console.log(notes);

fruits.sort(compare);
console.log(fruits);

function comparedecroissant(a, b) {
    if (a > b) { return -1; }
    if (a < b) { return 1; }
    return 0;
}
/*compare les caractères pour les afficher en décroissant*/
notes.sort(comparedecroissant);
console.log(notes);

fruits.sort(comparedecroissant);
console.log(fruits);

let prenom = "pierre";
console.log("bienvenue " + prenom);

/*créé un nombre aléatoire entre 0 et 20 (inférieur à 21*/
function getRandomInt(max) {
    return Math.floor(Math.random() * 21);
  }
  console.log(getRandomInt());