// ========================================================================================


// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())


// ========================================================================================


// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('desktop')
// } else if (isTablet()) {
//     console.log('tablet')
// } else if (isMobile()) {
//     console.log('isMobile')
// }


// ========================================================================================


// Реализация бургер-меню
import {
    burger
} from './functions/burger';


// ========================================================================================


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


// ========================================================================================


// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();


// ========================================================================================


// Реализация табов
import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('products-tabs');
const tabs2 = new GraphTabs('about-company-tabs');


// ========================================================================================


// Получение высоты шапки сайта (не забудьте вызвать функцию)
import {
    getHeaderHeight
} from './functions/header-height';
getHeaderHeight();


// ========================================================================================


// Фикс фулскрин-блоков
import './functions/fix-fullheight';


// ========================================================================================


// Подключение плагина кастом-скролла
// import 'simplebar';


// ========================================================================================


// Подключение свайпера
import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade]);

document.querySelectorAll('.products-slider').forEach(el => {
    const products = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 750,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
            nextEl: el.parentElement.querySelector('.products-arrow-next'),
            prevEl: el.parentElement.querySelector('.products-arrow-prev'),
        },
    });
});


const reviews = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 750,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: '.reviews-arrow-next',
        prevEl: '.reviews-arrow-prev',
    },
});

const portfolio = new Swiper('.portfolio-slider', {
    slidesPerView: 4,
    spaceBetween: 45,
    speed: 750,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: '.portfolio-arrow-next',
        prevEl: '.portfolio-arrow-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});


document.querySelectorAll('.portfolio-modal-slider').forEach(el => {
    const portfolioModal = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 750,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: el.querySelector('.portfolio-modal-slider__pagination'),
            type: 'bullets',
            clickable: true,
        },
    });
});


// ========================================================================================



// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();


// ========================================================================================



// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


// ========================================================================================


// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// ========================================================================================


// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//     console.log(e.target);
//     console.log(e.detail);
//     console.log(e.detail.dir);
// });



// ========================================================================================


// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);



// ========================================================================================



// Подключение spollers
// import * as spollersFunc from "./functions/spollers";
// spollersFunc.spollers();


// ========================================================================================


// Подключение галереи

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';

// Запуск
// const galleries = document.querySelectorAll('#galleryID');
// galleries.forEach(gallery => {
//     lightGallery(gallery, {
//         // plugins: [lgFullscreen],
//         licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//         speed: 500,
//     });
// });



// ========================================================================================



// Модуль звездного рейтинга 
// import * as ratingFunc from "./functions/rating";
// ratingFunc.formRating();



// ========================================================================================



// Модуь  "количество"
//import { formQuantity } from './functions/quantity';
//formQuantity();


// ========================================================================================



/* Динамический адаптив */
import "./functions/dynamic-adapt";


// ========================================================================================
