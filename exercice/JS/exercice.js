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

// Un programme en js :

// 1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend successivement deux paramètres de type tableau(remplis de 12 prénoms) et string
// 2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

// 3- nous allons afficher le résultat à partir de la console

// var developpeurs = [
//   "Alexis",

//   "Alin",

//   "Cynthia",

//   "Faïssal",

//   "Jérémy",

//   "Karima",

//   "Michel",

//   "Narcis",

//   "Nawal",

//   "Oliver",

//   "Rahim",

//   "Wassila",
// ];

// function affichagePrenoms2(paramArray, paramString) {
//   //Cela
//   var resultat = [paramArray, paramString];
//   // Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres utilisés par la fonction "affichagePrenoms2" et nous envoyons cette variable grâce au mot clé "return"
//   return resultat;
//   //Attention : on n'ajoute aucune syntaxe après la syntaxe "return", car elles ne seront pas executées(autrement dit elles ne seront pas prises en compte)
// }

// // la syntaxe suivante fait deux opérations distinctes :
// // 1 - Exécution de la fonction "affichagePrenoms2"
// // 2- Stockage de la valeur de retour de notre fonction grâce au mot clé "return" utilisé à la fin de la fonction
// // 3- Donc la variable "resultatDeLaFonction" a été créée afin de stocker la valeur de retour de notre fonction
// var resultatDeLaFonction = affichagePrenoms2(
//   developpeurs,
//   "Mes développeurs sont géniaux"
// );

// var tabEnfant = ["Alexis", "Wassila"];
// // Les deux syntaxes suivantes sont identiques, avec une différence significative: la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément dynamique
// //var tabFamille = [["Alexis", "Wassila"], "Mitra"];
// var tabFamille = [tabEnfant, "Mitra"];

// 1- Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
// 	- premier de type number "paramNum"
//     - deuxième de type string "paramString"
//     - troisème de type tableau "paramArray"

// La fonction aura une valeur de retour

// 2- Grâce à une boucle (le nombre de la condition dans la boucle vient du premier paramètre), la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle

// 3- on affiche la valeur de retour sur la page web

// function additionDesChiffres(paramNum, paramString, paramArray) {
//   for (var i = 0; i <= paramNum; i++) {
//     paramArray.push(i);
//   }
//   var result = [paramString, paramArray];
//   return result;
// }

// // var valeurRetour = additionDesChiffres(15, "Le résultat de notre fonction : ", []);

// var num = 15;
// var chaineCaractere = "Le résultat de notre fonction : ";
// var tab = [];
// var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);

// document.write(valeurRetour);

// // exercice permutation
// var nombre1=5;
// var nombre2=3;
// var nombre3;
// nombre3=nombre1;
// nombre1=nombre2;
// nombre2=nombre3;
// // console.log('nombre1':+ );

// console.log('nombre1 après inversion: '+ nombre1);
// console.log('nombre2 après inversion:'+ nombre2);

// // exercice2:
// var num = prompt("Indiquez votre age : ");

// while (num <= 3 || num >= 120 || isNaN(num)) {
//   num = prompt("Indiquez votre age : ");
// }
// var majoriteFR = 18;

// Enoncée:1/ Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième : adjectif

// 2/ à partir d'un formulaire, remplir le premier.
// Tant que l'on saisi 12 prénoms, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// var prenom = [];
// // var adjetif=[];
// var PrenomForm;
// while (prenom.length <= 12) {
//   PrenomForm = prompt("Remplissez votre tableau", "prénom");
//   prenom.push(PrenomForm);
// }
// console.log(prenom);
// document.write("prenom=:" + prenom);

// var adjectif = [];
// var AdjectifForm;

// while (adjectif.length <= 12) {
//   AdjectifForm = prompt("Remplissez votre tableau des adjectifs", "adjectif");
//   adjectif.push(PrenomForm);
// }
// console.log(adjectif);



// Ecrivez un programme qui demande une heure à un utilisateur sous la forme de trois informations (heures, minutes, secondes).

// il affiche ensuite l'heure qu'il sera une seconde plus tard.

// Les erreurs de saisie doivent être gérées.

// Ce programme est moins simple qu'il en a l'air : >
// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (minuit)
// Résultat :
// var heure = prompt("Saisissez une heure");
// var minute = prompt("Saisissez une minute");
// var seconde = prompt("Saisissez une seconde");

// if (
//   heure >= 0 &&
//   heure <= 23 &&
//   minute >= 0 &&
//   minute <= 59 &&
//   seconde >= 0 &&
//   seconde <= 59
// ) {
//   seconde++;
//   if (seconde === 60) {
//     seconde = 0;
//     minute++;
//   }
//   if (minute === 60) {
//     minute = 0;
//     heure++;
//   }
//   if (heure === 24) {
//     heure = 0;
//   }
//   document.write("l'heure est :"+heure+" h"+minute+ " mn"+seconde+"s");
  
// }
// var tour=0;
// while(tour<10){
//     tour++;
//     alert("C'est le tour n: "+ tour);
// }
// var nombreDeTours=prompt("Saisissez le nombre tours");
// for (i=1;i<=nombreDeTours;i++){
//     document.write("<p>tour n°"+i+"</p>");
// }

// var Rahim = prompt("Saisissez le nombre tours");
// document.write("C'est le nombre de tours n"+ Rahim);
var nombre=prompt("saisissez un nombre");
// j=0;
while((nombre>50)&&(nombre<100)){
   
//    nombre++;
alert("Le nombre est bien entre 50 et 100");
  
}
//   document.write(nombre);
if ((nombre>50)&&(nombre<100)){
    alert("Le nombre est bien entre 50 et 100");
}
else {
    alert("le nombre est incorrect")
}