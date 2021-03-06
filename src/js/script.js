const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const mainNavigation = document.querySelector('.main-navigation');
const teamMore = document.querySelector('.team-more');

const modal = document.querySelectorAll('.modal');
const modalJava = document.querySelector('#modal-java');
const modalFe = document.querySelector('#modal-fe');
const modalQa = document.querySelector('#modal-qa');
const modalExit = document.querySelectorAll('.modal-exit');

const btnCollapse = document.querySelector('.btn-collapse');
const btnScrollTop = document.querySelector('.btn-scrollTop');
const btnMoreJava = document.querySelector('.btn-more_java');
const btnMoreFe = document.querySelector('.btn-more_fe');
const btnMoreQa = document.querySelector('.btn-more_qa');

// mobile
navbarToggle.addEventListener('click', (e) => {
    e.preventDefault();

    navbarToggle.classList.toggle('collapsed');
    mainNavigation.classList.toggle('collapsed');
});

btnCollapse.addEventListener('click', (e) => {
    e.preventDefault();

    btnCollapse.classList.remove('btn-collapse');
    teamMore.classList.add('collapsed');
});

// desktop
window.addEventListener('scroll', () => {
    window.scrollY > 30 ? btnScrollTop.style.display = 'block' : btnScrollTop.style.display = 'none';
});

btnScrollTop.addEventListener('click', (e) => {
    e.preventDefault();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

// modal
btnMoreJava.addEventListener('click', (e) => {
    e.preventDefault();
    modalJava.classList.toggle('d-flex');
});

btnMoreFe.addEventListener('click', (e) => {
    e.preventDefault();
    modalFe.classList.toggle('d-flex');
});

btnMoreQa.addEventListener('click', (e) => {
    e.preventDefault();
    modalQa.classList.toggle('d-flex');
});

[...modalExit].forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();

    [...modal].forEach(item => {
        if (item.classList.contains('d-flex')) {
            item.classList.remove('d-flex');
        }
    });
}));