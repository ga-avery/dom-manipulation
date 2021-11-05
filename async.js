/** @type {HTMLElement} */
const cell13 = document.querySelectorAll('.red')[4];

const btn1 = document.querySelector('#btn-1');
const btn3 = document.querySelector('#btn-3');
const btn5 = document.querySelector('#btn-5');


function changeText(element, text) {
  element.textContent = text;
}
btn1.addEventListener('click', () => {
  setTimeout(() => {
    changeText(cell13, 'first');
    setTimeout(() => {
      changeText(cell13, 'second');
      setTimeout(() => {
        changeText(cell13, 'third');
        setTimeout(() => {
          changeText(cell13, 'fourth');
          setTimeout(() => {
            changeText(cell13, 'fifth');
            setTimeout(() => {
              changeText(cell13, 'sixth');
              setTimeout(() => {
                changeText(cell13, 'seventh');
                setTimeout(() => {
                  changeText(cell13, 'red');
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  }, 250);
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn3.addEventListener('click', () => {
  changeText(cell13, 'first');
  delay(250)
    .then(() => {
      changeText(cell13, 'second');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'third');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'fourth');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'fifth');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'sixth');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'seventh');
      return delay(250);
    })
    .then(() => {
      changeText(cell13, 'red');
      return delay(250);
    });
});

btn5.addEventListener('click', async () => {
  changeText(cell13, 'first');
  await delay(250);
  changeText(cell13, 'second');
  await delay(250);
  changeText(cell13, 'third');
  await delay(250);
  changeText(cell13, 'fourth');
  await delay(250);
  changeText(cell13, 'fifth');
  await delay(250);
  changeText(cell13, 'sixth');
  await delay(250);
  changeText(cell13, 'seventh');
  await delay(250);
  changeText(cell13, 'red');
});
