const contentWrapper = document.querySelector('.content-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let scrollAmount = 0;

nextButton.addEventListener('click', () => {
  contentWrapper.scrollTo({
    left: (scrollAmount += 350),
    behavior: 'smooth',
  });

  if (scrollAmount > 0) {
    prevButton.style.visibility = 'visible';
  }

  if (
    contentWrapper.scrollWidth - contentWrapper.clientWidth <=
    scrollAmount
  ) {
    nextButton.style.visibility = 'hidden';
  }
});

prevButton.addEventListener('click', () => {
  contentWrapper.scrollTo({
    left: (scrollAmount -= 350),
    behavior: 'smooth',
  });

  if (scrollAmount === 0) {
    prevButton.style.visibility = 'hidden';
  }

  if (nextButton.style.visibility === 'hidden') {
    nextButton.style.visibility = 'visible';
  }
});
