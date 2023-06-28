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
// console.log(fruits2);

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
//       return(b);

//    }
//    else if((c===true)&&(a>b)){
//       return(a);
//    }
// }

// var resultat=maxMin (5,3,false);
// console.log(resultat);

function sommeTab(tab) {
  var resultat = 0;
  for (let i = 0; i < tab.length; i++) {
    resultat = tab[i] + resultat;
  }
  return resultat;
}
resultat = sommeTab([1, 6, 9]);
console.log(resultat);
