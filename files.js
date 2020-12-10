var a_tags = document.getElementsByTagName("a");

for (var i = 0; i < a_tags.length; i++) {
  a_tags[i].removeAttribute("title");
}

<<<<<<< HEAD
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
=======
window.onload = setTimeout(function () {
  //debugger;
  console.log(document);
  var element = document.querySelector("ul.fp-value");
  console.log("salve ", element);
  element.remove();

  const form = document.createElement("form");
  form.id = "form-fieldset";
  const parent = document.getElementsByClassName("mb-3")[2];
  while (parent.childNodes.length) {
    form.appendChild(parent.firstChild);
  }

  const form_1 = document.createElement("form");
  form_1.id = "form-fieldset1";
  const form_2 = document.createElement("form");
  form_2.id = "form-fieldset2";
  var forms = [form_1, form_2];
  const parent2 = document.querySelectorAll(".col-md-9.form-inline.felement");
  for (var i = 0; i < parent2.length; i++) {
    while (parent2[i].childNodes.length) {
      forms[i].appendChild(parent2[i].firstChild);
    }
  }
  parent.appendChild(form);
  parent2[0].appendChild(form_1);
  parent2[1].appendChild(form_2);

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.className = "submit-form";
  form.appendChild(submit);

  const submit2 = document.createElement("input");
  submit2.type = "submit";
  submit2.className = "submit-form";
  var form2 = document.querySelector(".mform.clearfix");
  form2.appendChild(submit2);

  const submit3 = document.createElement("input");
  submit3.type = "submit";
  submit3.className = "submit-form";
  var form3 = document.querySelector("#form-fieldset");
  form3.appendChild(submit3);

  const submit4 = document.createElement("input");
  submit4.type = "submit";
  submit4.className = "submit-form";
  var form3 = document.querySelector("#form-fieldset1");
  form3.appendChild(submit4);
  const submit5 = document.createElement("input");
  submit5.type = "submit";
  submit5.className = "submit-form";
  var form5 = document.querySelector("#form-fieldset2");
  form3.appendChild(submit5);
}, 5000);
>>>>>>> e4710027edeb3cde16c10c94acd451b2b81f8fca
