var a_tags = document.getElementsByTagName("a");

for (var i = 0; i < a_tags.length; i++) {
  a_tags[i].removeAttribute("title");
}

window.onload = setTimeout(function () {
  var out_tag = document.getElementsByClassName(
    "col-md-9 form-inline felement"
  )[0];
  var new_tag = document.getElementsByTagName("fieldset")[0];

  var out_tag2 = document.getElementsByClassName(
    "col-md-9 form-inline felement"
  )[1];
  var new_tag2 = document.getElementsByTagName("fieldset")[1];

  var out_tag3 = document.getElementsByClassName("mb-3")[2];
  var new_tag3 = document.getElementsByTagName("fieldset")[2];

  out_tag.innerHTML = new_tag.innerHTML;
  out_tag2.innerHTML = new_tag2.innerHTML;
  out_tag3.innerHTML = new_tag3.innerHTML;

  var element = document.querySelector("ul.fp-value");
  element.remove();
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.className = "submit-form";
  var form = document.querySelector(".mform.clearfix");
  form.appendChild(submit);
}, 5000);
