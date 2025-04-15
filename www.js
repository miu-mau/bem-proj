function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('element-show');
    } else {
      if (!entry.target.classList.contains('top10__box')) {
        entry.target.classList.remove('element-show');
      }
    }
  });
}

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

// Select elements using BEM class names
let elements = document.querySelectorAll('.description__pic-1, .top10__rec, .top10__rectangle, .hero');

// Observe each element
elements.forEach(elm => {
  observer.observe(elm);
});

document.addEventListener('DOMContentLoaded', function() {
  let aboutImage = document.querySelector('.about__image');
  if (aboutImage && window.observer) {
      window.observer.observe(aboutImage);
  }
});