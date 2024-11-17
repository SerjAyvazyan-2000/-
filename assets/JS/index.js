const burger = document.querySelector('.burger');
const menu = document.querySelector('.header_menu');
const openModal = document.querySelectorAll('.open_modal');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');

    }


});

document.addEventListener('DOMContentLoaded', function () {
    // openModal.addEventListener("click", function (e) {
    //     if (modal.classList.contains('active')) {
    //         closeMenu();
    //     } else {
    //         openMenu();
    //     }
    // });
    if (openModal || openModal.length) {
        openModal.forEach((item, index) => {
            item.addEventListener('click', function () {
                console.log(item)
                if (modal.classList.contains('active')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        })

    }

    modalClose.addEventListener("click", function (e) {
        if (modal.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    function openMenu() {
        modal.classList.remove('out');
        modal.classList.add('active');

    }

    function closeMenu() {
        modal.classList.add('out');
        modal.classList.remove('active');

    }


});


document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});