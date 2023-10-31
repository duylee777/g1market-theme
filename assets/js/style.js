var btnShow = document.getElementById('showMenuMobileBtn');
var btnClose = document.getElementById('closeMenuMobileBtn');

var mobileWrap = document.getElementsByClassName('mobile-wrap')[0];

btnClose.addEventListener('click', function() {
    mobileWrap.classList.remove('mobile-wrap--show')
    mobileWrap.classList.add('mobile-wrap--close');
})

btnShow.addEventListener('click', function() {
    mobileWrap.classList.remove('mobile-wrap--close');
    mobileWrap.classList.add('mobile-wrap--show');
})

