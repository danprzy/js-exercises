
var list = document.getElementById('list');
var addButtonElement = document.getElementById('addElem');

addButtonElement.addEventListener('click', function() {
  var element = document.createElement('li');
  var liNumber = document.getElementsByTagName('li').length;
  element.innerHTML = 'item ' + liNumber; 
  list.appendChild(element);
});

