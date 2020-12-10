var a_tags = document.getElementsByTagName("a");

for (var i = 0; i < a_tags.length; i++) {
  a_tags[i].removeAttribute("title");
}

var element = document.getElementsByClassName("fp-value")[1];
element.parentNode.removeChild(element);

//Elementos fieldset sem descrição
var fieldset_coursesearchbox = document.getElementsByClassName(
  "coursesearchbox invisiblefieldset"
);

fieldset_coursesearchbox[0].innerHTML =
  "<legend>Buscar disciplinas</legend>" + fieldset_coursesearchbox[0].innerHTML;
fieldset_coursesearchbox[1].innerHTML =
  "<legend>Acção buscar disciplinas</legend>" +
  fieldset_coursesearchbox[1].innerHTML;
