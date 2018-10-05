function calcola()

var C = document.form.crt.C.value;
var r = document.form.crt.r.value;
var T = document.form.crt.T.value;
var U = document.form.crt.U.value;
var I;

if(U = 0){
		document.getElementById('risultato').innerHTML="Errore"
	
	}
else if(U =1){
	var d = 36500;
}
else if(U =2){
	var d = 1200;
}
else if(U =3){
	var d = 100;
}
I = (C*r*T)/d

document.getElementById('risultato').innerHTML="Interesse: " + I + " €";

function annulla(){
	document.getElementById('risultato').innerHTML=" ";
	

}

