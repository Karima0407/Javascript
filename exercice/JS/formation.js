// let volume=0;
// let largeur=15;
// let hauteur=20;
// let longueur=10;
// volume=largeur*longueur*hauteur;
// document.write(volume);

// let age=22;
// if (age<5) {
//     document.write("bébé");
// }
// else if((age>=5)&&(age<=10)){
//     document.write("enfant");
// }

// else if ((age>=11)&&(age<=18)) {
//     document.write("ado");
// }
// else if(age>18){
//     document.write("vielle");
// }

// var nombre = parseInt(prompt("saisissez un nombre"));
// switch (nombre) {
//   case 0:
//     alert("dimanche");
//     break;
//  case 1:
//     alert('Lundi');
//     break;
//  case 2:
//     alert('Mardi');
//     break;
//  case 3:
//     alert('Mercredi');
//     break;
//  case 4:
//     alert('jeudi')
//     break;
//  case 5:
//     alert('vendredi');
//     break;
//  case 6:
//     alert('samedi');
//     break;
//  default:
//         alert("entrez un chiffre entre 0 et 6");
// }

//Exercice:
//Soit le tableau:["banane","pomme","mangue"]
//Ajoutez une fraise entre pomme et mangue
//supprimez la banane
//Remplacez fraise et mangue par goyave

// var fruits=["banane","pomme","mangue"];
// var  fruits2=["banane","pomme","","mangue"];
// frui ts2[2]="fraise";
// console.log(fruits2);

// fruits2.shift();
// console.log(fruits2);,,,,,,,,,,,,,,,,,,,,,,

// fruits2.fill("goyave");
// console.log(fruits2);

// exercice:
// function maxMin (a,b,c){
//    if ((c===true)&&(a<b)) {
//       return (b);
//    }
//    else if ((c===false)&&(a<b)) {
//       return(a);
//    }
//    else if ((c===false)&&(a>b)){
//       return(b);,,,,,,,,,,,,,,,,,,,,,,,,,,,,

//    }
//    else if((c===true)&&(a>b)){
//       return(a);,,,,,,,,,,,,
//    }
// }
// var resultat=maxMin (5,3,false);
// console.log(resultat);,,,,,,,,,,,,,,,,,

function sommeTab(tab) {
  var resultat = 0;
  for (let i = 0; i < tab.length; i++) {
    resultat = tab[i] + resultat;
  }
  return resultat;
}
resultat = sommeTab([1, 6, 9]);
console.log(resultat);

let num = 1; // variable num qui contient la valeur 1
do { // faire:
    if (num % 2 === 0) { // si num est divisible par 2 (a savoir un nombre pair)
        console.log(num); // afficher num
    }
    num++; //incrementer num
} while (num <= 20); // tant que num est inferieur ou egale a 20

 

function someTab(tableau) { // fonction someTab prend un parametre
    let somme = 0; // initialisation de la variable somme à 0
    let i = 0; // initialisation de la variable i à 0
    //  0 correspond a la premiere position du tableau
    while (i < tableau.length) { // tant que i est plus petit que la taille du tableau
        // on ajoute la valeur de la position i du tableau a la variable somme
        somme = tableau[i] + somme;
        i++; // incrementer i
        // somme += tableau[i];
    }
    // a la fin de la boucle on retourne la somme
    return somme;
}

 

let tab = [1, 2, 8, 5, 6];
let resultat2 = someTab(tab);
console.log(resultat2); // => affiche 22

 

// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16 


function maxTab(tableau) {
    let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
    for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        if (max < tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            max = tableau[i]; 
        }
    }
    return max; // retourner max
}

 

let tab1 = [5, 8, 3, 0];
let resultat3 = maxTab(tab1);
console.log(resultat3); // affiche => 8



function reverseWorld(str) {
   return str.split("").reverse().join("");
}
var resultat = reverseWorld("Hello World!");
console.log(resultat);

const array = [1, 12, 3, 67, 1, 23, 0, 87];
const array2 = [1, 1, 2, 3, 4, 5];
const array3 = [0];
const array4 = ['never gonna', 'give you', 'up'];
const array5 = ['never gonna', 'let you', 'down'];

 

function verifSortAsc(tableau) {
    let estTrier = true; // par defaut on considere que le tableau est trie
    let tab = []; // declare un tableau vide pour avoir une copy du tableau
    for (let i = 0; i < tableau.length; i++){ //
        // remplir le tableau tab par les valeur du tableau tableau
        tab.push(tableau[i]); 
    }
    tab.sort(); // trier tab

 

    for (let i = 0; i < tab.length; i++){ // pour i allant de 0 a taille du tableau
        if (tab[i] == tableau[i]) { // si tab[i] == tableau[i]
            estTrier = true;
        } else { // sinon
            estTrier = false;
            break; // on sort de la boucle
        }
    }
    return estTrier;
}

 

console.log(verifSortAsc(array5)); // => 

function reverseWord(str) {
  let tab = str.split(""); // conversion de la chaine de caractere en tableau
  tab.reverse(); // inverser le tableau
  let chaine = tab.join(""); // convertir le tableau en chaine de caractere
  return chaine;
  // return str.split('').reverse().join('');
}

console.log(reverseWord("Hello World!"));

function reverseWord(str) {
  let tab = str.split(""); // conversion de la chaine de caractere en tableau
  tab.reverse(); // inverser le tableau
  let chaine = tab.join(""); // convertir le tableau en chaine de caractere
  return chaine;
  // return str.split('').reverse().join('');
}

// console.log(reverseWord("Hello World!"));

function reverseArray(tab) {
  return tab.reverse(); // inverser le tableau et le retourner
}

function reverseWords(...words) {
  let resultat = []; // tableau vide
  for (let i = 0; i < words.length; i++) {
    // rempli le tableau resultat avec les valeurs inversees de chaque parametre
    resultat.push(reverseWord(words[i]));
  }
  return resultat;
}
let res = reverseWords("bonjour", "le", "monde");
// console.log(res);

function phrase(tableau) {
  let resultat = reverseArray(reverseWords(...tableau));
  return resultat;
}

const words = [
  "s.e.têrp",
  "sap",
  "setê'n",
  "suoV",
  "ces",
  "redoc",
  "av",
  "aç",
  "eénna",
  "etteC",
];
console.log(phrase(words));