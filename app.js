'use strict';

'use strict';

var firstImg = document.getElementById('item-one');
var secondImg = document.getElementById('item-two');
var thirdImg = document.getElementById('item-three');
var imgArr = [];
var display = [];
var resultsArr = [];
var counter = 0;


function Items(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  imgArr.push(this);
}

new Items('bag', 'assets/bag.jpg');
new Items('banana', 'assets/banana.jpg');
new Items('bathroom', 'assets/bathroom.jpg');
new Items('boots', 'assets/boots.jpg');
new Items('breakfast', 'assets/breakfast.jpg');
new Items('bubblegum', 'assets/bubblegum.jpg');
new Items('chair', 'assets/chair.jpg');
new Items('cthulhu', 'assets/cthulhu.jpg');
new Items('dogDuck', 'assets/dog-duck.jpg');
new Items('dragon', 'assets/dragon.jpg');
new Items('pen', 'assets/pen.jpg');
new Items('petSweep', 'assets/pet-sweep.jpg');
new Items('scissors', 'assets/scissors.jpg');
new Items('shark', 'assets/shark.jpg');
new Items('sweep', 'assets/sweep.png');
new Items('tauntaun', 'assets/tauntaun.jpg');
new Items('unicorn', 'assets/unicorn.jpg');
new Items('usb', 'assets/usb.gif');
new Items('waterCan', 'assets/water-can.jpg');
new Items('wineGlass', 'assets/wine-glass.jpg');

var clickEvent = function() {
  var imgID = event.target.id;
  for (var i=0; i < imgArr.length; i++) {
    if (imgArr[i].name === imgID) {
      imgArr[i].clicked++;
    }
  }
  selectPics();
  counter++;
  if (counter >= 25) {
    firstImg.removeEventListener('click', clickEvent);
    secondImg.removeEventListener('click', clickEvent);
    thirdImg.removeEventListener('click', clickEvent);
    results();
  }
  console.log('counter: ', counter);
};

firstImg.addEventListener('click', clickEvent);
secondImg.addEventListener('click', clickEvent);
thirdImg.addEventListener('click', clickEvent);

//this function is to displayImg also render each pic to element
function displayImg(randomOne, randomTwo, randomThree, firstPath, secondPath, thirdPath) {
  console.log('firstPath is ', firstPath);
  firstImg.setAttribute('src', firstPath.path);
  firstImg.setAttribute('id', firstPath.name);

  console.log('secondPath is ', secondPath);
  secondPath.setAttribute('src', secondPath.path);
  secondPath.setAttribute('id', secondPath.name);

  console.log('thirdPath is ', thirdPath);
  thirdPath.setAttribute('src', thirdPath.path);
  thirdPath.setAttribute('id', thirdPath.name);

  display.push(imgArr[randomOne]);
  display.push(imgArr[randomTwo]);
  display.push(imgArr[randomThree]);
}

function results() {
  var list = document.getElementById('results');
  var item = document.createElement('ul');
  for (var i=0; i < imgArr.length; i++) {
    resultsArr.push('<li> name: ' + 'Clicks: ' + imgArr[i].clicked + 'times shown: ' + imgArr[i].shown + '</li>');
  }
  resultsArr = resultsArr.join(',');
  item.innerHTML = resultsArr;
  list.appendChild(item);
}

function getRandNum() {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}
function selectPics() {
  var randomOne = getRandNum();
  var firstPath = imgArr[randomOne];

  var randomTwo = getRandNum();
  while(randomTwo === randomOne) {
    randomTwo = getRandNum();
  }
  var secondPath = imgArr[randomTwo];

  var randomThree = getRandNum();
  while (randomThree === randomOne || randomThree === randomTwo) {
    randomThree = getRandNum();
  }
  var thirdPath = imgArr[randomThree];

  firstPath.shown++;
  secondPath.shown++;
  thirdPath.shown++;

  displayImg(randomOne, randomTwo, randomThree, firstPath, secondPath, thirdPath);
}
selectPics();



// var canvas = document.getElementById('chart');
// var ctx = canvas.getContext('2d');
//
// var chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: [];
//     data: randImg(),
//     backgroundColor: ['#444', '#888', '#e3e3e3', '#9cafb1' ];
//   }
//   options: {}
// });
