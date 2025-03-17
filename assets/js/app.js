let notes = [4, 9, 7, 8];
notes.sort();
console.log(notes);

let fruits = ["fraise", "abricot", "pomme"];
fruits.sort();
console.log(fruits);

function compare (a,b) {
if(a>b) { return 1;}
if(a<b) { return -1;}
return 0;

}
notes.sort(compare);
console.log(notes);

fruits.sort(compare);
console.log(fruits);