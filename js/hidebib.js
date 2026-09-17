// Copyright 2012 Google Inc. All Rights Reserved.
// Author: jeff.donahue@gmail.com (Jeff Donahue)
// Minor modifications by Jon Barron.

function hideallbibs() {
  var el = document.getElementsByTagName("div");
  for (var i = 0; i < el.length; ++i) {
    if (el[i].className == "paper") {
      var bib = el[i].getElementsByTagName("pre");
      if (bib.length > 0) {
        bib[0].style.display = 'none';
      }
    }
  }
}

function togglebib(id) {
  var el = document.getElementById(id).getElementsByTagName("pre");
  for (var i = 0; i < el.length; ++i) {
    if (el[i].style.display == 'none') {
      el[i].style.display = 'block';
    } else {
      el[i].style.display = 'none';
    }
  }
}

function toggleblock(id) {
  var el = document.getElementById(id);
  if (el.style.display == 'none') {
    el.style.display = 'inline';
  } else {
    el.style.display = 'none';
  }
}

function hideblock(id) {
  var el = document.getElementById(id);
  if (el) {
    el.style.display = 'none';
  }
}
