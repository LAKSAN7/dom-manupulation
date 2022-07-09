// tasks 

// change the color of box1
var box1 = document.querySelector("#box1s p")
box1.style.background = "radial-gradient(circle,white,rgba(0,0,0,.2))"
box1.style.fontSize = "44px"

// me: shrink box2 by half

var box2 = document.querySelector("#box2")
var box2styles = window.getComputedStyle(box2)

var halvePx = function(pxValue) {
  var halfVal = parseInt(pxValue) / 2
  return halfVal + "px"
}

box2.style.width = halvePx(box2styles.width)
box2.style.height = halvePx(box2styles.height)

// you: double the size of box2s

var box2s = document.querySelector('#box2s')
var box2sStyles = window.getComputedStyle(box2s)
var doublePx = function(pxValue) {
  var doubledInt = parseInt(pxValue) * 2
  return doubledInt + "px"  
}
box2s.style.width = doublePx(box2sStyles.width)
box2s.style.height = doublePx(box2sStyles.height)

// me: put a circle in the middle of box3

// **using .appendChild**
var circleEl = document.createElement("div")
// give circleEl the .pinkCircle class
circleEl.className += ' pinkCircle'
var box3 = document.querySelector("#box3s")
box3.appendChild(circleEl)

// **using .innerHTML** 
// var box3s = document.querySelector('#box3s')
// box3s.innerHTML = '<div class="pinkCircle"><p>squarely</p></div>'

// var circleEl = document.querySelector("#box3s .pinkCircle")

box3s.removeChild(circleEl)
// you: remove the circle from box3

// me: write a function for #box5 called clearFinished that will remove all the chores in the list that have the class "done". 


var isDone = function(choreElement) {
  console.log(choreElement.classList)
  var doneStatus = choreElement.classList[1]
  console.log(doneStatus)
  if (doneStatus === "done") {
    return true
  }
  else {
    return false
  }
}

var choresContainer = document.querySelector("#box5 ul")

var chores = choresContainer.querySelectorAll('li')

var completed_Chores_Container = document.querySelector("#box5s ul")

for (var i = 0; i < chores.length; i ++) {
  var choreNode = chores[i]
  if (isDone(choreNode)) {
    choresContainer.removeChild(choreNode)
    completed_Chores_Container.appendChild(choreNode)
  }
}
// you: write a function for #box5 that takes all the completed chores and moves them to #box5s


// var chores_Done = choresContainer.querySelectorAll('li')

// for (var i = 0; i < chores.length; i++) {
//   var choreNode = chores[i]
//   if (isDone(choreNode)) {
//     completed_Chores_Container.appendChild(choreNode)
//   }
// }









// // write a function called addChore that adds a new item to the list of chores, giving it the class "undone."

//   // me: i'll do this task using the .appendChild(). 

//   // you: you'll repeat it using .innerHTML. 

// // me: reverse the text in #box6
// // you: put <em></em> tags around the word "keep" in #box6s

// NOW DO IT ALL WITH BUTTONS

