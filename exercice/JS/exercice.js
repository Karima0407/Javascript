// var prenom = "karima";
// var monNumero = 0616223;
// console.log(prenom);
// alert("Mitra");
// window.alert("Super,tu es arrivé sur mon site !")
// document.write("A la pause vous aurez des Haribow Pik!")
// window.prompt("Question:on est quel jour?" ,"jour de la semaine");
// var monPrenom=prompt();
// document.write(monPrenom);
// var unBooleen= false;
// console.log(unBooleen);
// unBooleen= "true";
// console.log(unBooleen);
// console.log(typeof unBooleen);
// const PAYS ="France";
// document.write(PAYS);
// var unChiffre="12";
// console.log(unChiffre)
// var monPrenom;
// monPrenom = prompt();
// document.write(monPrenom);
// console.log(monPrenom);
// alert(monPrenom);
// Différentes types de fonctions:
// 1-une fonction avec aumoins
// var nb1 = prompt();
// nb1 = parseInt(nb1);
// console.log(typeof nb1);

// var nb2=7;
// var nb3=nb1%nb2;
// document.write(nb3+ "<br>");
// nb3+=nb2;
// document.write(nb3);
// var nb1=10;
// if(nb1>50){
//     console.log("nb1 est bien inférieur à 50");
// }
// // console.log("je ne suis pas dans la condition");
// var num1 = 2;
// var num2 = 5;
// if (num1 + num2 == 7) {  true
//   console.log(`le résultat est correct`);
// }
// var num1 = 2;
// var num2 = 5;
// if (!((num1 + num2) != 7)) {
//   console.log(`le résultat n'est pas correct`);
// }

// if (true) {
//   console.log(`La condition est vrai`);
// }

// if (!!true) {
//   // pareil que (true) tout seul

//   // la syntaxe "!true" signifie : l'opposé de 'true', qui donne le résultat "false", on peut donc résumer la syntaxe suivante "!(false)".

//   // Au finale on peut arriver au résultat suivant "! (false) = true".

//   // Dans ce cas, nous avons le droit d'entrer dans la condition et éxécuter les codes qui se trouvent dans la condition

//   console.log(`La condition est vrai`);
// }

// if (!true) {
//   // false car opposé de true c'est false

//   // la syntaxe "!true" signifie : l'opposé de 'true', qui donne le résultat "false", on peut donc résumer la syntaxe suivante "!(false)".

//   console.log(`La condition est fausse`);
// }
// for (var i = 1; i <= 100; i += 2) {
//   document.write("<p>Instruction exécutée : " + i + "</p>");
// }
// var j = 1;
// while (j <= 10) {
//   document.write("<hr /><p>Instruction exécutée : " + j + "</p>");
//   /* 50 lignes de code */
//   j++; // j = j + 1; OU j += 1;
// }
// "<hr>"
// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000) {
//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

// var fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// console.log(fruits.push("Mango"));

// var prenom = prompt();

// document.write(prenom);
// val1=val1.toString;
// console.log(typeof prenom);

// var age = prompt();
// document.write(age);
// age = parseInt(age);
// console.log(typeof age);

// function affichagePrenomAge(val1, val2) {
//   var resultat = "Je m'appelle " + val1 + " et j'ai " + val2 + " ans.";
//   document.write(resultat);
// }
// affichagePrenomAge(prenom, age);

// var temperature=prompt();
// temperature=parseInt(temperature);
// var temperature2=temperature*(9/5)+32;
// // prompt(temperature2);
// document.write(temperature2);
// //la var prompt fait 2 choses :elle exécute une fonction prompt et elle stocke.

// var farhen = prompt();
// farhen = parseInt(farhen);
// var celcius = (farhen - 32) / 1.8;
// document.write(celcius);

Un programme en js :

1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend successivement deux paramètres de type tableau(remplis de 12 prénoms) et string 
2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

3- nous allons afficher le résultat à partir de la console

var developpeurs = [
  "Alexis",

  "Alin",

  "Cynthia",

  "Faïssal",

  "Jérémy",

  "Karima",

  "Michel",

  "Narcis",

  "Nawal",

  "Oliver",

  "Rahim",

  "Wassila",
];

function affichagePrenoms2(paramArray, paramString) {
  //Cela
  var resultat = [paramArray, paramString];
  // Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres utilisés par la fonction "affichagePrenoms2" et nous envoyons cette variable grâce au mot clé "return"
  return resultat;
  //Attention : on n'ajoute aucune syntaxe après la syntaxe "return", car elles ne seront pas executées(autrement dit elles ne seront pas prises en compte)
}

// la syntaxe suivante fait deux opérations distinctes :
// 1 - Exécution de la fonction "affichagePrenoms2"
// 2- Stockage de la valeur de retour de notre fonction grâce au mot clé "return" utilisé à la fin de la fonction
// 3- Donc la variable "resultatDeLaFonction" a été créée afin de stocker la valeur de retour de notre fonction
var resultatDeLaFonction = affichagePrenoms2(
  developpeurs,
  "Mes développeurs sont géniaux"
);

var tabEnfant = ["Alexis", "Wassila"];
// Les deux syntaxes suivantes sont identiques, avec une différence significative: la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément dynamique
//var tabFamille = [["Alexis", "Wassila"], "Mitra"];
var tabFamille = [tabEnfant, "Mitra"];



1- Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
	- premier de type number "paramNum"
    - deuxième de type string "paramString"
    - troisème de type tableau "paramArray"
    
La fonction aura une valeur de retour
    
2- Grâce à une boucle (le nombre de la condition dans la boucle vient du premier paramètre), la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle 

3- on affiche la valeur de retour sur la page web


function additionDesChiffres(paramNum, paramString, paramArray) {
  for (var i = 0; i <= paramNum; i++) {
    paramArray.push(i);
  }
  var result = [paramString, paramArray];
  return result;
}

// var valeurRetour = additionDesChiffres(15, "Le résultat de notre fonction : ", []);

var num = 15;
var chaineCaractere = "Le résultat de notre fonction : ";
var tab = [];
var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);

document.write(valeurRetour);

