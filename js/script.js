// Burger

document.querySelector('.header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__menu').classList.add('header__menu_active');
});

document.querySelector('.header__menu-cross').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__menu').classList.remove('header__menu_active');
});
