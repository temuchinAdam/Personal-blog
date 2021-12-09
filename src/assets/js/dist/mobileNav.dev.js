"use strict";

var burger = document.getElementById('sidebarToggle');
var sidebar = document.getElementById('sidebar');
var page = document.getElementById('page');
var body = document.body;
burger.addEventListener('click', function (event) {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  var mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);
  body.classList.add('show-sidebar');
}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
}