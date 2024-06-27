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

const savedOption = Cookies.get('cookieBannerDisplayed');
setTimeout(() => {
  if (!savedOption) {
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
  document.getElementById('user-name').value = '';
  document.getElementById('birth-date').value = '';
});

const savedUserName = Cookies.get('username');

if (savedUserName) {
  document.getElementById('user-name').value = savedUserName;
}

const savedBirthDate = Cookies.get('birthinfo');
if (savedUserName) {
  const birthDate = (document.getElementById('birth-date').value =
    savedBirthDate);
}
