function ingresonotas() {
// Declaracion de variable //
// Ingreso de variables (notas) //
// Promedio (notas) //
var curso = document.getElementById("curso");
var nota_1 = document.getElementById("nota_1");
var nota_2 = document.getElementById("nota_2");
var nota_3 = document.getElementById("nota_3");
var promedio=document.getElementById("promedio");

var n1_html = document.getElementById("n1_html");
var n2_html = document.getElementById("n2_html");
var n3_html = document.getElementById("n3_html");
var p_html = document.getElementById("p_html");
n1_html.innerHTML=prompt("Ingrese nota 1 [HTML]");
n2_html.innerHTML=prompt("Ingrese nota 2 [HTML]");
n3_html.innerHTML=prompt("Ingrese nota 3 [HTML]");
p_html.innerHTML=(parseInt(n1_html.innerHTML) + parseInt(n2_html.innerHTML) + parseInt(n3_html.innerHTML))/3

var n1_css = document.getElementById("n1_css");
var n2_css = document.getElementById("n2_css");
var n3_css = document.getElementById("n3_css");
var p_css = document.getElementById("p_css");
n1_css.innerHTML=prompt("Ingrese nota 1 [CSS]");
n2_css.innerHTML=prompt("Ingrese nota 2 [CSS]");
n3_css.innerHTML=prompt("Ingrese nota 3 [CSS]");
p_css.innerHTML=(parseInt(n1_css.innerHTML) + parseInt(n2_css.innerHTML) + parseInt(n3_css.innerHTML))/3

var n1_js = document.getElementById("n1_js");
var n2_js = document.getElementById("n2_js");
var n3_js = document.getElementById("n3_js");
var p_js = document.getElementById("p_js");
n1_js.innerHTML=prompt("Ingrese nota 1 [JS]");
n2_js.innerHTML=prompt("Ingrese nota 2 [JS]");
n3_js.innerHTML=prompt("Ingrese nota 3 [JS]");
p_js.innerHTML=(parseInt(n1_js.innerHTML) + parseInt(n2_js.innerHTML) + parseInt(n3_js.innerHTML))/3

}