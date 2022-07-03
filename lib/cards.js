function clickableCards() {
  const cards = document.querySelectorAll("article");

  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    cards[i].addEventListener("click", toggleCard);
  }
}
function toggleCard(e) {
  console.log(e.currentTarget.scrollHeight);

  if (e.currentTarget.classList.contains("cardOpen")) {
    e.currentTarget.classList.remove("cardOpen");
    e.currentTarget.classList.add("cardClose");
    e.currentTarget.style.height = "8rem";
  } else {
    e.currentTarget.classList.remove("cardClose");
    e.currentTarget.classList.add("cardOpen");

    e.currentTarget.style.height = `${e.currentTarget.scrollHeight + 40}px`;
  }
}

clickableCards();
