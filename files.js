var a_tags = document.getElementsByTagName("a");

for (var i = 0; i < a_tags.length; i++) {
  a_tags[i].removeAttribute("title");
}
