function getTriangleArea(a, h) {
	if ( a > 0 && h > 0) {
	    return 'pole trójkąta: ' + a *h / 2;
	} else {
	    document.write('Nieprawidłowe dane');
	    return 'Nieprawidłowe dane';
	}
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 4);
var triangle3Area = getTriangleArea(3, 1);
