function fonction0(){
    var a =prompt("Donnez une chaîne de caractère");
    document.body.innerHTML=a;
}
function fonction1(){
    var a = 12;
    var b = 27;
    var result = a + b;
    alert("cela fait "+ result);
}
function fonction2(){
    var math=14;
    var français=13;
    var CEMJ= 15;
    var moyenne=(math+français+CEMJ)/3;
    alert("La moyenne est de "+ moyenne)
}
function fonction3(){
    var budget = 2000;
    var achats = 1500;
    if (budget >= achats){
        alert("Le budget("+budget+" €) permet de payer tous les achats("+achats+'€)')
    } else{
        alert("Le budget ne ("+budget+" €) permet pas de payer tous les achats("+achats+'€)')
    }
}
function fonction4(){
    var prix= prompt("Prix HT ? ");
    var ttc= prix*1.2;
    document.body.innerText=y=ttc;
}
function fonction5(){
    var prix= prompt("Prix HT ? ");
    var tva= prompt("Taux de TVA ? ");
    var calcul=(tva/100)+1;
    var ttc= prix*calcul
    document.body.innerText=y=ttc;
}
function fonction6(){
    var prix= prompt("Prix HT ? ");
    var tva= prompt("Taux de TVA ? ");
    var ttc=prix*(tva/100)+1;
    if(ttc > 100){
        document.body.innerHTML='<h1 style="color:red;"> '+ttc+ '</h1>';
    }else{
        document.body.innerHTML='<h1 style="color:green;"> '+ttc+ '</h1>';
    }
}
function fonction7(){
    document.querySelector('strong').textContent += ' Long Island Iced Tea';
}
function fonction8(){
    for(var a = 10;a<= 1000;a+=10){
        console.log(a);
    }
}
function fonction9(){
    var age= prompt("Quel est votre âge ? ");
    if(age >= 18){
        alert('Vous êtes majeur');
    } else {
        alert('Vous êtes mineur');
    }
}
function fonction10(){
    var a = 77000;
    while(a <= 77999){
        console.log(a)
        a++;
    }
}
function fonction11(){
    var a = 5;
    var html = '';
    for(var b = 1;b <= 10;b++){
        html = html + a + 'x'+ b + '=';
    }
    document.body.innerHTML=html
}
function fonction12(){
    var html='';
    for (var a = 1;a <= 5; a++){
        for(var b = 1;b <= a; b++){
            html=html+a;
        }
        html=html+'<br/>';
    }
    document.body.innerHTML=html;
}
function fonction13(){
    var html='';
    var a=0;
    while(a<=20){
        html=html + a +'<br/>';
        a=a+2;
    }
    document.body.innerHTML=html
}
function fonction14(){
    var tableau='<table>';
    var ligne=5;
    var colonne=3;
    for(let a = 1;a <= ligne;a++){
        tableau = tableau + '<tr>';
        for(var b = 1;b <= colonne;b++){
            tableau=tableau+'<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }
    tableau=tableau+'</table>';
    document.body.innerHTML=tableau;
}
function fonction15(){
    var tableau='<table>';
    var ligne= prompt("Nombre de ligne");
    var colonne= prompt("Nombre de colonne");
    for(let a = 1;a <= ligne;a++){
        tableau = tableau + '<tr>';
        for(var b = 1;b <= colonne;b++){
            tableau=tableau+'<td>yolo</td>';
        }
        tableau = tableau + '</tr>';
    }
    tableau=tableau+'</table>';
    document.body.innerHTML=tableau;
}
function fonction16(){
    var a = '<ul>';
    var b = 10;
    for(var c=0;c< b; c++){
        a=a+'<li>'+ Math.floor(Math.random()*100)+'</li>';
    }
    a=a + '</ul>';
    document.body.innerHTML=a
}
function fonction17(){
    var html = '<'
}