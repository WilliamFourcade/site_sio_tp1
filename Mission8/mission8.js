function fonction0(){
    var chaine_test= prompt("entrer une chaîne de caractère");
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+chaine_test);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction1(){
    var a = 12;
    var b = 27;
    var result = a + b;
    alert("cela fait "+ result);
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+result);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction2(){
    var math=14;
    var français=13;
    var CEMJ= 15;
    var moyenne=(math+français+CEMJ)/3;
    alert("La moyenne est de "+ moyenne)
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+moyenne);
    document.getElementById('affichage').contentWindow.document.close();
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
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+ttc);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction5(){
    var prix= prompt("Prix HT ? ");
    var tva= prompt("Taux de TVA ? ");
    var calcul=(tva/100)+1;
    var ttc= prix*calcul
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+ttc);
    document.getElementById('affichage').contentWindow.document.close();
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
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+html);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction12(){
    var html='';
    for (var a = 1;a <= 5; a++){
        for(var b = 1;b <= a; b++){
            html=html+a;
        }
        html=html+'<br/>';
    }
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+html);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction13(){
    var html='';
    var a=0;
    while(a<=20){
        html=html + a +'<br/>';
        a=a+2;
    }
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+html);
    document.getElementById('affichage').contentWindow.document.close();
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
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+tableau);
    document.getElementById('affichage').contentWindow.document.close();
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
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+tableau);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction16(){
    var a = '<ul>';
    var b = 10;
    for(var c=0;c< b; c++){
        a=a+'<li>'+ Math.floor(Math.random()*100)+'</li>';
    }
    a=a + '</ul>';
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+a);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction17(){
    var html = '<ul>';
    var a =10;
    for(var b = 0;b < a;b++){
        var c = Math.floor(Math.random()*11);
        if(c==10){
            console.log('Le nombre 10 fait parti du tirage.');
        }
        html=html+'<li>'+c+'</li>';
    }
    html=html+'</ul>'
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+html);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction18(){
    var html = '<ul>';
    var a = 10;
    var b= 0;
    for(let i = 0;i < a;i++) {
        let c = Math.floor(Math.random() * 11);
        if(c == 10) {
            b++;
   }
    html = html + '<li>' + c + '</li>';
}
    html = html + '</ul>';
    html = html + '<p>Il y a eu ' + b + ' tirages de 10.</p>'
    document.getElementById('affichage').contentWindow.document.open();
    document.getElementById('affichage').contentWindow.document.write("<h2>Résultat : </h2>"+html);
    document.getElementById('affichage').contentWindow.document.close();
}
function fonction19(){
    document.body.style.background = 'blue';
    document.body.style.background = 'rgb(145, 144, 175)';
    document.body.style.background = '#9190af';
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var couleur = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.background = color;
}
function valide(){
  string_box = document.getElementById("chaine");
  char_box = document.getElementById("caractere");
  if(string_box.value == "" || char_box.value == "") return;
  if(char_box.value.length > 1) return;

  alert(`La chaine de caractère [${string_box.value}] à longueur ${string_box.value.length} les chaine de caractère ayant une majucule ${string_box.value.toUpperCase()} le caractère [${char_box.value}] apparait ${string_box.value.count(char_box.value)}`);
}
function recherche(){
    console.log("entrer");
  string_box = document.getElementById("chaine");
  string_box2 = document.getElementById("chaine2");
  if(string_box.value == "" || string_box2.value == "") return;
  console.log("entrer");
  alert(`Le caractère est [${string_box.value}] contient la sous-chaîne [${string_box2.value}] ${countSubstrings(string_box.value, string_box2.value)}`);
}
String.prototype.count=function(c) {
    var result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
  };
  
  const countSubstrings = (str, searchValue) => {
    let count = 0,
      i = 0;
    while (true) {
      const r = str.indexOf(searchValue, i);
      if (r !== -1) [count, i] = [count + 1, r + 1];
      else return count;
    }
  };
