// Navigation Section 
const menu = document.getElementById('menu');
const humbarger = document.getElementById('humbarger');
const openMenu = document.getElementById('open-menu-btn');
const closeMenu = document.getElementById('close-menu-btn');

humbarger.addEventListener("click", () => {
   humbarger.classList.toggle('active');
   if (humbarger.classList.contains('active')) {
      menu.classList.remove('translate-x-96');
      menu.classList.remove('hidden')
      menu.classList.add('translate-x-0');
      openMenu.classList.add('hidden');
      closeMenu.classList.remove('hidden');
   } else {
      menu.classList.remove('translate-x-0');
      menu.classList.add('hidden');
      menu.classList.add('translate-x-96');
      openMenu.classList.remove('hidden');
      closeMenu.classList.add('hidden');
   }
})

// Carousel Slider 
$('.carousel-slide').slick({
   infinite: true,
   dots: true,
});

// Course Slider 
$('.course-carousel').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});

// Review Slider 
$('.review-carousel').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   arrows: false,
   dots: true,
   responsive: [
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
         }
      },
   ]
});