function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  let list = document.getElementsByClassName('ranked-list')

  for (let index in list) {
    list[index].innerHTML = parseInt(list[index]) + n
  }
}
