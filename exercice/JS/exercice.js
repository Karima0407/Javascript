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
var monCompte = 1000;
var temps = 0;
while(monCompte < 2000) {
    monCompte += 50;
    temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");