// Scramble Script by Jeff Donahue
// Obfuscates e-mail addresses on the page.

function scramble_email(elem) {
  var addr = elem.getAttribute("data-addr");
  if (!addr) return;
  elem.innerHTML = addr;
  elem.setAttribute("href", "mailto:" + addr);
}

function scramble_all() {
  var els = document.getElementsByClassName("scramble");
  for (var i = 0; i < els.length; ++i) {
    scramble_email(els[i]);
  }
}

document.addEventListener("DOMContentLoaded", scramble_all);
