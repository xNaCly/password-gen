document.getElementById("strings").disabled = true;
let strings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
let charset = strings;
let flagSym = false;

function addSymbols() {
	if (flagSym) {
		flagSym = false;
		charset = charset.replace(symbols, "");
	} else {
		flagSym = true;
		return (charset += symbols);
	}
}

function genpw() {
	console.log(charset);
	let length = document.getElementById("length").value;
	let retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return (document.getElementById("output").value = retVal);
}

window.onload = () => {
	addSymbols();
	genpw();
};
