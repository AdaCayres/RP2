//consertando a lingua da pagina
document.getElementsByTagName("html")[0].lang = "pt-br";

var a = document.getElementsByTagName ("link")[0];
a.remove();

document.getElementsByClassName("logo")[0].setAttribute("href","");
