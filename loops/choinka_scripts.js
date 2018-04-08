 
//połowa drzewka
function drawTree (treeRow) {
	for ( var i = 0 ; i < treeRow ; i++) {

	  	var star = '';
	  	for ( var j = 0 ; j <= i ; j++) {
	  	star += '* ';
	 	}
	 console.log(star);
	}
}

drawTree (5);


/* zadanie rozszerzone,cała choinka - działa bez gornej gwiazdki
function drawTree (treeRow) {
//debugger
	for ( var i = 0 ; i < treeRow ; i++) {
		var space = '-';
		for (var s = treeRow - i; s > 0 ; s--){
	  	space += '-';
	 	}
	  	var star = '';
	  	for ( var j = 0 ; j <= 2 * i ; j++) {
	  	star += '*';
	 	}
	 console.log(space + star);
	}
}

drawTree (5);
*/





