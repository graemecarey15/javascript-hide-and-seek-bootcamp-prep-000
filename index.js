function getFirstSelector(selector) {
return  document.querySelector(`${selector}`)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n)
  }
}

function deepestChild() {
  const list = document.getElementById('grand-node').querySelectorAll('div')
  for (var i = 0; i < list.length; i++) {
    if(i=list.length-1){
      return list[i]
    }
  }
}
