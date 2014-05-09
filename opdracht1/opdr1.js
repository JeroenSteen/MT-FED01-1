var p = 20; // primitive value; typeof
var r = {amount:40}; //referenced value; instanceof

d = p; //kopie
p = p + 20;
e = r; //referentie

console.log(p);
console.log(e);
p++;
e.amount++
console.log(p);
console.log(e);

function amount() {
	var a = arguments;
	console.log(a);
	var i = 0;
	var uitkomst = 0;
	while(i < a.length){
		uitkomst += a[i];
		i++;
	}
	return uitkomst;
}
console.log(amount(0, 2, 3));

function alertArray(array, action) {
	var i = 0;
	while(i < arguments[0].length){
		action(array[i]);
		i++;
	}
}

alertArray(["Saab", "Volvo", "BMW"], alert);

