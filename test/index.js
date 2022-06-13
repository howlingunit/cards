function setUpTheThing() {
  const box = document.querySelector('#box');
  box.addEventListener('click', toggleBox);
}

function toggleBox(e){

  console.log(e.currentTarget)

  if (e.currentTarget.classList.contains('cardOpen')) {
    e.currentTarget.classList.remove('cardOpen');
    e.currentTarget.classList.add('cardClose');
  } else {
    e.currentTarget.classList.remove('cardClose');
    e.currentTarget.classList.add('cardOpen');
  }
}

setUpTheThing()