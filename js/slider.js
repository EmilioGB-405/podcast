

const left = document.querySelector('#left');
  const right = document.querySelector('#right');

  function updateCardClasses() {
    const cards = document.querySelectorAll('.cardSlider');

    cards.forEach(card => {
      card.classList.remove('card-left', 'card-center', 'card-right');
    });

    if (cards[0]) cards[0].classList.add('card-left');
    if (cards[1]) cards[1].classList.add('card-center');
    if (cards[2]) cards[2].classList.add('card-right');
  }

  updateCardClasses();

  right.addEventListener('click', () => {
    const cards = document.querySelectorAll('.cardSlider');
    document.querySelector('#cardContentComments').appendChild(cards[0]);
    updateCardClasses();
  });

  left.addEventListener('click', () => {
    const cards = document.querySelectorAll('.cardSlider');
    document.querySelector('#cardContentComments').prepend(cards[cards.length - 1]);
    updateCardClasses();
  });

  export{left,right,updateCardClasses};