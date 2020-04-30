//utiliser une fonction et une boite de dialogue par une alerte (chaine de caractère)"bonjour" à l'intérieur de la fonction
//récuperer les valeurs qui ont étaient ecrite à stocker dans les variables
//var 3 variables nom prenom ville
function clickFunction(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var city = document.getElementById('city').value;
  alert('Nom:' + lastName + '\nPrénom:' + firstName  + '\nVille:' + city);
}
//alert mm alert que l'ex 2
//  alert("Bonjour "+ firstName);
