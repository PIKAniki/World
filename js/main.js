$(function() {;

    $(document).ready(function() {
        $("#header").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 99;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
    (function() {
        window.myLib = {};

        window.myLib.body = document.querySelector('body');

        window.myLib.closestAttr = function(item, attr) {
            var node = item;

            while (node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }

                node = node.parentElement;
            }

            return null;
        };

        window.myLib.closestItemByClass = function(item, className) {
            var node = item;

            while (node) {
                if (node.classList.contains(className)) {
                    return node;
                }

                node = node.parentElement;
            }

            return null;
        };

        window.myLib.toggleScroll = function() {
            myLib.body.classList.toggle('no-scroll');
        };
    })();

    $(document).ready(function() {
        var $slider = $('.slider__content');
        var $progressBar = $('.progress');


        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc);


        });


        $slider.slick({
            prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18"fill="none" xmlns="http://www.w3.org/2000/svg"><path d ="M9.21839 1L1 9L9.21839 17"/></svg></button>',
            nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d ="M0.78161 17L9 9L0.78161 1"/></svg></button>',
            fade: true,
            infinite: false
        });
    });

    $('.news__slider').slick({
        prevArrow: '<button class="slider-btn news__slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18"fill="none" xmlns="http://www.w3.org/2000/svg"><path d ="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn news__slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d ="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1

    });



    $(document).ready(function() {
        setInterval(window.onload = function() {
            const modals = () => {
                function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
                    const trigger = document.querySelectorAll(triggerSelector),
                        modal = document.querySelector(modalSelector),
                        close = document.querySelector(closeSelector),
                        bgimg = document.querySelector('.banner-area'),
                        header = document.querySelector('.header'),
                        windows = document.querySelectorAll('[data-modal]');

                    trigger.forEach(item => {
                        item.addEventListener('click', (e) => {
                            if (e.target) {
                                e.preventDefault();
                            }

                            windows.forEach(item => {
                                item.style.display = 'none';
                            });

                            modal.style.display = "block";
                            document.body.style.overflow = "hidden";
                            document.body.style.marginRight = `${scroll}px`;
                            document.body.classList.add('modal-open');
                            bgimg.classList.add('hidden');
                            header.classList.add('hidden');

                        });
                    });

                    close.addEventListener('click', () => {
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });
                        modal.style.display = "none";
                        document.body.style.overflow = "";
                        document.body.style.marginRight = "";
                        document.body.classList.remove('modal-open');
                        bgimg.classList.remove('hidden');
                        header.classList.remove('hidden');

                    });

                    modal.addEventListener('click', (e) => {
                        if (e.target === modal && closeClickOverlay) {
                            windows.forEach(item => {
                                item.style.display = 'none';
                            });
                            modal.style.display = "none";
                            document.body.style.overflow = "";
                            document.body.style.marginRight = "";

                            document.body.classList.remove('modal-open');
                            bgimg.classList.remove('hidden');
                            header.classList.remove('hidden');

                        }
                    });
                }







                // bindModal('.news__slider-item-btn', '.news__popup-content', '.popup__close');
                bindModal('.tourism__item-btn', '.tourism__popup', '.popup-close');

                bindModal('.topic__content-item--robot', '.topic__popup--robot', '.topic__popup-close--robot');
                bindModal('.topic__content-item--biology', '.topic__popup--biology', '.topic__popup-close--biology');
                bindModal('.topic__content-item--economy', '.topic__popup--economy', '.topic__popup-close--economy');
                bindModal('.topic__content-item--space', '.topic__popup--space', '.topic__popup-close--space');
                bindModal('.topic__content-item--world', '.topic__popup--world', '.topic__popup-close--world');
                bindModal('.topic__content-item--nano', '.topic__popup--nano', '.topic__popup-close--nano');
                bindModal('.topic__content-item--nuclear', '.topic__popup--nuclear', '.topic__popup-close--nuclear');
                bindModal('.topic__content-item--transport', '.topic__popup--transport', '.topic__popup-close--transport');



            };
            modals();
        });


        $("#only_num").keydown(function(event) {


            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 107 ||

                (event.keyCode == 65 && event.ctrlKey === true) ||

                (event.keyCode >= 35 && event.keyCode <= 39)) {

                return;
            } else {

                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    });


    const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideTabContent() {
            content.forEach(item => {
                item.style.display = "none";

            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        };

        function showTabContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeClass);
        };

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            };
        });
    };
    tabs('.topic__popup-tabs--robot', '.topic__popup-tab--robot', '.topic__popup-tab-content--robot', 'active');
    tabs('.topic__popup-tabs--biology', '.topic__popup-tab--biology', '.topic__popup-tab-content--biology', 'active');
    tabs('.topic__popup-tabs--economy', '.topic__popup-tab--economy', '.topic__popup-tab-content--economy', 'active');
    tabs('.topic__popup-tabs--space', '.topic__popup-tab--space', '.topic__popup-tab-content--space', 'active');
    tabs('.topic__popup-tabs--world', '.topic__popup-tab--world', '.topic__popup-tab-content--world', 'active');
    tabs('.topic__popup-tabs--nano', '.topic__popup-tab--nano', '.topic__popup-tab-content--nano', 'active');
    tabs('.topic__popup-tabs--nuclear', '.topic__popup-tab--nuclear', '.topic__popup-tab-content--nuclear', 'active');
    tabs('.topic__popup-tabs--transport', '.topic__popup-tab--transport', '.topic__popup-tab-content--transport', 'active');
    (function() {
        var changePopupTitle = function(target) {

            var item = myLib.closestItemByClass(target, 'tourism__item');
            var popup = document.querySelector('.tourism__popup');


            var title = item.querySelector('.tourism__item-title').textContent;

            popup.querySelector('.tourism__popup-title').textContent = title;
        };;

        var items = document.querySelector('.tourism__items');
        items.addEventListener('click', function(e) {
            var target = e.target;
            if (target.classList.contains('tourism__item-btn')) {
                e.preventDefault();
                changePopupTitle(target);
            }
        });
    })();



});