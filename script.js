const toggleBtn = document.querySelector('.header__toggle');
const navList = document.querySelector('.header__nav-list');

toggleBtn.addEventListener('click', () => {
navList.classList.toggle('active');
});

