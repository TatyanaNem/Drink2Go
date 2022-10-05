// ***************** SWIPER *****************************
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// ***************** MAP **************************

const map = L.map('map')
  .setView({
    lat: 59.968322,
    lng: 30.317359,
  }, 19);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  ).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});
const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// ************* SELECT *******************************

let select = function() {
  let selectHeader = document.querySelector('.select__header');
  let selectBody = document.querySelector('.select__body');
  let selectItem = document.querySelectorAll('.select__option');

  function escKeydownHandler(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      selectBody.classList.toggle('is-active');
    }
  }

  function selectToggle() {
    selectBody.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
        select = this.closest('.select');
    let currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        selectBody.classList.remove('is-active');
  }

  selectHeader.addEventListener('click', selectToggle);

  selectHeader.addEventListener('keydown', escKeydownHandler);

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
    item.addEventListener('keydown', escKeydownHandler);
  });
}

select();

// ***************** BURGER *****************************
const burger = document.querySelector('.burger');
const siteNav = document.querySelector('.site-nav');
const siteNavList = document.querySelector('.site-nav__list');

burger.classList.remove('burger--nojs');
siteNav.classList.remove('site-nav--nojs');
siteNavList.classList.remove('site-nav__list--nojs');
siteNavList.classList.add('site-nav__list--closed');

if (burger) {
  burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    burger.classList.toggle('burger--opened');
    burger.classList.toggle('burger--closed');
    siteNavList.classList.toggle('site-nav__list--closed');
    siteNavList.classList.toggle('site-nav__list--opened');
  });
};
