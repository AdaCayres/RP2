//Corrigindo grupos de links com mesmo texto mas difernetes locais de envio
var rep_links = document.getElementsByClassName("btn btn-xs btn-warning mb-2 w-100");
var decription_link = document.getElementsByClassName("summary details item-cut");

for(var i = 0; i < rep_links.length-1; i++) {
    rep_links[i].innerHTML = rep_links[i].innerHTML + " " + decription_link[i].title;
}

//Links com o mesmo texto afixado no conteúdo e no atributo title
var a_tags = document.getElementsByTagName("a");

for(var i = 0; i < a_tags.length; i++) {
    a_tags[i].removeAttribute("title");
}

//Elementos fieldset sem descrição
var fieldset_coursesearchbox = document.getElementsByClassName("coursesearchbox invisiblefieldset");

fieldset_coursesearchbox[0].innerHTML = "<legend>Buscar disciplinas</legend>" + fieldset_coursesearchbox[0].innerHTML;
fieldset_coursesearchbox[1].innerHTML = "<legend>Acção buscar disciplinas</legend>" + fieldset_coursesearchbox[1].innerHTML;

//Itens de lista utilizados fora das listas
document.getElementsByClassName("section img-text")[0].remove();

//Elementos fieldset usados fora de um formulário
var out_tag = document.getElementsByClassName("mb-3")[4];
var new_tag = document.getElementsByTagName("fieldset")[0];
out_tag.innerHTML = new_tag.innerHTML;

