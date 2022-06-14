if (document.querySelector('.portfolio-modal-map')) {
    document.querySelectorAll('.portfolio-modal-map').forEach(el => {
        function init() {
            const map = new ymaps.Map(el, {
                center: [57.0008560209556, 40.97569946565192],
                zoom: 13,
            });
            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }
        ymaps.ready(init);
    });
}
