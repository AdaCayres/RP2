//Elementos fieldset usados fora de um formulário
var mb = [1, 11];
var out_tag;
var new_tag;

for(var i = mb.length; i > 0; i--) {
    out_tag = document.getElementsByClassName("mb-3")[mb[i-1]];
    new_tag = document.getElementsByTagName("fieldset")[i-1];
    out_tag.innerHTML = new_tag.innerHTML;  
}

//<h1> incluido
var main = document.querySelectorAll('[role="main"]')[0];
main.innerHTML = "<h1> Mensagens </h1> " + main.innerHTML;

