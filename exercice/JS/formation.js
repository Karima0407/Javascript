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

var nombre = parseInt(prompt("saisissez un nombre"));
switch (nombre) {
  case 0:
    alert("dimanche");
    break;
 case 1:
    alert('Lundi');
    break;
 case 2:
    alert('Mardi');
    break;
 case 3:
    alert('Mercredi');
    break;
 case 4:
    alert('jeudi')
    break;
 case 5:
    alert('vendredi');
    break;
 case 6:
    alert('samedi');
    break;
 default:
        alert("entrez un chiffre entre 0 et 6");
}
