var itens = document.querySelectorAll('[role="menuitem"]');

for(var i = 0; i < itens.length; i++){
    itens[i].title = itens[i].title + " item";
}

var hrefs = ['href="https://edisciplinas.usp.br/message/index.php?lang=de"', 
             'href="https://edisciplinas.usp.br/message/index.php?lang=en"',  
             'href="https://edisciplinas.usp.br/message/index.php?lang=es"', 
             'href="https://edisciplinas.usp.br/message/index.php?lang=fr"', 
             'href="https://edisciplinas.usp.br/message/index.php?lang=pt_br"'];

for(var i = 0; i < hrefs.length; i++) {
    document.querySelectorAll('[' + hrefs[i] + ']')[0].title = document.querySelectorAll('[' + hrefs[i] + ']')[0].title + " language";
    document.querySelectorAll('[' + hrefs[i] + ']')[1].title = document.querySelectorAll('[' + hrefs[i] + ']')[1].title + " language";
}