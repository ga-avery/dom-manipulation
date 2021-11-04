// make a function cssSelect(selector) that returns an array of elements
// based on a css selector.
// Note: NOT a NodeList
function cssSelect(selector) {
  const arr = [];
  const els = document.querySelectorAll(selector);
  for (let i = 0; i < els.length; i++) {
    arr.push(els[i]);
  }
  return arr;
}
