var withButtonItemsClass = document.getElementsByClassName('button');

console.log(withButtonItemsClass);

for (var i = 0 ; i < withButtonItemsClass.length; i++) {
	alert(withButtonItemsClass[i].innerText);
}
