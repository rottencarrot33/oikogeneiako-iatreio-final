  const darkButton = document.getElementById('dark');
  const lightButton = document.getElementById('light');
  const body = document.body;


  darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    document.querySelector('.light-mode').style.display = "none";
    document.querySelector('.dark-mode').style.display = "block";
  };

  lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    document.querySelector('.dark-mode').style.display = "none";
    document.querySelector('.light-mode').style.display = "block";
  };

  // set the initial display of the images based on the active mode
  if (body.classList.contains('dark')) {
    document.querySelector('.light-mode').style.display = "none";
    document.querySelector('.dark-mode').style.display = "block";
  } else {
    document.querySelector('.dark-mode').style.display = "none";
    document.querySelector('.light-mode').style.display = "block";
  }



  // Page Animation

  function reveal() {
    let reveals = document.querySelectorAll(".slideElement");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 80;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  // Call the reveal function on page load
  reveal();
  
  // Trigger the reveal function on scroll
  window.addEventListener("scroll", reveal);


  // Swipper JS

var swiper = new Swiper('.swiper-container', {
  speed: 800,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    1: {
      slidesPerView: 1
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});


// word lomit

const reviewTexts = document.querySelectorAll('.review-text h6');

const MAX_CHARS = 220; // Maximum number of characters to show

reviewTexts.forEach(reviewText => {
  const text = reviewText.textContent.trim();

  if (text.length > MAX_CHARS) {
    const truncatedText = text.slice(0, MAX_CHARS) + '...';
    reviewText.textContent = truncatedText;
  }
});



// Img swiper slider

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});




  






