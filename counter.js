export function setupCounter() {
  const { counter, btnIncrease, btnReset, btnDecrease } = {
    counter: document.querySelector('.counter'),
    btnIncrease: document.querySelector('.increase'),
    btnReset: document.querySelector('.reset'),
    btnDecrease: document.querySelector('.decrease')
  };

  let count = 0;

  counter.textContent = count;

  btnIncrease.addEventListener('click', () => {
    count++
    counter.textContent = count;
  });

  btnReset.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
  });

  btnDecrease.addEventListener('click', () => {
    if (count > 0) {
      count--;
      counter.textContent = count;
    }
  });
}
