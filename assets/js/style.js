var btnShow = document.getElementsByClassName('mobile__bars')[0];
var btnClose = document.getElementsByClassName('mobile__btn-close')[0];

var mobileBox = document.getElementsByClassName('mobile-box')[0];

btnClose.addEventListener('click', function() {
    mobileBox.classList.remove('mobile-box--show')
    mobileBox.classList.add('mobile-box--close');
})

btnShow.addEventListener('click', function() {
    mobileBox.classList.remove('mobile-box--close')
    mobileBox.classList.add('mobile-box--show')
})

