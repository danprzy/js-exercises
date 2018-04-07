
// Change first word 
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var textArray = text.split(' ');
var dinosaur = 'triceratops';
textArray.splice(0, 1, dinosaur.toUpperCase());
var textArrayToString = textArray.join(' ');
console.log(textArrayToString.slice(0, textArrayToString.length/2));


// Change word Velociraptor
/*
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var newText = text.replace('Velociraptor', dinosaur.toUpperCase())
console.log(newText.slice(0, newText.length/2)) 
*/