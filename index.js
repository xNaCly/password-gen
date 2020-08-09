document.getElementById("strings").disabled = true;
let strings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
let charset = strings;
let flagNUM = false;
let flagSym = false;

function addNumbers() {
	if (flagNUM) {
		flagNUM = false;
		document.getElementById("symbols").checked = false;
		return (charset = strings);
	} else {
		flagNUM = true;
		return (charset += numbers);
	}
}

function addSymbols() {
	if (flagSym) {
		flagSym = false;
		document.getElementById("numbers").checked = false;
		return (charset = strings);
	} else {
		flagSym = true;
		return (charset += symbols);
	}
}

function genpw() {
	let length = document.getElementById("length").value;
	let retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return (document.getElementById("output").value = retVal);
}
