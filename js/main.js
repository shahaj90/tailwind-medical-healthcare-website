// Mobile navbar
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);
    closeBtnIcn.classList.remove(arrowRightClass);
    closeBtnIcn.classList.add(arrowLeftClass);
  } else {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
    closeBtnIcn.classList.remove(arrowLeftClass);
    closeBtnIcn.classList.add(arrowRightClass);
  }
});

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
