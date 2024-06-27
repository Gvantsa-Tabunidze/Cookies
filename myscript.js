'use strict';

const cookieBanner = document.getElementById('pop-up');
const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

const formEl = document.getElementById('userinfo');

acceptBtn.addEventListener('click', function () {
  cookieBanner.style.display = 'none';
  Cookies.set('cookieBannerDisplayed', 'true', { expires: 2 });
});

rejectBtn.addEventListener('click', function () {
  Cookies.remove('cookieBannerDisplayed');
  cookieBanner.style.display = 'none';
});

setTimeout(() => {
  if (!Cookies.get('cookieBannerDisplayed')) {
    cookieBanner.style.display = 'block';
  }
}, 2000);

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const userAccept = Cookies.get('cookieBannerDisplayed');

  if (userAccept) {
    const userInput = document.getElementById('user-name').value;
    Cookies.set('username', userInput);
    const birthDate = document.getElementById('birth-date').value;
    Cookies.set('birthinfo', birthDate);
  } else {
    Cookies.remove('username');
  }
});
