function clickableCards() {
  const cards = document.querySelectorAll('article');

  for (let i = 0; i < cards.length; i++){
    console.log(cards[i])
    cards[i].addEventListener('click', toggleCard);
  }
}
function toggleCard(e) {
  console.log(`${e.currentTarget.classList}`);

  if (e.currentTarget.classList.contains('cardOpen')) {
    e.currentTarget.classList.remove('cardOpen');
    e.currentTarget.classList.add('cardClose');
  } else {
    e.currentTarget.classList.remove('cardClose');
    e.currentTarget.classList.add('cardOpen');
  }

  // fade.classList.add('invis')
}

clickableCards()