//Formulários sem o botão de envio
document.getElementsByTagName("form")[0].remove();

//empty sections
var size = document.querySelectorAll("li.section").length;

for(i = size-1; i >= 0; i--) {
    if(document.querySelectorAll("ul.section")[i].innerHTML === "") {
        document.querySelectorAll("li.section")[i].remove();
    }
}

//
document.getElementsByClassName("list-unstyled ml-3")[2].innerHTML = '<li></li> <li><a href="https://edisciplinas.usp.br/course/view.php?id=80142&amp;lang=en" title="English ‎(en) lang‎">English ‎(en)‎</a></li> <li><a href="https://edisciplinas.usp.br/course/view.php?id=80142&amp;lang=es" title="Español - Internacional ‎(es)‎ lang‎">Español - Internacional ‎(es)‎</a></li> <li><a href="https://edisciplinas.usp.br/course/view.php?id=80142&amp;lang=fr" title="Français ‎(fr)‎ lang‎">Français ‎(fr)‎</a></li> <li><a href="https://edisciplinas.usp.br/course/view.php?id=80142&amp;lang=pt_br" title="Português - Brasil ‎(pt_br) lang‎‎">Português - Brasil ‎(pt_br)‎</a></li>';

document.getElementsByTagName("fieldset")[0].remove();