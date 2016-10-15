// JavaScript Document
/*
$(document).ready(function(){  
   $('#boton-guardar').click(function(){  
var datico = document.getElementById("dato").value;
localStorage.setItem("numero",datico);
document.getElementById("dato").value = "";
var num = localStorage.getItem("numero");

var mes=num-1;    

var meses= ['enero','febrero','marzo','abril','mayo','junio'];
if(isNaN(num)) {
	console.log("el dato ingresado no es un numero");
}else {
console.log("el numero "+num+ " equivale al mes de "+meses[mes]); 
}
 });  
});
*/

var mes=4;    
/*Array*/
var meses= ['enero','febrero','marzo','abril','mayo','junio'];
/*Mostrar datos almacenados*/
if(isNaN(mes)) {
	console.log("el dato ingresado no es un numero");
}else {
console.log("el numero "+mes+ " equivale al mes de "+meses[mes]); 
}


