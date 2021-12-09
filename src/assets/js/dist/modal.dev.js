"use strict";

var modalBtn = document.querySelectorAll('[data-modal]');
modalBtn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    console.log('click');
  });
});