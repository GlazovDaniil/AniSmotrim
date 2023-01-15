
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
  
};

let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault();
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};
