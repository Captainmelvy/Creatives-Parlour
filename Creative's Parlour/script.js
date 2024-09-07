$(document).ready(function() {
    // Function to wrap each word in a span
    function wrapWords(selector) {
        $(selector).each(function() {
            let words = $(this).text().split(' ');
            $(this).html(words.map(word => `<span>${word}</span>`).join(' '));
        });
    }

    // Apply to the text elements
    wrapWords('.arts .p');

    // Scroll event to change color word by word
    $(window).on("scroll", function() {
        let scrollPos = $(window).scrollTop();

        $('span').each(function() {
            if (scrollPos > $(this).offset().top - $(window).height() / 1.5) {
                $(this).css('color', '#000');  // Color when in view
            } else {
                $(this).css('color', '#FFF5E1');  // Default color
            }
        });
    });
});

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  AOS.init();

  $(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) { // You can adjust the scroll distance
            $(".navbar").addClass("solid");
        } else {
            $(".navbar").removeClass("solid");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      menuToggle.classList.toggle('open');
  });
});








