$(document).ready(function () {

    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .row').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $(".project-area .row .test-popup-link").magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })
})