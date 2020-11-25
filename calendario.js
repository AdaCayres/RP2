//Elementos fieldset usados fora de um formulário
var out_tag = document.getElementsByClassName("mb-3")[4];
var new_tag = document.getElementsByTagName("fieldset")[0];
out_tag.innerHTML = new_tag.innerHTML;

//Links com o mesmo texto afixado no conteúdo e no atributo title
var a_tags = document.getElementsByTagName("a");

for (var i = 0; i < a_tags.length; i++) {
  a_tags[i].removeAttribute("title");
}

//Tabelas de dados sem o elemento caption
var table_tag = document.getElementsByTagName("table")[0];
table_tag.innerHTML =
  "<caption> Tabela de eventos agendados </caption>" + table_tag.innerHTML;
