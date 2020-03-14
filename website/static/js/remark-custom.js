let mdSlideshow = remark.create();

document.addEventListener('DOMContentLoaded', function() {

    let nextArrowElements = document.querySelectorAll('button[class="nextSlide"]'),
        previousArrowElements = document.querySelectorAll('button[class="previousSlide"]'),
        fullScreenElements = document.querySelectorAll('button[class="fullScreen"]');

    previousArrowElements[0].firstChild.classList.add('disabled');
    nextArrowElements[nextArrowElements.length - 2].firstChild.classList.add('disabled');

    [].forEach.call(fullScreenElements, function(fullScreenEle) {
        fullScreenEle.addEventListener('click', function() {
            mdSlideshow.toggleFullscreen();
            toggleFullScreenIcons();
        })
    });

    [].forEach.call(nextArrowElements, function(nextArrowEle) {
        nextArrowEle.addEventListener('click', function() {
            mdSlideshow.gotoNextSlide();
        })
    });

    [].forEach.call(previousArrowElements, function(previousArrowEle) {
        previousArrowEle.addEventListener('click', function() {
            mdSlideshow.gotoPreviousSlide();
        })
    });

    function toggleFullScreenIcons() {
        let isFullScreen = document.fullscreenElement !== null;
        if(isFullScreen) {
            [].forEach.call(fullScreenElements, function(fullScreenEle) {
                fullScreenEle.firstChild.classList.remove('wms-fullscreen-exit');
                fullScreenEle.firstChild.classList.add('wms-fullscreen');
                fullScreenEle.setAttribute("title", "Full screen (F)")
            });
        } else {
            [].forEach.call(fullScreenElements, function(fullScreenEle) {
                fullScreenEle.firstChild.classList.remove('wms-fullscreen');
                fullScreenEle.firstChild.classList.add('wms-fullscreen-exit');
                fullScreenEle.setAttribute("title", "Exit full screen (F)")
            });
        }
    }

});
