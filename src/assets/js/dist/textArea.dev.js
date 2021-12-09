"use strict";

var textArea = document.querySelectorAll('[data-autoresize]');
textArea.forEach(function (item) {
  var textAreaH = item.offsetHeight;
  item.addEventListener('input', function (event) {
    var $this = event.target;
    $this.style.height = textAreaH + 'px';
    $this.style.height = $this.scrollHeight + 'px';
  });
});