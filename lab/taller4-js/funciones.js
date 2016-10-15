// JavaScript Document

/*Funcion anonima
var area = function(ancho, alto) {
    return ancho * alto;
};
 
var medida = area(3, 4);



//Función declarada
function area(ancho, alto) {
    return ancho * alto;
};
 
var medida = area(3, 4);
*/

var area = (function (){
    var alto = 3;
    var ancho = 2;
    return alto * ancho;
}());
 


 
 /*
    p = new Object();
    p.nombre = "Victor";
    p.edad = 35;
 */    
    console.log(area);
	
	
	