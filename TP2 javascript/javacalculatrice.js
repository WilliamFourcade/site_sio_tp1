function addition(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = Number(a)+Number(b);
    n3.value=c;   




}
function soustraction(){

    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = Number(a)-Number(b);
    n3.value=c;  



}
function division(){

    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = Number(a)/Number(b);
    n3.value=c;  


}
function multiplication(){

    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = Number(a)*Number(b);
    n3.value=c;  



}
function parite(){

    var a= document.getElementById("n1").value;
    var b= document.getElementById("n2").value;
    var c= Number(a)+Number(b);
    if (c%2==0)
    n4.value="paire"
    else
    n4.value="impaire"


}
function permutation(){

var a = document.getElementById("n1").value
var b = document.getElementById("n2").value
c=a
a=b
b=c
n1.value=a;
n2.value=b;


}
