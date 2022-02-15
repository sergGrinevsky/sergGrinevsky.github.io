let page = document.querySelector('.page');

let themeButton = document.querySelector('.theme-button'); // Объявляем переменную и находим методом querySelector класс

themeButton.onclick = function () {  //это обработчик событий
    page.classList.toggle('dark-theme');
}