var link =document.querySelector(".contactss__btn");
  
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback__btn-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show")
  login.focus();
});

  
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var links =document.querySelector("Item-added-cart");

var popupp = document.querySelector("catalog-list__buy");
var closes = popup.querySelector(".feedback__btn-close");

links.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupp.classList.add("modal-show")
});

  
closes.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupp.classList.remove("modal-show");
});