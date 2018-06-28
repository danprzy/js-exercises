var withButtonItemsClass = document.getElementsByClassName('button');

console.log(withButtonItemsClass);
var ButtomItems = withButtonItemsClass.length;
for (var i = 0 ; i < ButtomItems; i++) {
	alert(withButtonItemsClass[i].innerText);
}
