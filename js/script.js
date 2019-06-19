var link =document.querySelector(".contactss__btn"); //Для начала найдём в разметке кнопку, клик по которой покажет модальное окно. Запишем её в переменную.
var popup = document.querySelector(".feedback"); //Находим модальное окно в разметке и записываем его в переменную.
var close = popup.querySelector(".feedback__btn-close");//Найдём в разметке кнопку закрытия модального окна и запишем её в переменную.
var login = popup.querySelector("[name=login]");//Поработаем над улучшением формы входа. Сделаем так, чтобы при открытии формы фокус автоматически устанавливался в поле ввода логина. Для этого в первую очередь найдём это поле.
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".btn-close");
var itemCartLink = document.querySelector(".catalog-list__buy");
var itemCartmapPopup = document.querySelector(".Item-added-cart");
var itemCartmapClose = itemCartmapPopup.querySelector(".btn-close-cart");


link.addEventListener("click", function (evt) { //Поймаем событие клика по этой кнопке.
  evt.preventDefault();//Отменим стандартное действие ссылки при нажатии на неё.
  popup.classList.add("modal-show")//С помощью метода classList.add добавляем этот класс к модальному окну по клику на ссылку.
  login.focus();//Ставим фокус в поле ввода логина при открытии модального окна.
});
mapLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  mapPopup.classList.add("modal-show-map")
});
itemCartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemCartmapPopup.classList.add("modal-show-item-cart")
});



close.addEventListener("click", function (evt) {//Добавим обработчик клика по кнопке закрытия модального окна. Отменяем стандартное действие и удаляем класс, который отвечает за показ модального окна.
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show-map");
});
itemCartmapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemCartmapPopup.classList.remove("modal-show-item-cart");
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

