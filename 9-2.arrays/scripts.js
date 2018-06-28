var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName = 'Ola';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    document.write('Dodano imię: ' + newName);
} else {
    document.write('Imię ' + newName +' znajduje się już w tablicy');
}

console.log(allNames);
