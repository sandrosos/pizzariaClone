let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }    
  });


  // get the element to animate
var element = document.getElementById('box');

function inView() {
  if (element.parentElement.classList.contains('swiper-slide-active')) {
    console.log('aaaaaaaaa');
    return true;
  } else {
    console.log('bbbbbbbbbb');
    return false;
  }
}

function animate() {
  if (inView()) {
      element.classList.add('animate');
  } else {
    element.classList.remove('animate');
  }
}

animate();