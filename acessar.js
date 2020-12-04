//consertando a lingua da pagina
document.getElementsByTagName("html")[0].lang = "pt-br";

var a = document.getElementsByTagName ("link")[0];
a.remove();

var logo = document.getElementsByClassName("logo")[0];
logo.setAttribute("href","https://edisciplinas.usp.br/acessar/");
logo.setAttribute("alt", "link para página de acesso");
//logo.innerHTML = '<div class="inner-logo">https://edisciplinas.usp.br/acessar/</div>';
logo.remove();

var navigation = document.getElementsByClassName("navigation-menu")[0];
navigation.innerHTML = "<li class='active'><a href='#welcome-section'>Bem-vindo</a></li>" + navigation.innerHTML;
